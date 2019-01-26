#!/usr/bin/python
# -*- coding:UTF-8 -*-
# Author: wangmiansen
# Date: 2018-12-13

from bs4 import BeautifulSoup
from urllib import request
import chardet
import time
from MySQLCommand import *
from Logger import *

# 连接数据库
mySQLCommand = MySQLCommand()
mySQLCommand.connectMysql()

logger = Logger()

headers = {
    'User-Agent': ('Mozilla/5.0 (compatible; MSIE 9.0; '
                   'Windows NT 6.1; Win64; x64; Trident/5.0)'),
}


class DataCrawler(object):
    # 爬取文章URL
    def getHtmlUrl(self):
        result = mySQLCommand.queryCrawlerHub()
        for item in result:
            try:
                req = request.Request(url=item[1], headers=headers)
                page = request.urlopen(req)  # 获取网页源代码
                html = page.read()  # 字节数组
            # try:
            # charset = chardet.detect(html)
            # html = html.decode("UTF-8")  # 设置抓取到的html的编码方式
            # html = html.decode(str(charset["encoding"])) # 解码
            # except UnicodeDecodeError as e:
            # logger.getErrorLog("解码出错",e)
                soup = BeautifulSoup(html, 'html.parser')  # 前一个参数为要解析的文本，后一个参数为解析模型
            except Exception as e:
                logger.getErrorLog("HUB_URL配置出错：%s" % item[1])
                continue
            urlList = soup.select(item[3])  # 返回类型是 list
            # if not len(urlList):
                # raise ValueError('文章URL选择器配置出错: %s' % item[3])
            for url in urlList:
                url = url['href']
                # 判断URL是否完整
                if url.startswith("//"):
                    url = "http:"+url
                elif not url.startswith("http"):
                    url = item[2] + url
                new_dict = {
                    "hub_id": item[0],
                    "html_url": url,
                    "state": "0",
                    "create_date": datetime.datetime.now()
                }
                mySQLCommand.insertCrawlerHtml(new_dict)
            page.close()
            time.sleep(3)

    # 爬取文章数据
    def getArticle(self):
        result = mySQLCommand.queryCrawlerHubAndCrawlerHtml()
        if len(result):
            try:
                for item in result:
                    req = request.Request(url=item[4], headers=headers)
                    try:
                        page = request.urlopen(req)  # 获取网页源代码
                    except Exception as e:
                        logger.getErrorLog("获取网页源代码出错，URL: %s" % item[4])
                        page = ''
                    finally:
                        # 打开URL出错，则把此URL的状态设置为 1，以后就不再读取这条URL了
                        mySQLCommand.updateCrawlerHtmlState(item[0])
                    if not page:
                        continue
                    html = page.read()  # 字节数组
                    # html = html.decode("UTF-8")  # 设置抓取到的html的编码方式
                    soup = BeautifulSoup(html, 'html.parser')  # 前一个参数为要解析的文本，后一个参数为解析模型

                    # 标题 当标题为空时，退出当前循环
                    try:
                        if item[5]:
                            title = soup.select(item[5])
                            # List为空时，获取'src'属性会报错，所以这里判断一下
                            if len(title):
                                title = soup.select(item[5])[0].get_text().strip()
                            else:
                                continue
                        else:
                            continue
                    except Exception as e:
                        # raise ('标题配置出错: %s' % item[5])
                        logger.getErrorLog("标题配置出错 %s" % item[5])
                        #title = ''

                    # 文章头图
                    try:
                        if item[6]:
                            article_avatar = soup.select(item[6])
                            if len(article_avatar):
                                article_avatar = soup.select(item[6])[0][item[13]]
                                if article_avatar.startswith("//"):
                                    article_avatar = "http:"+article_avatar
                                elif not article_avatar.startswith("http"):
                                    article_avatar = item[12] + article_avatar
                            else:
                                article_avatar = ''
                        else:
                            article_avatar = ''
                    except Exception as e:
                        logger.getErrorLog("文章头图配置出错", e)

                    # 作者名称
                    try:
                        if item[7]:
                            author = soup.select(item[7])
                            if len(author):
                                author = soup.select(item[7])[0].get_text()
                            else:
                                author = ''
                        else:
                            author = ''
                    except Exception as e:
                        logger.getErrorLog("作者名称配置出错", e)

                    # 作者头像
                    try:
                        if item[8]:
                            user_avatar = soup.select(item[8])
                            # List为空时，获取'src'属性会报错，所以这里判断一下
                            if len(user_avatar):
                                user_avatar = soup.select(item[8])[0][item[14]]
                                if user_avatar.startswith("//"):
                                    user_avatar = "http:"+user_avatar
                                elif not user_avatar.startswith("http"):
                                    user_avatar = item[12] + user_avatar
                            else:
                                user_avatar = ''
                        else:
                            user_avatar = ''
                    except Exception as e:
                        logger.getErrorLog("作者头像配置出错", e)

                     # 正文
                    try:
                        if item[9]:
                            content = soup.select(item[9])
                            if len(content):
                                content = soup.select(item[9])[0]
                            else:
                                content = ''
                        else:
                            content = ''
                    except Exception as e:
                        logger.getErrorLog("正文配置出错", e)

                    # 摘录
                    try:
                        if item[11]:
                            excerpt = soup.select(item[11])
                            if len(excerpt):
                                excerpt = soup.select(item[11])[0]
                            else:
                                excerpt = ''
                        else:
                            excerpt = ''
                    except Exception as e:
                        logger.getErrorLog("摘录配置出错", e)

                    new_dict = {
                        "html_id": item[0],
                        "channel_name": item[1],
                        "theme_name": '' if item[2] is None else item[2],
                        "site_name": '' if item[3] is None else item[3],
                        "title": title,
                        "author": author,
                        "content": content,
                        "excerpt": excerpt,
                        "article_avatar": article_avatar,
                        "user_avatar": user_avatar,
                        "article_url": item[4],
                        "state": "0",
                        "create_date": datetime.datetime.now(),
                        "is_crawler_content": item[10]
                    }
                    mySQLCommand.insertCrawlerArticle(new_dict)
                    page.close()
                    time.sleep(3)
                    # mySQLCommand.closeMysql()
            except Exception as e:
                logger.getErrorLog("DataCrawler-getArticle-连接出错", e)

    def run(self):
        while 1:
            self.getHtmlUrl()
            self.getArticle()
            time.sleep(60)


if __name__ == '__main__':
    dataCrawler = DataCrawler()
    while 1:
        #dataCrawler.getHtmlUrl()
        dataCrawler.getArticle()
        time.sleep(3)

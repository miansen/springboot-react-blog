#!/usr/bin/python
# -*- coding:UTF-8 -*-
# Author: wangmiansen
# Date: 2018-12-22

from bs4 import BeautifulSoup
from urllib import request
import chardet
import time
from MySQLCommand import *

# 连接数据库
mySQLCommand = MySQLCommand()
mySQLCommand.connectMysql()

headers = {
    'User-Agent': ('Mozilla/5.0 (compatible; MSIE 9.0; '
                   'Windows NT 6.1; Win64; x64; Trident/5.0)'),
}

class VerifyConfiguration(object):

    # 验证URL
    def verifyUrl(self,id):
        try:
            result = mySQLCommand.queryCrawlerHubById(id)
            #print(result)
            req = request.Request(url=result[1], headers=headers)
            page = request.urlopen(req)  # 获取网页源代码
            if page:
                html = page.read()  # 字节数组
                soup = BeautifulSoup(html, 'html.parser')
                urlList = soup.select(result[3])
                #print(urlList)
                urls = []
                for url in urlList:
                    url = url['href']
                    if url.startswith("//"):
                        url = "http:"+url
                    elif not url.startswith("http"):
                        url = result[2] + url
                    urls.append(url)
                #print(urls)
                page.close()
                return urls
        except Exception as e:
            # raise ValueError('HUB_URL配置出错: %s' % result[1])
            print(e)

    # 验证选择器
    def verifySelector(self,urls,id):
        item = mySQLCommand.queryCrawlerHubById(id)
        # print(item)
        if len(urls):
            try:
                for url in urls:
                    req = request.Request(url=url, headers=headers)
                    try:
                        page = request.urlopen(req)  # 获取网页源代码
                    except Exception as e:
                        logger.getErrorLog("获取网页源代码出错，URL: %s" % url)
                        page = ''
                    if not page:
                        continue
                    html = page.read()  # 字节数组
                    soup = BeautifulSoup(html, 'html.parser')

                    # 标题
                    try:
                        if item[4]:
                            title = soup.select(item[4])
                            if len(title):
                                title = soup.select(item[4])[0].get_text().strip()
                            else:
                                continue
                        else:
                            continue
                    except Exception as e:
                        logger.getErrorLog("标题配置出错 %s" % item[4])

                    # 文章头图
                    try:
                        if item[5]:
                            article_avatar = soup.select(item[5])
                            if len(article_avatar):
                                article_avatar = soup.select(item[5])[0][item[16]]
                                if article_avatar.startswith("//"):
                                    article_avatar = "http:"+article_avatar
                                elif not article_avatar.startswith("http"):
                                    article_avatar = item[2] + article_avatar
                            else:
                                article_avatar = ''
                        else:
                            article_avatar = ''
                    except Exception as e:
                        logger.getErrorLog("文章头图配置出错", e)

                    # 作者名称
                    try:
                        # print(item[6])
                        if item[6]:
                            author = soup.select(item[6])
                            if len(author):
                                author = soup.select(item[6])[0].get_text()
                            else:
                                author = ''
                        else:
                            author = ''
                    except Exception as e:
                        logger.getErrorLog("作者名称配置出错", e)

                    # 作者头像
                    try:
                        if item[7]:
                            user_avatar = soup.select(item[7])
                            if len(user_avatar):
                                user_avatar = soup.select(item[7])[0][item[17]]
                                if user_avatar.startswith("//"):
                                    user_avatar = "http:"+user_avatar
                                elif not user_avatar.startswith("http"):
                                    user_avatar = item[2] + user_avatar
                            else:
                                user_avatar = ''
                        else:
                            user_avatar = ''
                    except Exception as e:
                        logger.getErrorLog("作者头像配置出错", e)

                     # 正文
                    try:
                        if item[8]:
                            content = soup.select(item[8])
                            if len(content):
                                content = soup.select(item[8])[0]
                            else:
                                content = ''
                        else:
                            content = ''
                    except Exception as e:
                        logger.getErrorLog("正文配置出错", e)

                    # 摘录
                    try:
                        if item[9]:
                            excerpt = soup.select(item[9])
                            if len(excerpt):
                                excerpt = soup.select(item[9])[0].get_text()[0:200].replace("\n", "")
                            else:
                                excerpt = ''
                        else:
                            excerpt = ''
                    except Exception as e:
                        logger.getErrorLog("摘录配置出错", e)

                    print("标题：",title,"\nURL：",url,"\n作者：",author,"\n头像：",
                          user_avatar,"\n头图：",article_avatar,"\n正文（长度）：",content,
                          "\n摘录：",excerpt,"\n频道：",item[10],"\n主题：",'' if item[11] is None else item[11],"\n站点：",'' if item[12] is None else item[12])
                    print("-------------------------------------------------------------------------------------------------------")
                    page.close()
                    time.sleep(1)
            except Exception as e:
                logger.getErrorLog("VerifyConfiguration-verifySelector-连接出错", e)

if __name__ == '__main__':
    verifyConfiguration = VerifyConfiguration()
    result = verifyConfiguration.verifyUrl(76)
    #print(result)
    verifyConfiguration.verifySelector(result,76)
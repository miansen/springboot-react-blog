#!/usr/bin/python
# -*- coding:UTF-8 -*-
# Author: wangmiansen
# Date: 2018-12-14

from OSSCommand import *
from MySQLCommand import *
from bs4 import BeautifulSoup
from Logger import *
import time

# 连接OSS
oSSCommand = OSSCommand()
oSSCommand.connectOSS()

# 连接数据库
mySQLCommand = MySQLCommand()
mySQLCommand.connectMysql()

logger = Logger()

class DataClean(object):

    def dataClean(self):
        try:
            result = mySQLCommand.queryCrawlerArticle()
            if len(result):
                for item in result:

                    # 上传OSS的路径
                    article_avatar = 'images/article/%s/%s.jpg' % (datetime.datetime.now().strftime('%Y/%m/%d'),int(round(time.time()*1000)))
                    user_avatar = 'images/user/%s/%s.jpg' % (datetime.datetime.now().strftime('%Y/%m/%d'),int(round(time.time()*1000)))

                    # 文章头图
                    if item[9] and item[9].startswith("http"):
                        oSSCommand.upload(item[9],article_avatar) # 上传文章头图
                        article_avatar = "https://static.tuzixinwen.com/%s" % (article_avatar)
                    else:
                        article_avatar = ''

                    # 用户头像
                    if item[10] and item[10].startswith("http"):
                        oSSCommand.upload(item[10],user_avatar) # 上传用户头像
                        user_avatar = "https://static.tuzixinwen.com/%s" % (user_avatar)
                    else:
                        user_avatar = ''

                    # 标题
                    if item[5]:
                        title = item[5]
                    else:
                        title = ""

                    # 当is_crawler_content = 1并且正文不为空
                    if item[12] == 1 and item[6]:
                        content = self.contentClean(item[6],item[1])
                    else:
                        content = ""

                    # 摘录
                    if item[7]:
                        excerpt = item[7]
                    else:
                        excerpt = ""

                    # 作者
                    if item[8]:
                        author = item[8]
                    else:
                        author = ""

                    # 文章原文链接
                    if item[11]:
                        article_url = item[11]
                    else:
                        article_url = ""

                    new_dict = {
                        "channel_name": item[2],
                        "theme_name": item[3],
                        "site_name": item[4],
                        "title": title,
                        "content": content,
                        "excerpt": excerpt,
                        "author": author,
                        "article_avatar": article_avatar,
                        "article_url": article_url,
                        "show_content": item[12],
                        "create_date": datetime.datetime.now(),
                        "crawler_article_id": item[0],
                        "username": author,
                        "password": int(time.time()),
                        "user_avatar": user_avatar,
                        "user_url": "/user/%s" % (author),
                        "theme_url": "/theme/%s" % (item[3]),
                        "site_url": "/site/%s" % (item[4])
                    }
                    mySQLCommand.insertArticle(new_dict)
                    time.sleep(3)
        except Exception as e:
            logger.getErrorLog("清洗数据出错",e)


    # 清洗文章内容
    def contentClean(self,content,html_id):
        try:
            if content:
                try:
                    soup = BeautifulSoup(content,"html.parser") #创建一个BeautifulSoup解析对象
                    imgList = soup.select('img')
                    if len(imgList):
                        # 文章图片属性选择器
                        attr = mySQLCommand.queryArticleAvatarImgAttrSelectorByHtmlId(html_id)
                        for item in imgList:
                            # print(item['src'])
                            try:
                                imgURL = item[attr[0]] # 图片URL
                                if imgURL :
                                    if imgURL.startswith("//"):
                                        imgURL = "http:"+imgURL
                                    elif not imgURL.startswith("http"):
                                        imgURL = attr[1]+imgURL
                                else:
                                    continue
                                article_avatar = 'images/article/%s/%s.jpg' % (datetime.datetime.now().strftime('%Y/%m/%d'),int(round(time.time()*1000)))
                                oSSCommand.upload(imgURL,article_avatar) # 上传文章头图
                                # 这里替换的还是'src'
                                content = content.replace(item['src'],"https://static.tuzixinwen.com/%s" % (article_avatar)) # 替换图片链接
                            except KeyError:
                                continue
                            time.sleep(3)
                    return content
                except Exception as e:
                    logger.getErrorLog("解析对象出错",e)
        except Exception as e:
            logger.getErrorLog("清洗文章内容出错",e)

if __name__ == '__main__':
    dataClean = DataClean()
    # dataClean.dataClean()
    content = mySQLCommand.queryCrawlerArticleById(163)
    result = dataClean.contentClean(content[0])
    print(result)
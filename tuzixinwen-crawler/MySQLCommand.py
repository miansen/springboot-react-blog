#!/usr/bin/python
# -*- coding:UTF-8 -*-
# Author: wangmiansen
# Date: 2018-12-13

import pymysql
import datetime
from Logger import *

logger = Logger()

# 数据库操作
class MySQLCommand(object):
    # 初始化
    def __init__(self):
        self.host = 'localhost'
        self.port = 3306
        self.user = 'sen'
        self.password = '123'
        self.db = 'kxw'

    # 连接数据库
    def connectMysql(self):
        try:
            self.conn = pymysql.connect(host=self.host, port=self.port, user=self.user,
                                        passwd=self.password, db=self.db, charset='utf8')
            self.cursor = self.conn.cursor()
        except Exception as e:
            logger.getErrorLog('MySQLCommand-connectMysql-连接数据库失败,原因：%s' % (e))

    # 查询crawler_hub
    def queryCrawlerHub(self):
        try:
            sql = "select hub_id, hub_url, index_url, article_url_selector from crawler_hub where is_delete = 0"
            self.cursor.execute(sql)
            return self.cursor.fetchall()
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryCrawlerHub-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))

    # 关联查询
    def queryCrawlerHubAndCrawlerHtml(self):
        try:
            sql = "SELECT " \
                  "b.html_id," \
                  "a.channel_name," \
                  "a.theme_name," \
                  "a.site_name," \
                  "b.html_url," \
                  "a.title_selector," \
                  "a.article_avatar_img_selector," \
                  "a.author_selector," \
                  "a.author_avatar_img_selector," \
                  "a.content_selector," \
                  "a.is_crawler_content," \
                  "a.excerpt_selector," \
                  "a.index_url," \
                  "a.article_avatar_img_attr_selector," \
                  "a.author_avatar_img_attr_selector " \
                  "FROM " \
                  "crawler_hub a,crawler_html b " \
                  "WHERE " \
                  "a.hub_id = b.hub_id " \
                  "AND " \
                  "b.state = 0 " \
                  "ORDER BY RAND()"
            self.cursor.execute(sql)
            return self.cursor.fetchall()
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryCrawlerHubAndCrawlerHtml-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))


    # 根据ID关联查询
    def queryCrawlerHubAndCrawlerHtmlById(self,id):
        try:
            sql = "SELECT " \
                  "b.html_id," \
                  "a.channel_name," \
                  "a.theme_name," \
                  "a.site_name," \
                  "b.html_url," \
                  "a.title_selector," \
                  "a.article_avatar_img_selector," \
                  "a.author_selector," \
                  "a.author_avatar_img_selector," \
                  "a.content_selector," \
                  "a.is_crawler_content," \
                  "a.excerpt_selector," \
                  "a.index_url," \
                  "a.article_avatar_img_attr_selector," \
                  "a.author_avatar_img_attr_selector " \
                  "FROM " \
                  "crawler_hub a,crawler_html b " \
                  "WHERE " \
                  "a.hub_id = b.hub_id " \
                  "AND b.state = 0 " \
                  "AND b.hub_id = %s" % id
            self.cursor.execute(sql)
            return self.cursor.fetchall()
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryCrawlerHubAndCrawlerHtmlById-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))

    # 查询crawler_article
    def queryCrawlerArticle(self):
        try:
            sql = "select " \
                  "crawler_article_id," \
                  "html_id," \
                  "channel_name," \
                  "theme_name," \
                  "site_name," \
                  "title," \
                  "content," \
                  "excerpt," \
                  "author," \
                  "article_avatar," \
                  "user_avatar," \
                  "article_url," \
                  "is_crawler_content " \
                  "from crawler_article WHERE state = 0 ORDER BY RAND()"
            try:
                self.cursor.execute(sql)
                return self.cursor.fetchall()
            except pymysql.Error as e:
                logger.getErrorLog(
                    "MySQLCommand-queryCrawlerArticle-查询[crawler_article]失败，原因 %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryCrawlerArticle-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))

    def queryCrawlerArticleById(self, id):
        try:
            try:
                sql = "select content from crawler_article where crawler_article_id = %s" % (id)
                self.cursor.execute(sql)
                return self.cursor.fetchone()
            except pymysql.Error as e:
                logger.getErrorLog("MySQLCommand-queryCrawlerArticleById失败-原因: %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryCrawlerArticleById-数据库错误，原因: %d: %s" % (e.args[0], e.args[1]))

    # 根据ID查询crawler_hub
    def queryCrawlerHubById(self,id):
        try:
            try:
                sql = "select * from crawler_hub where hub_id = %s" % (id)
                self.cursor.execute(sql)
                return self.cursor.fetchone()
            except pymysql.Error as e:
                logger.getErrorLog("MySQLCommand-queryCrawlerHubById失败-原因: %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryCrawlerHubById-数据库错误，原因: %d: %s" % (e.args[0], e.args[1]))

    # 根据html_id查询文章图片属性选择器和站点根路径
    def queryArticleAvatarImgAttrSelectorByHtmlId(self,id):
        try:
            try:
                sql = "SELECT b.article_avatar_img_attr_selector,b.index_url from crawler_html a,crawler_hub b where a.html_id = %s and a.hub_id = b.hub_id" % (id)
                self.cursor.execute(sql)
                return self.cursor.fetchone()
            except pymysql.Error as e:
                logger.getErrorLog("MySQLCommand-queryArticleAvatarImgAttrSelectorByHtmlId失败-原因: %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-queryArticleAvatarImgAttrSelectorByHtmlId-数据库错误，原因: %d: %s" % (e.args[0], e.args[1]))

    # 将页面URL插入crawler_html
    def insertCrawlerHtml(self, new_dict):
        try:
            sql = "insert into crawler_html " \
                  "(hub_id,html_url,state,create_date) " \
                  "VALUES " \
                  "(%s,'%s','%s','%s')" \
                  % (new_dict['hub_id'], new_dict['html_url'], new_dict['state'], new_dict['create_date'])
            try:
                # logger.getDebugLog(sql)
                result = self.cursor.execute(sql)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertCrawlerHtml-插入[crawler_html]成功")
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog(
                    "MySQLCommand-insertCrawlerHtml-插入[crawler_html]失败，原因 %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-insertCrawlerHtml-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))

    # 将文章信息插入crawler_article并更新crawler_html的状态
    def insertCrawlerArticle(self, new_dict):
        try:
            sql = "insert into crawler_article " \
                  "(html_id," \
                  "channel_name," \
                  "theme_name," \
                  "site_name," \
                  "title," \
                  "author," \
                  "content," \
                  "excerpt," \
                  "article_avatar," \
                  "user_avatar," \
                  "article_url," \
                  "state," \
                  "create_date," \
                  "is_crawler_content) " \
                  "VALUES " \
                  "(%s,'%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')" \
                  % (new_dict['html_id'],
                     new_dict['channel_name'],
                     new_dict['theme_name'],
                     new_dict['site_name'],
                     new_dict['title'],
                     new_dict['author'],
                     new_dict['content'],
                     new_dict['excerpt'],
                     new_dict['article_avatar'],
                     new_dict['user_avatar'],
                     new_dict['article_url'],
                     new_dict['state'],
                     new_dict['create_date'],
                     new_dict['is_crawler_content'])

            sql2 = "update crawler_html set state = '1' where html_id = %s" % (new_dict['html_id'])
            try:
                logger.getDebugLog(sql)
                result = self.cursor.execute(sql)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertCrawlerArticle-插入[crawler_article]成功")
                    try:
                        result = self.cursor.execute(sql2)
                        self.conn.commit()
                        if result:
                            logger.getDebugLog("MySQLCommand-insertCrawlerArticle-更新[crawler_html]状态成功")
                    except pymysql.Error as e:
                        self.conn.rollback()
                        logger.getErrorLog(
                            "MySQLCommand-insertCrawlerArticle-更新[crawler_html]状态失败，原因 %d: %s" % (e.args[0], e.args[1]))
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog(
                    "MySQLCommand-insertCrawlerArticle-插入[crawler_article]失败，原因 %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-insertCrawlerArticle-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))

    def insertArticle(self, new_dict):
        try:
            sql = "insert into article " \
                  "(channel_name," \
                  "theme_name," \
                  "site_name," \
                  "title," \
                  "content," \
                  "excerpt," \
                  "author," \
                  "avatar," \
                  "article_url," \
                  "show_content," \
                  "create_date," \
                  "crawler_article_id) " \
                  "VALUES " \
                  "('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s',%s) " \
                  % (new_dict['channel_name'], new_dict['theme_name'], new_dict['site_name'],
                     new_dict['title'], new_dict['content'], new_dict['excerpt'],
                     new_dict['author'], new_dict['article_avatar'], new_dict['article_url'],
                     new_dict['show_content'], new_dict['create_date'], new_dict['crawler_article_id'])
            sql2 = "insert into user (username,password,avatar,user_url,create_date) " \
                   "VALUES ('%s','%s','%s','%s','%s')" \
                   % (new_dict['username'], new_dict['password'], new_dict['user_avatar'],
                      new_dict['user_url'], new_dict['create_date'])
            sql3 = "insert into theme (channel_name,theme_name,theme_url,create_date) values ('%s','%s','%s','%s')" \
                   % (new_dict['channel_name'], new_dict['theme_name'], new_dict['theme_url'], new_dict['create_date'])
            sql4 = "insert into site (channel_name,site_name,site_url,create_date) values ('%s','%s','%s','%s')" \
                   % (new_dict['channel_name'], new_dict['site_name'], new_dict['site_url'], new_dict['create_date'])
            sql5 = "update crawler_article set state = '1' where crawler_article_id = %s" % (
            new_dict['crawler_article_id'])
            try:
                result = self.cursor.execute(sql)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertArticle-插入[article]成功")
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog("MySQLCommand-insertArticle-插入[article]失败，原因 %d: %s" % (e.args[0], e.args[1]))
            try:
                result = self.cursor.execute(sql2)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertArticle-插入[user]成功")
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog("MySQLCommand-insertArticle-插入[user]失败，原因 %d: %s" % (e.args[0], e.args[1]))
            try:
                result = self.cursor.execute(sql3)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertArticle-插入[theme]成功")
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog("MySQLCommand-insertArticle-插入[theme]失败，原因 %d: %s" % (e.args[0], e.args[1]))
            try:
                result = self.cursor.execute(sql4)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertArticle-插入[site]成功")
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog("MySQLCommand-insertArticle-插入[site]失败，原因 %d: %s" % (e.args[0], e.args[1]))
            try:
                # print(sql5)
                result = self.cursor.execute(sql5)
                self.conn.commit()
                if result:
                    logger.getDebugLog("MySQLCommand-insertArticle-更新[crawler_article]状态成功")
            except pymysql.Error as e:
                self.conn.rollback()
                logger.getErrorLog(
                    "MySQLCommand-insertArticle-更新[crawler_article]状态失败，原因 %d: %s" % (e.args[0], e.args[1]))
        except pymysql.Error as e:
            logger.getErrorLog("MySQLCommand-insertArticle-数据库错误，原因%d: %s" % (e.args[0], e.args[1]))

    # 更新crawler_html表的state
    def updateCrawlerHtmlState(self, html_id):
        sql1 = "update crawler_html set state = '1' where html_id = %s" % html_id
        try:
            result = self.cursor.execute(sql1)
            self.conn.commit()
            if result:
                logger.getDebugLog("MySQLCommand-updateCrawlerHtmlState-更新[crawler_html]状态成功")
        except pymysql.Error as e:
            self.conn.rollback()
            logger.getErrorLog("MySQLCommand-updateCrawlerHtmlState-更新[crawler_html]状态失败，原因 %d: %s" % (e.args[0], e.args[1]))

    # 关闭数据库
    def closeMysql(self):
        self.cursor.close()
        self.conn.close()  # 创建数据库操作类的实例
        logger.getDebugLog("MySQLCommand-closeMysql-关闭数据库成功")


if __name__ == '__main__':
    mySQLCommand = MySQLCommand()
    mySQLCommand.connectMysql()
    # result = mySQLCommand.queryCrawlerHub()
    # result = mySQLCommand.queryCrawlerHubAndCrawlerHtml()
    # for item in result:
    # print(item)

    new_dict = {
        "hub_id": 1,
        "html_url": "https://www.huxiu.com/article/276279.html",
        "state": 0,
        "create_date": datetime.datetime.now()
    }
    # mySQLCommand.insertCrawlerHtml(new_dict)
    new_dict2 = {
        "html_id": 22,
        "channel_name": "科技",
        "theme_name": "互联网资讯",
        "site_name": "虎嗅网",
        "title": "马化腾、张小龙等腾讯高管的集体反思",
        "author": "周超臣",
        "content": "在12月12日的腾讯2018年度员工大会上，马化腾、刘炽平、任宇昕和张小龙轮流上去忆苦思甜。最后一个出场的张小龙最不按套路出牌，但他募集到了最多的掌声和笑声，他的段子征服了无数鹅厂的女员工，她们在朋友圈里各种花痴着她们的男神。",
        "article_avatar": "https://img.huxiucdn.com/article/cover/201812/13/071817172246.jpg?imageView2/1/w/710/h/400/|imageMogr2/strip/interlace/1/quality/85/format/jpg",
        "user_avatar": "https://img.huxiucdn.com/auth/data/avatar/001/34/22/81_avatar_big.jpg?imageView2/1/w/200/h/200/|imageMogr2/strip/interlace/1/quality/85/format/jpg",
        "article_url": "https://www.huxiu.com/article/276279.html",
        "state": "0",
        "create_date": datetime.datetime.now(),
        "is_crawler_content": 0
    }
    # mySQLCommand.insertCrawlerArticle(new_dict2)
    new_dict3 = {
        "channel_name": "测试",
        "theme_name": "测试主题2",
        "site_name": "测试站点2",
        "title": "通用汽车背水一战",
        "content": "在12月12日的腾讯2018年度员工大会上，马化腾、刘炽平、任宇昕和张小龙轮流上去忆苦思甜。最后一个出场的张小龙最不按套路出牌，但他募集到了最多的掌声和笑声，他的段子征服了无数鹅厂的女员工，她们在朋友圈里各种花痴着她们的男神。",
        "excerpt": "",
        "author": "周超臣",
        "article_avatar": "https://img.huxiucdn.com/article/cover/201812/13/071817172246.jpg?imageView2/1/w/710/h/400/|imageMogr2/strip/interlace/1/quality/85/format/jpg",
        "article_url": "https://www.huxiu.com/article/276279.html",
        "show_content": 1,
        "create_date": datetime.datetime.now(),
        "crawler_article_id": 163,
        "username": "周超臣",
        "password": "123456",
        "user_avatar": "https://img.huxiucdn.com/auth/data/avatar/001/34/22/81_avatar_big.jpg?imageView2/1/w/200/h/200/|imageMogr2/strip/interlace/1/quality/85/format/jpg",
        "user_url": "/user/周超臣",
        "theme_url": "/theme/测试主题2",
        "site_url": "/site/测试站点2"
    }
    # mySQLCommand.insertArticle(new_dict3)
    # result = mySQLCommand.queryCrawlerArticle()
    # for item in result:
    # print(item)
    # result = mySQLCommand.queryCrawlerArticleById(163)
    # print(result)
    result = mySQLCommand.queryArticleAvatarImgAttrSelectorByHtmlId(8378)[0]
    print(result)
    mySQLCommand.closeMysql()

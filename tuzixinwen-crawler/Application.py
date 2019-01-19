#!/usr/bin/python
# -*- coding:UTF-8 -*-
# Author: wangmiansen
# Date: 2018-12-13

from DataCrawler import *
from DataClean import *

dataCrawler = DataCrawler()
dataClean = DataClean()

while 1:
    dataCrawler.getHtmlUrl()
    dataCrawler.getArticle()
    dataClean.dataClean()
    time.sleep(7200)
package com.tell.service.impl;

import com.tell.mapper.CrawlerMapper;
import com.tell.model.CrawlerHub;
import com.tell.service.CrawlerHubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author: miansen
 * @Date: 2018/12/16 21:02
 */
@Service
public class CrawlerHubServiceImpl implements CrawlerHubService {

    @Autowired
    private CrawlerMapper crawlerMapper;
    @Override
    public void insertCrawlerHub(CrawlerHub crawlerHub) {
        crawlerMapper.insertCrawlerHub(crawlerHub);
    }
}

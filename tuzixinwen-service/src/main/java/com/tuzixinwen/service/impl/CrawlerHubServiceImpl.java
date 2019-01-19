package com.tuzixinwen.service.impl;

import com.tuzixinwen.mapper.CrawlerMapper;
import com.tuzixinwen.model.CrawlerHub;
import com.tuzixinwen.service.CrawlerHubService;
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

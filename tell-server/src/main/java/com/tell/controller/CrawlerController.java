package com.tell.controller;

import com.tell.bean.Result;
import com.tell.exception.ApiAssert;
import com.tell.model.CrawlerHub;
import com.tell.service.CrawlerHubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: miansen
 * @Date: 2018/12/16 21:07
 */
@RestController
public class CrawlerController {

    @Autowired
    private CrawlerHubService crawlerHubService;

    @PostMapping(value = "/crawler")
    private Result addCrawler(@RequestBody CrawlerHub crawlerHub){
        ApiAssert.notNull(crawlerHub,"参数不正确");
        crawlerHubService.insertCrawlerHub(crawlerHub);
        System.out.println(crawlerHub);
        return Result.success();
    }
}

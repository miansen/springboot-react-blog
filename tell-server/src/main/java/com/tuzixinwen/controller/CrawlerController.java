package com.tuzixinwen.controller;

import com.tuzixinwen.bean.Result;
import com.tuzixinwen.exception.ApiAssert;
import com.tuzixinwen.model.CrawlerHub;
import com.tuzixinwen.service.CrawlerHubService;
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

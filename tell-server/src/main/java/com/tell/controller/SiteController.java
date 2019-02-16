package com.tell.controller;

import com.tell.bean.Page;
import com.tell.bean.Result;
import com.tell.conf.properties.SiteConfig;
import com.tell.exception.ApiAssert;
import com.tell.model.Article;
import com.tell.model.Site;
import com.tell.service.ArticleService;
import com.tell.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 23:01
 */
@RestController
public class SiteController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private SiteService siteService;

    @Autowired
    private SiteConfig siteConfig;

    /**
     * 根据站点名称获取文章
     * @param siteName
     * @param pageNo
     * @return
     */
    @GetMapping("/site/articles")
    private Result detail(@RequestParam(value = "siteName") String siteName,
                          @RequestParam(value = "pageNo",defaultValue = "1") Integer pageNo){
        ApiAssert.notNull(siteName,"站点名称不能为空");
        Page<Article> page = articleService.pageBySiteName(pageNo, siteConfig.getPageSize(), siteName);
        return Result.success(page);
    }

    /**
     * 获取所有的站点
     * @return
     */
    @GetMapping("/sites")
    private Result siteList(){
        List<Site> list = siteService.findSiteAll(null, null);
        return Result.success(list);
    }
}

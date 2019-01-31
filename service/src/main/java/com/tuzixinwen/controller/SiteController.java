package com.tuzixinwen.controller;

import com.tuzixinwen.bean.Page;
import com.tuzixinwen.bean.Result;
import com.tuzixinwen.conf.properties.SiteConfig;
import com.tuzixinwen.exception.ApiAssert;
import com.tuzixinwen.model.Article;
import com.tuzixinwen.model.Site;
import com.tuzixinwen.service.ArticleService;
import com.tuzixinwen.service.SiteService;
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

package com.tuzixinwen.controller;

import com.tuzixinwen.conf.properties.SiteConfig;
import com.tuzixinwen.bean.Result;
import com.tuzixinwen.model.Article;
import com.tuzixinwen.service.ArticleService;
import com.tuzixinwen.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/17 15:23
 */
@RestController
public class indexController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private ThemeService themeService;

    @Autowired
    private SiteConfig siteConfig;

    /**
     * 根据频道获取文章
     * @param pageNo
     * @param channelName
     * @return
     */
        @GetMapping(value = "/channel/articles")
    private Result index(@RequestParam(value = "pageNo",defaultValue = "1") Integer pageNo,
                         @RequestParam(value = "channelName",required = false) String channelName){
        return Result.success(articleService.page(pageNo, siteConfig.getPageSize(), channelName));
    }

    /**
     * 24小时
     * @return
     */
    @GetMapping(value = "/articles/24news")
    private Result TwentyFourHoursHotNews(){
        List<Article> list = articleService.findArticleOderByDateDesc(0, 20);
        return Result.success(list);
    }

    /**
     * 热门新闻
     * @return
     */
    @GetMapping(value = "/articles/hot")
    private Result hotNews(@RequestParam(value = "pageNo",defaultValue = "1") Integer pageNo,
                           @RequestParam(value = "pageSize",defaultValue = "5") Integer pageSize){
        return Result.success(articleService.findArticleOderByViewCountDesc(pageNo,pageSize));
    }
}

package com.tell.controller;

import com.tell.bean.Result;
import com.tell.exception.ApiAssert;
import com.tell.model.Article;
import com.tell.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 20:40
 */

@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    /**
     * 获取文章详情
     * @param id
     * @return
     */
    @GetMapping(value = "/article/{id}")
    private Result detail(@PathVariable Integer id){
        ApiAssert.notNull(id,"ID不能为空");
        Article article = articleService.findById(id);
        ApiAssert.notNull(article,"文章不存在");
        //更新文章的点击次数
        article.setViewCount(article.getViewCount() + 1);
        articleService.update(article);
        return Result.success(article);
    }

    /**
     * 新增文章
     * @param article
     * @return
     */
    @PostMapping(value = "/article")
    public Result save(@RequestBody Article article){
        ApiAssert.notNull(article,"对象为空");
        article.setCreateDate(new Date());
        article = articleService.save(article);
        return Result.success(article);
    }
}

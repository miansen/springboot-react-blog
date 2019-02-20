package com.tell.controller;

import com.tell.bean.Result;
import com.tell.exception.ApiAssert;
import com.tell.model.Article;
import com.tell.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
     * 获取作者的其他文章
     * @param author: 作者
     * @param currentArticleId: 当前文章ID
     * @return
     */
    @GetMapping(value = "/article/author/other")
    private Result getAuthorOtherArticle(@RequestParam(value = "author")String author,
                                         @RequestParam(value = "currentArticleId") Integer currentArticleId){
        List<Article> list = articleService.findAuthorOtherArticle(author, currentArticleId, 0, 10);
        return Result.success(list);
    }

    /**
     * 新增文章
     * @param article
     * @return
     */
    @PostMapping(value = "/article")
    public Result save(@RequestBody Article article){
        ApiAssert.notNull(article,"对象为空");
        article = articleService.save(article);
        return Result.success(article);
    }
}

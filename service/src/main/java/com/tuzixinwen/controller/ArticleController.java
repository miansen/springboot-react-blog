package com.tuzixinwen.controller;

import com.tuzixinwen.bean.Result;
import com.tuzixinwen.exception.ApiAssert;
import com.tuzixinwen.model.Article;
import com.tuzixinwen.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}

package com.tuzixinwen.controller;

import com.tuzixinwen.bean.Page;
import com.tuzixinwen.bean.Result;
import com.tuzixinwen.conf.properties.SiteConfig;
import com.tuzixinwen.exception.ApiAssert;
import com.tuzixinwen.model.Article;
import com.tuzixinwen.model.User;
import com.tuzixinwen.service.ArticleService;
import com.tuzixinwen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/2 23:28
 */
@RestController
public class UserController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private UserService userService;

    @Autowired
    private SiteConfig siteConfig;

    /**
     * 根据作者获取文章
     * @param username
     * @param pageNo
     * @return
     */
    @GetMapping(value = "/user/articles")
    private Result userArticles(@RequestParam(value = "username") String username,
                                @RequestParam(value = "pageNo",defaultValue = "1") Integer pageNo){
        ApiAssert.notNull(username,"作者名称不能为空");
        Page<Article> page = articleService.pageByAuthor(pageNo, siteConfig.getPageSize(), username);
        return Result.success(page);
    }

    /**
     * 根据用户昵称获取用户数据
     * @param username
     * @return
     */
    @GetMapping(value = "/users/{username}")
    private Result userDetail(@PathVariable(value = "username") String username){
        ApiAssert.notNull(username,"作者名称不能为空");
        User user = userService.findUserByName(username);
        ApiAssert.notNull(user,"用户不存在");
        return Result.success(user);
    }

    /**
     * 推荐作者
     * @return
     */
    @GetMapping(value = "/user/recommend")
    private Result recommend(){
        List<User> list = userService.findUserByArticleCountDesc(0, 3);
        return Result.success(list);
    }
}

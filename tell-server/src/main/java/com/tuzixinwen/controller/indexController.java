package com.tuzixinwen.controller;

import com.tuzixinwen.conf.properties.SiteConfig;
import com.tuzixinwen.bean.Result;
import com.tuzixinwen.exception.ApiAssert;
import com.tuzixinwen.model.AccessToken;
import com.tuzixinwen.model.Article;
import com.tuzixinwen.model.User;
import com.tuzixinwen.service.AccessTokenService;
import com.tuzixinwen.service.ArticleService;
import com.tuzixinwen.service.ThemeService;
import com.tuzixinwen.service.UserService;
import com.tuzixinwen.util.JwtTokenUtil;
import com.tuzixinwen.util.StringUtil;
import com.tuzixinwen.util.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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
    private UserService userService;
    @Autowired
    private AccessTokenService accessTokenService;
    @Autowired
    private ThemeService themeService;
    @Autowired
    private SiteConfig siteConfig;
    @Autowired
    private StringUtil stringUtil;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

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

    @PostMapping(value = "/register")
    public Result register(@RequestBody User user){
        String username = user.getUsername();
        String password = user.getPassword();
        String email = user.getEmail();
        ApiAssert.notEmpty(username, "请输入用户名");
        ApiAssert.notEmpty(password, "请输入密码");
        ApiAssert.isTrue(stringUtil.check(username,stringUtil.usernameRegex),"用户名只能输入[0-9a-zA-Z]，长度4-16位");
        ApiAssert.isTrue(stringUtil.check(password,stringUtil.passwordRegex),"密码只能输入[0-9a-zA-Z]，长度6-32位");
        user = userService.findUserByName(username);
        ApiAssert.isNull(user,"用户名已经存在");
        // 保存用户
        user = userService.create(username, password, email);
        // 保存Token
        AccessToken accessToken = accessTokenService.create(jwtTokenUtil.generateToken(user.getUsername()), user.getUserId());
        HashMap<String, Object> map = new HashMap<>();
        map.put("username",user.getUsername());
        map.put("avatar",user.getAvatar());
        map.put("token",accessToken.getToken());
        return Result.success(map);
    }

    @PostMapping(value = "/login")
    public Result login(@RequestBody User user){
        String username = user.getUsername();
        String password = user.getPassword();
        ApiAssert.notEmpty(username, "请输入用户名");
        ApiAssert.notEmpty(password, "请输入密码");
        user = userService.findUserByName(username);
        ApiAssert.notNull(user, "用户不存在");
        ApiAssert.isTrue(new BCryptPasswordEncoder().matches(password, user.getPassword()), "密码不正确");
        AccessToken accessToken = accessTokenService.getByUserId(user.getUserId());
        HashMap<String, Object> map = new HashMap<>();
        map.put("username",user.getUsername());
        map.put("avatar",user.getAvatar());
        map.put("token",accessToken.getToken());
        return Result.success(map);
    }
}

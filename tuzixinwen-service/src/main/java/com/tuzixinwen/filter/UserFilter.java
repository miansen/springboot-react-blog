package com.tuzixinwen.filter;

import com.tuzixinwen.conf.properties.SiteConfig;
import com.tuzixinwen.util.JwtTokenUtil;
import com.tuzixinwen.bean.Result;
import com.tuzixinwen.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @Author: miansen
 * @Date: 2018/11/17 13:39
 */
@Component
public class UserFilter implements HandlerInterceptor{

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private SiteConfig siteConfig;
    @Autowired
    private StringUtil stringUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        String authToken = (String) request.getAttribute("authToken");
        String username = jwtTokenUtil.getUsernameFromToken(authToken);
        if (siteConfig.getBan().contains(username)) {
            Result.error(response, 201, "您的帐号已被封");
            return false;
        }
        return true;
    }
}

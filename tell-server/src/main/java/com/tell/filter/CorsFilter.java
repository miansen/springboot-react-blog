package com.tell.filter;

import com.tell.conf.properties.SiteConfig;
import com.tell.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 跨域过滤器
 * @Author: miansen
 * @Date: 2018/11/28 19:00
 */
/*@WebFilter
@Component*/
public class CorsFilter implements Filter {

    @Autowired
    private SiteConfig siteConfig;
    @Autowired
    private StringUtil stringUtil;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        /**
         * 可接受的域名请求,"*"表示接受任意域名的请求
         */
        response.setHeader("Access-Control-Allow-Origin", stringUtil.listToString(siteConfig.getCorsDomain(), ","));

        /**
         * 该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。
         * 注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。
         */
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");

        /**
         * 表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
         */
        response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");

        /**
         * 该字段可选
         * 用来指定本次预检请求的有效期，单位为秒。
         */
        response.setHeader("Access-Control-Max-Age", "3600");

        /**
         * 是否允许发送Cookie，需要客户端和服务器共同合作
         * 服务器：设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。
         * 这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。
         * 客户端：
         * 开发者必须在AJAX请求中打开withCredentials属性。如：
         * var xhr = new XMLHttpRequest();
         * xhr.withCredentials = true;
         * 否则，即使服务器同意发送Cookie，浏览器也不会发送。
         */
        response.setHeader("Access-Control-Allow-Credentials", "true");

        /**
         * 该字段可选
         * 允许XMLHttpRequest对象的getResponseHeader()方法能拿到FooBar字段的值
         */
        response.setHeader("Access-Control-Expose-Headers", "FooBar");

        /**
         * 支持HTTP 1.1
         */
        // response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

        /**
         * 支持HTTP 1.0. response.setHeader("Expires", "0");
         */
        // response.setHeader("Pragma", "no-cache");

        filterChain.doFilter(servletRequest, servletResponse);
    }
}

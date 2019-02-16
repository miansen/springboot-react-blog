package com.tuzixinwen.conf;

import com.tuzixinwen.conf.properties.SiteConfig;
import com.tuzixinwen.filter.CommonFilter;
import com.tuzixinwen.filter.JwtFilter;
import com.tuzixinwen.filter.UserFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * @Author: miansen
 * @Date: 2018/11/17 13:41
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport{

    @Autowired
    private JwtFilter jwtFilter;
    @Autowired
    private CommonFilter commonFilter;
    @Autowired
    private UserFilter userFilter;
    @Autowired
    private SiteConfig siteConfig;

    /**
     * 全局拦截器配置
     * @param registry
     */
    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        super.addInterceptors(registry);
        // 全局拦截器，统计每个请求执行的时间
        registry.addInterceptor(commonFilter).addPathPatterns("/**");
        // JWT拦截器，验证token
        registry.addInterceptor(jwtFilter)
                .addPathPatterns(
                        "/article/create",
                        "/article/update",
                        "/article/delete",
                        "/article/good",
                        "/article/top",
                        "/comment/create",
                        "/comment/update",
                        "/comment/delete",
                        "/user/settings/**",
                        "/collect/save",
                        "/collect/delete",
                        "/upload"
                );
        registry.addInterceptor(userFilter)
                .addPathPatterns(
                        "/article/create",
                        "/article/update",
                        "/article/delete",
                        "/comment/create",
                        "/comment/update",
                        "/comment/delete",
                        "/upload"
                );
    }

    /**
     * 跨域配置
     * addMapping：配置可以被跨域的路径，可以任意配置，可以具体到直接请求路径。
     * allowedMethods：允许所有的请求方法访问该跨域资源服务器，如：POST、GET、PUT、DELETE等。
     * allowedHeaders：允许所有的请求header访问，可以自定义设置任意请求头信息，如："X-TOKEN"
     * allowedOrigins：允许所有的请求域名访问我们的跨域资源，可以固定单条或者多条内容，如："http://www.baidu.com"，只有百度可以访问我们的跨域资源。
     * @param registry
     */
    @Override
    protected void addCorsMappings(CorsRegistry registry) {
        super.addCorsMappings(registry);
        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowedOrigins(siteConfig.getCorsDomain().toArray(new String[siteConfig.getCorsDomain().size()]));
    }
}

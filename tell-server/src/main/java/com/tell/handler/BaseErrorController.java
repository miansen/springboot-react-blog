package com.tell.handler;

import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.autoconfigure.web.servlet.error.BasicErrorController;
import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * 定义全局系统错误异常处理
 * @Author: miansen
 * @Date: 2018/11/28 09:43
 */
@Component
public class BaseErrorController extends BasicErrorController{

    public BaseErrorController(ServerProperties serverProperties) {
        super(new DefaultErrorAttributes(), serverProperties.getError());
    }

    /**
     * 输入json格式的错误信息
     * code : 错误码
     * description : 错误信息
     * @param request
     * @return
     */
    @Override
    public ResponseEntity<Map<String, Object>> error(HttpServletRequest request) {
        Map<String, Object> body = this.getErrorAttributes(request,
                this.isIncludeStackTrace(request, MediaType.ALL));
        HttpStatus status = this.getStatus(request);
        //输入自定义的json格式
        Map<String, Object> map = new HashMap<>();
        map.put("code",status.value());
        map.put("description",body.get("message"));
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<Map<String, Object>>(map,headers,HttpStatus.OK);
    }
}

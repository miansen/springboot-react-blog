package com.tell.handler;

import com.tell.bean.Result;
import com.tell.exception.ApiException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 全局接口异常处理
 * @Author: miansen
 * @Date: 2018/11/28 09:49
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 获取错误码
     */
    /*private HttpStatus getStatus(HttpServletRequest request) {
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
        if (statusCode == null) {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.valueOf(statusCode);
    }*/

    /**
     * 捕获接口ApiException异常，并返回自定义的异常信息和格式的json
     * @param e
     * @return
     */
    @ExceptionHandler(value = ApiException.class)
    @ResponseBody
    public Result jsonErrorHandler(ApiException e){
        Result result = new Result();
        result.setCode(e.getCode());
        result.setDescription(e.getMessage());
        return result;
    }

    /**
     * 捕获其他Exception异常，并返回一个带有错误码和错误信息的视图
     */
    /*@ExceptionHandler(value = Exception.class)
    public ModelAndView defaultErrorHandler(HttpServletRequest request, Exception e) throws Exception {
        e.printStackTrace();
        ModelAndView mav = new ModelAndView();
        mav.addObject("exception", e.getMessage());
        mav.addObject("errorCode", getStatus(request));
        mav.setViewName("error/error");
        return mav;
    }*/
}

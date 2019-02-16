package com.tell.bean;

import com.tell.util.JsonUtil;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 封装JSON对象，所有的返回结果都使用它
 * @Author: miansen
 * @Date: 2018/11/17 12:54
 */
public class Result {

    private int code; //状态码
    private String description; //描述信息
    private Object detail; //成功时返回的对象

    /**
     * 成功
     * 不返回对象
     * @return
     */
    public static Result success() {
        return success(null);
    }

    /**
     * 成功
     * 返回对象
     * @param detail:返回的对象
     * @return
     */
    public static Result success(Object detail) {
        Result result = new Result();
        result.setCode(200);
        result.setDescription("success");
        result.setDetail(detail);
        return result;
    }

    /**
     * 失败
     * 不返回错误信息
     * 默认错误码：201
     * @return
     */
    public static Result error() {
        return error(null);
    }

    /**
     * 失败
     * 返回错误信息
     * 默认错误码：201
     * @param description : 错误信息
     * @return
     */
    public static Result error(String description) {
        return error(201, description);
    }

    /**
     * 失败
     * 自定义错误码和错误信息
     * @param code：错误码
     * @param description：错误信息
     * @return
     */
    public static Result error(int code, String description) {
        Result result = new Result();
        result.setCode(code);
        result.setDescription(description);
        result.setDetail(null);
        return result;
    }

    /**
     * 失败
     * 用于校验Token时，如果Token不合法或已过期，则将错误码和错误信息以json的格式输出
     * @param response
     * @param code：错误码
     * @param description：错误信息
     * @throws IOException
     */
    public static void error(HttpServletResponse response, int code, String description) throws IOException {
        Result result = new Result();
        result.setCode(code);
        result.setDescription(description);
        result.setDetail(null);
        response.setContentType("application/json;charset=utf-8");
        response.getWriter().write(JsonUtil.objectToJson(result));
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Object getDetail() {
        return detail;
    }

    public void setDetail(Object detail) {
        this.detail = detail;
    }
}

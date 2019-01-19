package com.tuzixinwen.util;

import com.google.gson.Gson;

/**
 * @Author: miansen
 * @Date: 2018/11/17 12:53
 */
public class JsonUtil {

    public final static Gson gson = new Gson();

    public static String objectToJson(Object object) {
        return gson.toJson(object);
    }

    public static <T> T jsonToObject(String json, Class<T> object) {
        return gson.fromJson(json, object);
    }

}


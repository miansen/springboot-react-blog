package com.tuzixinwen.service;

import com.tuzixinwen.model.Theme;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 15:05
 */
public interface ThemeService {

    /**
     * 查询所有主题
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Theme> findThemeAll(Integer pageNo, Integer pageSize);

}

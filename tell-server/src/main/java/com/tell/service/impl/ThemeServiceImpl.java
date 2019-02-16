package com.tell.service.impl;

import com.tell.mapper.ThemeMapper;
import com.tell.model.Theme;
import com.tell.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 15:06
 */
@Service
public class ThemeServiceImpl implements ThemeService {

    @Autowired
    private ThemeMapper themeMapper;

    /**
     * 查询所有主题
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public List<Theme> findThemeAll(Integer pageNo, Integer pageSize) {
        return themeMapper.findThemeAll(pageNo,pageSize);
    }

}

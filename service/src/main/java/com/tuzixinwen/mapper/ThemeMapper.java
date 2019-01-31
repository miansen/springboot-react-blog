package com.tuzixinwen.mapper;

import com.tuzixinwen.model.Theme;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 14:43
 */
@Mapper
public interface ThemeMapper {

    /**
     * 查询所有主题
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Theme> findThemeAll(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize);
}

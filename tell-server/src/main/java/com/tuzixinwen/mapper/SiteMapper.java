package com.tuzixinwen.mapper;

import com.tuzixinwen.model.Site;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/15 20:24
 */
@Mapper
public interface SiteMapper {

    /**
     * 查询所有站点
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Site> findSiteAll(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize);
}

package com.tuzixinwen.service;

import com.tuzixinwen.model.Site;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 22:55
 */
public interface SiteService {

    /**
     * 查询所有站点
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Site> findSiteAll(Integer pageNo, Integer pageSize);
}

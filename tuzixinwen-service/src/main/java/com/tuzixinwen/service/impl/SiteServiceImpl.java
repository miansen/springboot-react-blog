package com.tuzixinwen.service.impl;

import com.tuzixinwen.mapper.SiteMapper;
import com.tuzixinwen.model.Site;
import com.tuzixinwen.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/30 22:56
 */
@Service
public class SiteServiceImpl implements SiteService {

    @Autowired
    private SiteMapper siteMapper;

    /**
     * 查询所有站点
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public List<Site> findSiteAll(Integer pageNo, Integer pageSize) {
        return siteMapper.findSiteAll(pageNo,pageSize);
    }
}

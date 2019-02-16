package com.tell.service.impl;

import com.tell.mapper.SiteMapper;
import com.tell.model.Site;
import com.tell.service.SiteService;
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

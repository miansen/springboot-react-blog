package com.tell.mapper;

import com.tell.model.CrawlerHub;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Author: miansen
 * @Date: 2018/12/16 20:57
 */
@Mapper
public interface CrawlerMapper {

    void insertCrawlerHub(CrawlerHub crawlerHub);
}

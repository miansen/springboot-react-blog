package com.tell.service;

import com.tell.model.Channel;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/16 01:14
 */
public interface ChannelService {

    /**
     * 查询所有的频道
     * @return
     */
    List<Channel> findAll();

    /**
     * 根据频道名称查询频道
     * @param name
     * @return
     */
    Channel findByName(String name);
}

package com.tell.service.impl;

import com.tell.mapper.ChannelMapper;
import com.tell.model.Channel;
import com.tell.service.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/16 01:15
 */
@Service
public class ChannelServiceImpl implements ChannelService {

    @Autowired
    private ChannelMapper channelMapper;

    /**
     * 查询所有的频道
     * @return
     */
    @Override
    public List<Channel> findAll() {
        return channelMapper.selectAll();
    }

    /**
     * 根据频道名称查询频道的信息
     * @param name
     * @return
     */
    @Override
    public Channel findByName(String name) {
        return channelMapper.findbyName(name);
    }
}

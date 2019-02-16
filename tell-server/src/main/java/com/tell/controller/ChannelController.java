package com.tell.controller;

import com.tell.bean.Result;
import com.tell.service.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: miansen
 * @Date: 2018/11/17 19:52
 */
@RestController
public class ChannelController {

    @Autowired
    private ChannelService channelService;

    /**
     * 获取所有的频道
     * @return
     */
    @GetMapping(value = "/channels")
    private Result getChannel(){
        return Result.success(channelService.findAll());
    }

    /**
     * 根据频道名称获取频道的信息
     * @param channelName
     * @return
     */
    @GetMapping(value = "/channels/{channelName}")
    private Result detail(@PathVariable(value = "channelName") String channelName){
        return Result.success(channelService.findByName(channelName));
    }
}

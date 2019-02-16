package com.tell.mapper;

import com.tell.model.Channel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/17 19:50
 */
@Mapper
public interface ChannelMapper {

    /**
     * 查询全部的频道
     * @return
     */
    List<Channel> selectAll();

    /**
     * 根据频道名称查询频道信息
     * @param name
     * @return
     */
    Channel findbyName(@Param("name") String name);
}

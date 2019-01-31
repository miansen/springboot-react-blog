package com.tuzixinwen.service.impl;

import com.tuzixinwen.mapper.UserMapper;
import com.tuzixinwen.model.User;
import com.tuzixinwen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/2 23:22
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    /**
     * 根据昵称查询用户
     * @param name: 用户昵称
     * @return
     */
    @Override
    public User findUserByName(String name) {
        return userMapper.findUserByName(name);
    }

    /**
     * 查询发表文章数量最多的用户
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public List<User> findUserByArticleCountDesc(Integer pageNo, Integer pageSize) {
        return userMapper.findUserByArticleCountDesc(pageNo,pageSize);
    }
}

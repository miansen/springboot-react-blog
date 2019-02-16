package com.tuzixinwen.service;

import com.tuzixinwen.model.User;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/2 23:21
 */

public interface UserService {

    /**
     * 根据昵称查询用户
     * @param name
     * @return
     */
    User findUserByName(String name);

    /**
     * 发表文章数量最多的用户
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<User> findUserByArticleCountDesc(Integer pageNo, Integer pageSize);

    void save(User user);

    User create(String username, String password, String email);
}

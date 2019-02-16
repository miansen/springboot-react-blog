package com.tell.service.impl;

import com.tell.mapper.UserMapper;
import com.tell.model.User;
import com.tell.service.UserService;
import com.tell.util.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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

    @Override
    public void save(User user) {
        this.userMapper.insert(user);
    }

    @Override
    public User create(String username, String password, String email) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        user.setEmail(email);
        user.setAvatar("https://static.tuzixinwen.com/images/default-avatar.jpg");
        user.setSignature("这家伙很懒，什么都没留下");
        user.setUserUrl("/user/"+username);
        user.setScore(0);
        user.setWebsite(null);
        user.setBlock(false);
        user.setDelete(false);
        user.setRole(null);
        user.setCreateDate(new Date());
        user.setUpdateDate(null);
        user.setRemark(null);
        this.save(user);
        return user;
    }
}

package com.tuzixinwen.service.impl;

import com.tuzixinwen.mapper.AccessTokenMapper;
import com.tuzixinwen.model.AccessToken;
import com.tuzixinwen.service.AccessTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * @Author: miansen
 * @Date: 2019/1/31 17:20
 */
@Service
public class AccessTokenServiceImpl implements AccessTokenService{

    @Autowired
    private AccessTokenMapper accessTokenMapper;

    @Override
    public AccessToken getByUserId(Integer userId) {
        return accessTokenMapper.selectByUserId(userId);
    }

    @Override
    public void save(AccessToken accessToken) {
        this.accessTokenMapper.insert(accessToken);
    }

    @Override
    public AccessToken create(String token, Integer userId) {
        AccessToken accessToken = new AccessToken();
        accessToken.setToken(token);
        accessToken.setUserId(userId);
        accessToken.setCreateDate(new Date());
        this.save(accessToken);
        return accessToken;
    }
}

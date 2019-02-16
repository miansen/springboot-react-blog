package com.tuzixinwen.service;

import com.tuzixinwen.model.AccessToken;

/**
 * @Author: miansen
 * @Date: 2019/1/31 17:20
 */
public interface AccessTokenService {

    AccessToken getByUserId(Integer userId);

    void save(AccessToken accessToken);

    AccessToken create(String token,Integer userId);
}

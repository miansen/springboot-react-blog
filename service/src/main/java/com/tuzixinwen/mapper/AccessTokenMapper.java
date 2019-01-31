package com.tuzixinwen.mapper;

import com.tuzixinwen.model.AccessToken;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @Author: miansen
 * @Date: 2019/1/31 17:03
 */
@Mapper
public interface AccessTokenMapper {

    AccessToken selectByUserId(@Param("userId") Integer UserId);

    int insert(AccessToken accessToken);
}

package com.tuzixinwen.mapper;

import com.tuzixinwen.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/12/5 19:04
 */
@Mapper
public interface UserMapper {

    /**
     * 根据用户昵称查询用户
     * @param name
     * @return
     */
    User findUserByName(@Param("name") String name);

    /**
     * 查询发表文章数量最多的用户
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<User> findUserByArticleCountDesc(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize);

    int insert(User user);
}

package com.tell.mapper;

import com.tell.model.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/17 14:51
 */
@Mapper
public interface ArticleMapper {

    /**
     * 根据频道、主题、站点、作者获取文章
     * @param channelName
     * @param themeName
     * @param siteName
     * @param author
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticle(@Param("channelName") String channelName,
                              @Param("themeName") String themeName,
                              @Param("siteName") String siteName,
                              @Param("author") String author,
                              @Param("pageNo") Integer pageNo,
                              @Param("pageSize") Integer pageSize
    );

    /**
     * 随机获取当天的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticleByRand(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize);


    /**
     * 查询最新的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticleOderByDateDesc(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize);

    /**
     * 查询点击次数最多的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticleOderByViewCountDesc(@Param("pageNo") Integer pageNo, @Param("pageSize") Integer pageSize);

    /**
     * 查询指定站点的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticleInSite(@Param("pageNo") Integer pageNo,
                                    @Param("pageSize") Integer pageSize);

    /**
     * 查询作者的其他文章
     * @param author: 作者
     * @param currentArticleId: 当前文章ID
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findAuthorOtherArticle(@Param("author") String author,
                                         @Param("currentArticleId") Integer currentArticleId,
                                         @Param("pageNo") Integer pageNo,
                                         @Param("pageSize") Integer pageSize);

    /**
     * 根据ID查询文章
     * @param id
     * @return
     */
    Article selectById(@Param("id") Integer id);

    /**
     * 根据频道、主题、站点、作者统计文章数量
     * @param channelName
     * @param themeName
     * @param siteName
     * @param author
     * @return
     */
    int countArticle(@Param("channelName") String channelName,
                     @Param("themeName") String themeName,
                     @Param("siteName") String siteName,
                     @Param("author") String author
    );

    /**
     * 统计当天的文章数量
     * @return
     */
    int countToday();

    /**
     * 统计指定站点的文章
     * @return
     */
    int countInSite();

    /**
     * 更新文章
     * @param article
     * @return
     */
    int updateByPrimaryKey(Article article);
}

package com.tell.service;

import com.tell.bean.Page;
import com.tell.model.Article;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/18 13:58
 */
public interface ArticleService {

    Page<Article> page(Integer pageNo, Integer pageSize, String channelName);

    /**
     * 根据频道名称查询文章
     * @param pageNo
     * @param pageSize
     * @param channelName
     * @return
     */
    Page<Article> pageByChannelName(Integer pageNo, Integer pageSize, String channelName);

    /**
     * 根据主题名称查询文章
     * @param pageNo
     * @param pageSize
     * @param themeName
     * @return
     */
    Page<Article> pageByThemeName(Integer pageNo, Integer pageSize, String themeName);

    /**
     * 根据站点名称查询文章
     * @param pageNo
     * @param pageSize
     * @param siteName
     * @return
     */
    Page<Article> pageBySiteName(Integer pageNo, Integer pageSize, String siteName);

    /**
     * 根据作者查询文章
     * @param pageNo
     * @param pageSize
     * @param author
     * @return
     */
    Page<Article> pageByAuthor(Integer pageNo, Integer pageSize, String author);

    /**
     * 随机获取当天的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    Page<Article> pageByRand(Integer pageNo, Integer pageSize);

    /**
     * 获取指定站点的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    Page<Article> pageInSite(Integer pageNo, Integer pageSize);

    /**
     * 查询最新的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticleOderByDateDesc(Integer pageNo, Integer pageSize);

    /**
     * 查询点击次数最多的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findArticleOderByViewCountDesc(Integer pageNo, Integer pageSize);

    /**
     * 获取作者的其他文章
     * @param author: 作者
     * @param currentArticleId: 当前文章ID
     * @param pageNo
     * @param pageSize
     * @return
     */
    List<Article> findAuthorOtherArticle(String author,Integer currentArticleId,Integer pageNo, Integer pageSize);

    /**
     * 根据ID查询文章
     * @param id
     * @return
     */
    Article findById(Integer id);

    /**
     * 更新文章
     * @param article
     */
    void update(Article article);

    /**
     * 计算话题的weight
     * @param article
     */
    double weight(Article article);

    /**
     * 新增文章
     * @param article
     */
    Article save(Article article);
}

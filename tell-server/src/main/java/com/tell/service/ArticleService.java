package com.tell.service;

import com.tell.bean.Page;
import com.tell.model.Article;
import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/18 13:58
 */
public interface ArticleService {

    /**
     * 查询全部文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    Page<Article> page(Integer pageNo, Integer pageSize);

    /**
     * 根据主题查询文章
     * @param pageNo
     * @param pageSize
     * @param themeName
     * @return
     */
    Page<Article> pageByThemeName(Integer pageNo, Integer pageSize, String themeName);

    /**
     * 根据作者查询文章
     * @param pageNo
     * @param pageSize
     * @param author
     * @return
     */
    Page<Article> pageByAuthor(Integer pageNo, Integer pageSize, String author);

    /**
     * 查询weight最高的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    Page<Article> pageByWeight(Integer pageNo, Integer pageSize);

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

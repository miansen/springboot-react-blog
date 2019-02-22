package com.tell.service.impl;

import com.tell.bean.Page;
import com.tell.mapper.ArticleMapper;
import com.tell.model.Article;
import com.tell.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * @Author: miansen
 * @Date: 2018/11/18 14:15
 */
@Service
public class ArticleServiceImpl implements ArticleService{

    @Autowired
    private ArticleMapper articleMapper;

    /**
     * 查询全部文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public Page<Article> page(Integer pageNo, Integer pageSize) {
        List<Article> list = articleMapper.findArticle(null,null,(pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(null,null);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 根据主题查询文章
     * @param pageNo
     * @param pageSize
     * @param themeName
     * @return
     */
    @Override
    public Page<Article> pageByThemeName(Integer pageNo, Integer pageSize, String themeName) {
        List<Article> list = articleMapper.findArticle(themeName, null,(pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle( themeName, null);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 根据作者查询文章
     * @param pageNo
     * @param pageSize
     * @param author
     * @return
     */
    @Override
    public Page<Article> pageByAuthor(Integer pageNo, Integer pageSize, String author) {
        List<Article> list = articleMapper.findArticle(null, author, (pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(null, author);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 查询weight最高的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public Page<Article> pageByWeight(Integer pageNo, Integer pageSize) {
        List<Article> list = articleMapper.selectArticleByWeight((pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(null, null);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 更新文章
     * @param article
     */
    @Override
    public void update(Article article) {
        articleMapper.updateByPrimaryKey(article);
    }

    /**
     * 根据ID查询文章
     * @param id
     * @return
     */
    @Override
    public Article findById(Integer id) {
        return articleMapper.selectById(id);
    }

    @Override
    public double weight(Article article) {
        double Qview = Math.log10(article.getViewCount());
        int Qanswer = article.getContent().length();
        int Qscore = article.getUp() - article.getDown();
        Optional<Integer> Ascore = Optional.of(0);
        long Qage = article.getCreateDate().getTime();
        long Qupdated = article.getLastReplyTime() == null ? 0 : article.getLastReplyTime().getTime();
        double weightScore = ((Qview * 4) + (Qanswer * Qscore) / 5 + Ascore.get()) / Math.pow(((Qage + 1) - (Qage - Qupdated) / 2), 1.5);
        // article.setWeight(weightScore);
        return weightScore;
    }

    /**
     * 新增文章
     * @param article
     */
    @Override
    public Article save(Article article) {
        this.articleMapper.insert(article);
        return article;
    }
}

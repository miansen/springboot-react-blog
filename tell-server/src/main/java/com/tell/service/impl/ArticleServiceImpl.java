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

    @Override
    public Page<Article> page(Integer pageNo, Integer pageSize, String channelName) {
        if (channelName == null){
            return pageByRand(pageNo, pageSize);
        }else{
            return pageByChannelName(pageNo,pageSize,channelName);
        }
    }

    /**
     * 根据频道名称查询文章
     * @param pageNo
     * @param pageSize
     * @param channelName
     * @return
     */
    @Override
    public Page<Article> pageByChannelName(Integer pageNo, Integer pageSize, String channelName) {
        List<Article> list = articleMapper.findArticle(channelName, null, null, null,(pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(channelName, null, null, null);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 根据主题名称查询文章
     * @param pageNo
     * @param pageSize
     * @param themeName
     * @return
     */
    @Override
    public Page<Article> pageByThemeName(Integer pageNo, Integer pageSize, String themeName) {
        List<Article> list = articleMapper.findArticle(null, themeName, null, null, (pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(null, themeName, null, null);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 根据站点名称查询文章
     * @param pageNo
     * @param pageSize
     * @param siteName
     * @return
     */
    @Override
    public Page<Article> pageBySiteName(Integer pageNo, Integer pageSize, String siteName) {
        List<Article> list = articleMapper.findArticle(null, null, siteName,  null, (pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(null, null, siteName, null);
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
        List<Article> list = articleMapper.findArticle(null, null, null, author, (pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countArticle(null, null, null, author);
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 随机获取当天的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public Page<Article> pageByRand(Integer pageNo, Integer pageSize) {
        List<Article> list = articleMapper.findArticleByRand((pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countToday();
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 获取指定站点的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public Page<Article> pageInSite(Integer pageNo, Integer pageSize) {
        List<Article> list = articleMapper.findArticleInSite((pageNo - 1) * pageSize, pageSize);
        int count = articleMapper.countInSite();
        return new Page<>(pageNo,pageSize,count,list);
    }

    /**
     * 查询最新的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public List<Article> findArticleOderByDateDesc(Integer pageNo, Integer pageSize) {
        List<Article> list = articleMapper.findArticleOderByDateDesc(pageNo,pageSize);
        return list;
    }

    /**
     * 查询点击次数最多的文章
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public List<Article> findArticleOderByViewCountDesc(Integer pageNo, Integer pageSize) {
        return articleMapper.findArticleOderByViewCountDesc(pageNo,pageSize);
    }

    /**
     * 获取作者的其他文章
     * @param author: 作者
     * @param currentArticleId: 当前文章ID
     * @param pageNo
     * @param pageSize
     * @return
     */
    @Override
    public List<Article> findAuthorOtherArticle(String author, Integer currentArticleId, Integer pageNo, Integer pageSize) {
        return articleMapper.findAuthorOtherArticle(author,currentArticleId,pageNo,pageSize);
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

package com.tell.conf.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * @Author: miansen
 * @Date: 2018/11/17 13:00
 */
@Configuration
@ConfigurationProperties(value = "site")
public class SiteConfig {

    private List<String> corsDomain;
    private Integer pageSize;
    private Integer createTopicScore;
    private Integer createCommentScore;
    private Integer goodTopicScore;
    private List<String> admin;
    private List<String> ban;

    public Integer getGoodTopicScore() {
        return goodTopicScore;
    }

    public void setGoodTopicScore(Integer goodTopicScore) {
        this.goodTopicScore = goodTopicScore;
    }

    public Integer getCreateTopicScore() {
        return createTopicScore;
    }

    public void setCreateTopicScore(Integer createTopicScore) {
        this.createTopicScore = createTopicScore;
    }

    public Integer getCreateCommentScore() {
        return createCommentScore;
    }

    public void setCreateCommentScore(Integer createCommentScore) {
        this.createCommentScore = createCommentScore;
    }

    public List<String> getCorsDomain() {
        return corsDomain;
    }

    public void setCorsDomain(List<String> corsDomain) {
        this.corsDomain = corsDomain;
    }

    public List<String> getAdmin() {
        return admin;
    }

    public void setAdmin(List<String> admin) {
        this.admin = admin;
    }

    public List<String> getBan() {
        return ban;
    }

    public void setBan(List<String> ban) {
        this.ban = ban;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

}

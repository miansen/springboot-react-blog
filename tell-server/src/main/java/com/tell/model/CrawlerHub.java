package com.tell.model;

import org.springframework.data.annotation.Id;
import java.util.Date;

/**
 * @Author: miansen
 * @Date: 2018/12/16 20:26
 */
public class CrawlerHub {

    @Id
    private Integer hubId;
    private String hubUrl;
    private String indexUrl; //首页URL
    private String articleUrlSelector; //文章URL选择器
    private String titleSelector; //标题选择器
    private String articleAvatarImgSelector; //文章头图选择器
    private String authorSelector; //作者名称选择器
    private String authorAvatarImgSelector; //作者头像选择器
    private String contentSelector; //正文选择器
    private String excerptSelector; //摘录选择器
    private String channelName; //频道名称
    private String themeName; //主题名称
    private String siteName; //站点名称
    private Boolean isDelete; //是否删除 0: 默认 1: 删除
    private Date createDate; //创建时间
    private Boolean isCrawlerContent; //是否爬取正文 true: 是 false: 否
    private String articleAvatarImgAttrSelector; //文章头图属性选择器
    private String authorAvatarImgAttrSelector; //作者头像属性选择器

    public Integer getHubId() {
        return hubId;
    }

    public void setHubId(Integer hubId) {
        this.hubId = hubId;
    }

    public String getHubUrl() {
        return hubUrl;
    }

    public void setHubUrl(String hubUrl) {
        this.hubUrl = hubUrl;
    }

    public String getIndexUrl() {
        return indexUrl;
    }

    public void setIndexUrl(String indexUrl) {
        this.indexUrl = indexUrl;
    }

    public String getArticleUrlSelector() {
        return articleUrlSelector;
    }

    public void setArticleUrlSelector(String articleUrlSelector) {
        this.articleUrlSelector = articleUrlSelector;
    }

    public String getTitleSelector() {
        return titleSelector;
    }

    public void setTitleSelector(String titleSelector) {
        this.titleSelector = titleSelector;
    }

    public String getArticleAvatarImgSelector() {
        return articleAvatarImgSelector;
    }

    public void setArticleAvatarImgSelector(String articleAvatarImgSelector) {
        this.articleAvatarImgSelector = articleAvatarImgSelector;
    }

    public String getAuthorSelector() {
        return authorSelector;
    }

    public void setAuthorSelector(String authorSelector) {
        this.authorSelector = authorSelector;
    }

    public String getAuthorAvatarImgSelector() {
        return authorAvatarImgSelector;
    }

    public void setAuthorAvatarImgSelector(String authorAvatarImgSelector) {
        this.authorAvatarImgSelector = authorAvatarImgSelector;
    }

    public String getContentSelector() {
        return contentSelector;
    }

    public void setContentSelector(String contentSelector) {
        this.contentSelector = contentSelector;
    }

    public String getExcerptSelector() {
        return excerptSelector;
    }

    public void setExcerptSelector(String excerptSelector) {
        this.excerptSelector = excerptSelector;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public String getThemeName() {
        return themeName;
    }

    public void setThemeName(String themeName) {
        this.themeName = themeName;
    }

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Boolean getCrawlerContent() {
        return isCrawlerContent;
    }

    public void setCrawlerContent(Boolean crawlerContent) {
        isCrawlerContent = crawlerContent;
    }

    public String getArticleAvatarImgAttrSelector() {
        return articleAvatarImgAttrSelector;
    }

    public void setArticleAvatarImgAttrSelector(String articleAvatarImgAttrSelector) {
        this.articleAvatarImgAttrSelector = articleAvatarImgAttrSelector;
    }

    public String getAuthorAvatarImgAttrSelector() {
        return authorAvatarImgAttrSelector;
    }

    public void setAuthorAvatarImgAttrSelector(String authorAvatarImgAttrSelector) {
        this.authorAvatarImgAttrSelector = authorAvatarImgAttrSelector;
    }

    @Override
    public String toString() {
        return "CrawlerHub{" +
                "hubId=" + hubId +
                ", hubUrl='" + hubUrl + '\'' +
                ", indexUrl='" + indexUrl + '\'' +
                ", articleUrlSelector='" + articleUrlSelector + '\'' +
                ", titleSelector='" + titleSelector + '\'' +
                ", articleAvatarImgSelector='" + articleAvatarImgSelector + '\'' +
                ", authorSelector='" + authorSelector + '\'' +
                ", authorAvatarImgSelector='" + authorAvatarImgSelector + '\'' +
                ", contentSelector='" + contentSelector + '\'' +
                ", excerptSelector='" + excerptSelector + '\'' +
                ", channelName='" + channelName + '\'' +
                ", themeName='" + themeName + '\'' +
                ", siteName='" + siteName + '\'' +
                ", isDelete=" + isDelete +
                ", createDate=" + createDate +
                ", isCrawlerContent=" + isCrawlerContent +
                ", articleAvatarImgAttrSelector='" + articleAvatarImgAttrSelector + '\'' +
                ", authorAvatarImgAttrSelector='" + authorAvatarImgAttrSelector + '\'' +
                '}';
    }
}

package com.tell.model;

import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * @Author: miansen
 * @Date: 2018/11/17 13:47
 */
public class Article {

    @Id
    private Integer articleId; //文章ID

    private String channelName; //频道

    private String themeName; //主题

    private String siteName; //站点

    private String title; //标题

    private String content; //正文

    private String excerpt; //摘录

    private String author; //作者

    private String avatar; //头图

    private String articleUrl; //文章url

    private Integer viewCount; //浏览量

    private Integer replyCount; //回复量

    private String lastReplyAuthor; //最后回复用户

    private Date lastReplyTime; //最后回复时间，用于排序

    private Boolean top; //true:置顶 false:默认

    private Boolean good; //true:精华 false:默认

    private Boolean isDelete; //true:删除 false:默认

    private Boolean showContent; //是否显示正文 true: 是 false: 否

    private Date createDate; //创建时间

    private Date updateDate; //更新时间

    private String remark; //备注

    private Integer crawlerArticleId;

    private Double weight; // 话题权重

    private Integer up; //赞

    private Integer down; //踩

    private User user;

    private Channel channel;

    public Integer getArticleId() {
        return articleId;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getArticleUrl() {
        return articleUrl;
    }

    public void setArticleUrl(String articleUrl) {
        this.articleUrl = articleUrl;
    }

    public Integer getViewCount() {
        return viewCount;
    }

    public void setViewCount(Integer viewCount) {
        this.viewCount = viewCount;
    }

    public Integer getReplyCount() {
        return replyCount;
    }

    public void setReplyCount(Integer replyCount) {
        this.replyCount = replyCount;
    }

    public String getLastReplyAuthor() {
        return lastReplyAuthor;
    }

    public void setLastReplyAuthor(String lastReplyAuthor) {
        this.lastReplyAuthor = lastReplyAuthor;
    }

    public Date getLastReplyTime() {
        return lastReplyTime;
    }

    public void setLastReplyTime(Date lastReplyTime) {
        this.lastReplyTime = lastReplyTime;
    }

    public Boolean getTop() {
        return top;
    }

    public void setTop(Boolean top) {
        this.top = top;
    }

    public Boolean getGood() {
        return good;
    }

    public void setGood(Boolean good) {
        this.good = good;
    }

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public Boolean getShowContent() {
        return showContent;
    }

    public void setShowContent(Boolean showContent) {
        this.showContent = showContent;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getCrawlerArticleId() {
        return crawlerArticleId;
    }

    public void setCrawlerArticleId(Integer crawlerArticleId) {
        this.crawlerArticleId = crawlerArticleId;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getUp() {
        return up;
    }

    public void setUp(Integer up) {
        this.up = up;
    }

    public Integer getDown() {
        return down;
    }

    public void setDown(Integer down) {
        this.down = down;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Channel getChannel() {
        return channel;
    }

    public void setChannel(Channel channel) {
        this.channel = channel;
    }

    @Override
    public String toString() {
        return "Article{" +
                "articleId=" + articleId +
                ", channelName='" + channelName + '\'' +
                ", themeName='" + themeName + '\'' +
                ", siteName='" + siteName + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", excerpt='" + excerpt + '\'' +
                ", author='" + author + '\'' +
                ", avatar='" + avatar + '\'' +
                ", articleUrl='" + articleUrl + '\'' +
                ", viewCount=" + viewCount +
                ", replyCount=" + replyCount +
                ", lastReplyAuthor='" + lastReplyAuthor + '\'' +
                ", lastReplyTime=" + lastReplyTime +
                ", top=" + top +
                ", good=" + good +
                ", isDelete=" + isDelete +
                ", showContent=" + showContent +
                ", createDate=" + createDate +
                ", updateDate=" + updateDate +
                ", remark='" + remark + '\'' +
                ", crawlerArticleId=" + crawlerArticleId +
                ", weight=" + weight +
                ", up=" + up +
                ", down=" + down +
                ", user=" + user +
                ", channel=" + channel +
                '}';
    }
}

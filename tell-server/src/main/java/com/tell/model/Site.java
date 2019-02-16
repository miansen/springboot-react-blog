package com.tell.model;

import java.util.Date;

/**
 * @Author: miansen
 * @Date: 2018/11/17 18:06
 */
public class Site {

    private Integer siteId; //站点ID

    private String siteCode; //站点编码

    private String channelName; //频道

    private String siteName; //站点名称

    private String siteUrl; //站点url

    private String siteDesc; //站点描述

    private String avatarNormal; //头像

    private String avatarMini; //小头像

    private String avatarLarge; //背景图片

    private Boolean isDelete; //true:删除 false默认

    private Date createDate;// 创建时间

    private Date updateDate; //更新时间

    public Integer getSiteId() {
        return siteId;
    }

    public void setSiteId(Integer siteId) {
        this.siteId = siteId;
    }

    public String getSiteCode() {
        return siteCode;
    }

    public void setSiteCode(String siteCode) {
        this.siteCode = siteCode;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public String getSiteUrl() {
        return siteUrl;
    }

    public void setSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
    }

    public String getSiteDesc() {
        return siteDesc;
    }

    public void setSiteDesc(String siteDesc) {
        this.siteDesc = siteDesc;
    }

    public String getAvatarNormal() {
        return avatarNormal;
    }

    public void setAvatarNormal(String avatarNormal) {
        this.avatarNormal = avatarNormal;
    }

    public String getAvatarMini() {
        return avatarMini;
    }

    public void setAvatarMini(String avatarMini) {
        this.avatarMini = avatarMini;
    }

    public String getAvatarLarge() {
        return avatarLarge;
    }

    public void setAvatarLarge(String avatarLarge) {
        this.avatarLarge = avatarLarge;
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

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @Override
    public String toString() {
        return "Site{" +
                "siteId=" + siteId +
                ", siteCode='" + siteCode + '\'' +
                ", channelName='" + channelName + '\'' +
                ", siteName='" + siteName + '\'' +
                ", siteUrl='" + siteUrl + '\'' +
                ", siteDesc='" + siteDesc + '\'' +
                ", avatarNormal='" + avatarNormal + '\'' +
                ", avatarMini='" + avatarMini + '\'' +
                ", avatarLarge='" + avatarLarge + '\'' +
                ", isDelete=" + isDelete +
                ", createDate=" + createDate +
                ", updateDate=" + updateDate +
                '}';
    }
}

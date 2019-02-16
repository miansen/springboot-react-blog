package com.tuzixinwen.model;

import org.springframework.data.annotation.Id;
import java.util.Date;

/**
 * @Author: miansen
 * @Date: 2018/11/17 16:43
 */
public class Theme {

    @Id
    private Integer themeId; //主题ID

    private String themeCode; //主题编码

    private String channelName; //频道名称

    private String themeName; //主题名称

    private String themeUrl; //主题url

    private String themeDesc; //主题描述

    private String avatarNormal; //头像

    private String avatarMini; //小头像

    private String avatarLarge; //背景图片

    private Boolean isDelete; //true:删除 false:默认

    private Date createDate; //创建时间

    private Date updateDate; //更新时间

    public Integer getThemeId() {
        return themeId;
    }

    public void setThemeId(Integer themeId) {
        this.themeId = themeId;
    }

    public String getThemeCode() {
        return themeCode;
    }

    public void setThemeCode(String themeCode) {
        this.themeCode = themeCode;
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

    public String getThemeUrl() {
        return themeUrl;
    }

    public void setThemeUrl(String themeUrl) {
        this.themeUrl = themeUrl;
    }

    public String getThemeDesc() {
        return themeDesc;
    }

    public void setThemeDesc(String themeDesc) {
        this.themeDesc = themeDesc;
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
        return "Theme{" +
                "themeId=" + themeId +
                ", themeCode='" + themeCode + '\'' +
                ", channelName='" + channelName + '\'' +
                ", themeName='" + themeName + '\'' +
                ", themeUrl='" + themeUrl + '\'' +
                ", themeDesc='" + themeDesc + '\'' +
                ", avatarNormal='" + avatarNormal + '\'' +
                ", avatarMini='" + avatarMini + '\'' +
                ", avatarLarge='" + avatarLarge + '\'' +
                ", isDelete=" + isDelete +
                ", createDate=" + createDate +
                ", updateDate=" + updateDate +
                '}';
    }
}

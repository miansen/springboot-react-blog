package com.tell.model;

import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * @Author: miansen
 * @Date: 2018/11/17 16:08
 */
public class User {

    @Id
    private Integer userId; //用户ID

    private String username; //昵称

    private String password; //密码

    private String email; //邮箱

    private String avatar; //头像

    private String signature; //签名

    private String userUrl; //用户url

    private Integer score; //积分

    private String website; //个人网站

    private Boolean isBlock; //true:禁用 false:默认

    private Boolean isDelete; //true:删除 false:默认

    private Integer role; //角色

    private Date createDate; //创建时间

    private Date updateDate; //修改时间

    private String remark; //备注

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getUserUrl() {
        return userUrl;
    }

    public void setUserUrl(String userUrl) {
        this.userUrl = userUrl;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public Boolean getBlock() {
        return isBlock;
    }

    public void setBlock(Boolean block) {
        isBlock = block;
    }

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
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

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", avatar='" + avatar + '\'' +
                ", signature='" + signature + '\'' +
                ", userUrl='" + userUrl + '\'' +
                ", score=" + score +
                ", website='" + website + '\'' +
                ", isBlock=" + isBlock +
                ", isDelete=" + isDelete +
                ", role=" + role +
                ", createDate=" + createDate +
                ", updateDate=" + updateDate +
                ", remark='" + remark + '\'' +
                '}';
    }
}

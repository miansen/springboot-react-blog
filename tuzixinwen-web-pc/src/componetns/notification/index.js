import { notification } from 'antd';
import React, { Component } from 'react';

/**
 * 全局通知提醒框
 * @param type:success info warning error
 * @param message:通知提醒标题，必选（string）
 * @param description:通知提醒内容，必选（string）
 */
export const openNotificationWithIcon = (type,message,description) => {
    notification[type]({
        message: message,
        description: description,
    });
};
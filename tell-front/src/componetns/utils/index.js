/**
 * @Author: miansen
 * @Date: 2018/11/27
 * @description: 常用工具函数
 */

/**
 * 设备环境判断，暂时分为移动和PC
 * @returns {RegExpMatchArray}
 */
export function isMobile() {
    return navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)
}

/**
 * 获取滚动条距顶部的距离
 * @returns {HTMLElement | number}
 */
export function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
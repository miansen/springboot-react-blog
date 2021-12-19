CREATE TABLE `access_token` (
  `access_token_id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(5000) CHARACTER SET utf8 NOT NULL,
  `user_id` int(11) NOT NULL,
  `create_date` date DEFAULT NULL,
  PRIMARY KEY (`access_token_id`),
  KEY `key_token` (`token`(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章ID',
  `channel_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '频道',
  `theme_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '主题',
  `site_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '站点',
  `title` varchar(500) CHARACTER SET utf8 NOT NULL COMMENT '标题',
  `content` longtext CHARACTER SET utf8 COMMENT '正文',
  `excerpt` varchar(2000) CHARACTER SET utf8 DEFAULT NULL COMMENT '摘录',
  `author` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '作者',
  `avatar` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '头图',
  `article_url` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '文章url',
  `view_count` int(11) DEFAULT '0' COMMENT '浏览量',
  `reply_count` int(11) DEFAULT '0' COMMENT '回复量',
  `last_reply_author` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '最后回复用户',
  `last_reply_time` datetime DEFAULT NULL COMMENT '最后回复时间，用于排序',
  `top` tinyint(1) DEFAULT '0' COMMENT '1置顶 0默认',
  `good` tinyint(1) DEFAULT '0' COMMENT '1精华 0默认',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '1删除 0默认',
  `show_content` tinyint(1) DEFAULT NULL COMMENT '是否显示正文 0: 否 1: 是',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(2000) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  `crawler_article_id` int(11) DEFAULT NULL,
  `weight` double(22,3) DEFAULT '0.000',
  `up` int(11) DEFAULT '0',
  `down` int(11) DEFAULT '0',
  PRIMARY KEY (`article_id`),
  KEY `key_author` (`author`),
  KEY `key_channel_name` (`channel_name`) USING BTREE,
  KEY `key_theme_name` (`theme_name`) USING BTREE,
  KEY `key_site_name` (`site_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5296 DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

CREATE TABLE `crawler_article` (
  `crawler_article_id` int(11) NOT NULL AUTO_INCREMENT,
  `html_id` int(11) DEFAULT NULL,
  `channel_name` varchar(50) DEFAULT NULL COMMENT '''频道',
  `theme_name` varchar(50) DEFAULT NULL COMMENT '主题',
  `site_name` varchar(50) DEFAULT NULL COMMENT '站点',
  `title` varchar(500) DEFAULT NULL COMMENT '标题',
  `content` longtext COMMENT '正文',
  `excerpt` varchar(2000) DEFAULT NULL COMMENT '摘录',
  `author` varchar(50) DEFAULT NULL COMMENT '作者',
  `article_avatar` varchar(250) DEFAULT NULL COMMENT '文章头图',
  `user_avatar` varchar(250) DEFAULT NULL COMMENT '作者头像',
  `article_url` varchar(250) DEFAULT NULL COMMENT '文章url',
  `state` varchar(10) DEFAULT '0' COMMENT '0: 未清洗 1: 已清洗',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `is_crawler_content` tinyint(1) DEFAULT '0' COMMENT '是否爬取正文 0: 否 1: 是',
  PRIMARY KEY (`crawler_article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5770 DEFAULT CHARSET=utf8mb4 COMMENT='未清洗的文章数据';


CREATE TABLE `crawler_html` (
  `html_id` int(11) NOT NULL AUTO_INCREMENT,
  `hub_id` int(11) DEFAULT NULL,
  `html_url` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '文章URL',
  `state` varchar(10) DEFAULT NULL COMMENT '状态 0: 未抓取 1: 已抓取',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`html_id`),
  UNIQUE KEY `KEY_UNIQUE_HTML_URL` (`html_url`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=63000 DEFAULT CHARSET=utf8mb4 COMMENT='此表存储html内容';

CREATE TABLE `crawler_hub` (
  `hub_id` int(11) NOT NULL AUTO_INCREMENT,
  `hub_url` varchar(128) DEFAULT NULL,
  `index_url` varchar(50) DEFAULT NULL COMMENT '首页URL',
  `article_url_selector` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '文章URL选择器',
  `title_selector` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '标题选择器',
  `article_avatar_img_selector` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '文章头图选择器',
  `author_selector` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '作者名称选择器',
  `author_avatar_img_selector` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '作者头像选择器',
  `content_selector` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '正文选择器',
  `excerpt_selector` varchar(50) DEFAULT NULL COMMENT '摘录选择器',
  `channel_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '频道名称',
  `theme_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '主题名称',
  `site_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '站点名称',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '是否删除 0: 默认 1: 删除',
  `create_date` datetime DEFAULT NULL,
  `is_crawler_content` tinyint(1) DEFAULT '0' COMMENT '是否爬取正文 0: 否 1: 是',
  `article_avatar_img_attr_selector` varchar(50) DEFAULT 'src' COMMENT '文章头图属性选择器',
  `author_avatar_img_attr_selector` varchar(50) DEFAULT 'src' COMMENT '作者头像属性选择器',
  `remark` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`hub_id`),
  UNIQUE KEY `KEY_UNIQUE_HUB_URL` (`hub_url`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COMMENT='此表用于存储hub页面的url';

CREATE TABLE `site` (
  `site_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '站点ID',
  `site_code` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '站点编码',
  `channel_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '频道',
  `site_name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '站点名称',
  `site_url` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '站点url',
  `site_desc` varchar(2000) CHARACTER SET utf8 DEFAULT NULL COMMENT '站点描述',
  `avatar_normal` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '头像',
  `avatar_mini` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '小头像',
  `avatar_large` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '背景图片',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '1 删除 0 默认',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`site_id`),
  UNIQUE KEY `unique_site_name` (`site_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4496 DEFAULT CHARSET=utf8mb4 COMMENT='站点表';

CREATE TABLE `theme` (
  `theme_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主题ID',
  `theme_code` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '主题编码',
  `channel_name` varchar(50) DEFAULT NULL COMMENT '频道名称',
  `theme_name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '主题名称',
  `theme_url` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '主题url',
  `theme_desc` varchar(2000) CHARACTER SET utf8 DEFAULT NULL COMMENT '主题描述',
  `avatar_normal` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '头像',
  `avatar_mini` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '小头像',
  `avatar_large` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '背景图片',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '1 删除 0 默认',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`theme_id`),
  UNIQUE KEY `unique_theme_name` (`theme_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4546 DEFAULT CHARSET=utf8mb4 COMMENT='主题表';

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '昵称',
  `password` varchar(250) CHARACTER SET utf8 NOT NULL COMMENT '密码',
  `email` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '邮箱',
  `avatar` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '头像',
  `signature` varchar(50) CHARACTER SET utf8 DEFAULT '这家伙很懒，什么都没留下' COMMENT '签名',
  `user_url` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户url',
  `score` int(11) DEFAULT '0' COMMENT '积分',
  `website` varchar(250) CHARACTER SET utf8 DEFAULT NULL COMMENT '个人网站',
  `is_block` tinyint(1) DEFAULT '0' COMMENT '1 禁用 0 默认',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '1 删除 0 默认',
  `role` int(2) DEFAULT NULL COMMENT '角色',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_date` datetime DEFAULT NULL COMMENT '修改时间',
  `remark` varchar(2000) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `unique_username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5150 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ----------------------------
-- Table structure for `channel`
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel` (
  `channel_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '频道ID',
  `channel_code` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '频道编码',
  `channel_name` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '频道名称',
  `channel_desc` varchar(2000) CHARACTER SET utf8 DEFAULT NULL COMMENT '频道描述',
  `channel_order` int(2) DEFAULT NULL COMMENT '频道排序',
  `channel_url` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '频道url',
  `is_delete` tinyint(1) DEFAULT '0' COMMENT '1 删除 0 默认',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`channel_id`),
  UNIQUE KEY `unique_channel_code` (`channel_code`) USING BTREE,
  UNIQUE KEY `unique_channel_name` (`channel_name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COMMENT='频道表';

-- ----------------------------
-- Records of channel
-- ----------------------------
INSERT INTO `channel` VALUES ('1', 'all', '推荐', null, '0', '/', '0', '2018-11-16 14:59:10', null);
INSERT INTO `channel` VALUES ('2', 'world', '热点', null, '1', null, '0', '2018-12-16 11:12:04', null);
INSERT INTO `channel` VALUES ('3', 'host', '国际', null, '2', '/channel/news', '0', '2018-11-16 15:08:19', null);
INSERT INTO `channel` VALUES ('4', 'sat', '科技', null, '3', '/channel/play', '0', '2018-11-16 15:08:51', null);
INSERT INTO `channel` VALUES ('5', 'img', '图片', null, '9', '/channel/img', '0', '2018-11-17 19:45:09', null);
INSERT INTO `channel` VALUES ('6', 'ent', '娱乐', null, '4', '/channel/ent', '0', '2018-11-16 15:09:49', null);
INSERT INTO `channel` VALUES ('7', 'life', '生活', null, '15', '/channel/life', '0', '2018-11-16 15:10:24', null);
INSERT INTO `channel` VALUES ('8', 'comic', '动漫', null, '13', '//channel/comic', '0', '2018-11-16 15:10:46', null);
INSERT INTO `channel` VALUES ('9', 'culture', '文化', null, '16', '/channel/culture', '0', '2018-11-16 15:11:06', null);
INSERT INTO `channel` VALUES ('11', 'sport', '体育', null, '11', '/channel/sport', '0', '2018-11-16 15:11:45', null);
INSERT INTO `channel` VALUES ('12', 'game', '游戏', null, '7', '/channel/game', '0', '2018-11-16 15:12:05', null);
INSERT INTO `channel` VALUES ('13', 'fae', '财经', null, '5', '/channel/fae', '0', '2018-11-16 15:12:23', null);
INSERT INTO `channel` VALUES ('14', 'film', '电影', null, '12', '/channel/film', '0', '2018-11-16 15:12:40', null);
INSERT INTO `channel` VALUES ('15', 'car', '汽车', null, '14', '/channel/car', '0', '2018-11-17 19:47:31', null);
INSERT INTO `channel` VALUES ('16', 'video', '视频', null, '10', '/channel/video', '0', '2018-11-17 19:56:48', null);
INSERT INTO `channel` VALUES ('17', 'funny', '有趣', null, '8', '/channel/funny', '0', '2018-11-17 19:57:48', null);
INSERT INTO `channel` VALUES ('18', 'junshi', '军事', null, '6', '/channel/junshi', '0', '2018-11-29 19:15:43', null);

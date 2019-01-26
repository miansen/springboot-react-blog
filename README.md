# 兔子新闻

## 预览地址：[https://www.tuzixinwen.com](https://www.tuzixinwen.com)

## 项目架构

![image](https://miansen.wang/assets/tuzixinwen-flow-chart.png)

web模块和service模块是配套使用的，crawler模块独立运行

## 技术栈

- SpringBoot
- MyBatis
- React
- antd
- Python

## 功能

- [x] 首页浏览
- [ ] 登录
- [ ] 注册
- [ ] 发文章
- [ ] 评论
- [ ] 通知
- [x] 文章详情
- [x] 主题详情
- [x] 站点详情
- [x] 作者详情
- [x] 数据爬虫

## 快速开始

### 本地运行

需求环境

- JDK1.8或以上
- MySQL
- Maven
- Nodejs10.13或以上
- yarn1.12.3或以上

1.克隆项目到本地：https://github.com/miansen/tuzixinwen.git

2.创建MySQL数据库`kxw`，字符集utf8mb4。

3.将项目下的`init.sql`文件导入到`kxw`数据库。

4.修改数据源配置

数据源配置文件`application.yml`位于tuzixinwen-service模块下的静态资源目录（resources）下

```
spring:
  datasource:
    #  数据源基本配置
    username: 
    password: 
    url: jdbc:mysql://127.0.0.1:3306/kxw?autoReconnect=true&useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8
    driver-class-name: com.mysql.jdbc.Driver
```

将`username`和`password`换成你自己的

5.启动后台服务

输入以下命令

```
cd tuzixinwen/tuzixinwen-service
mvn install
mvn package
mvn spring-boot:run
```
出现以下画面则说明启动成功

![image](https://miansen.wang/assets/20190125155537.jpg)

可以看到后台服务已经在8080端口启动了

6.启动PC端前台

输入以下命令

```
cd tuzixinwen/tuzixinwen-web-pc
yarn install
yarn start
```

出现以下画面则说明启动成功

![image](https://miansen.wang/assets/20190125163100.jpg)

启动成功后会自动跳转到浏览器页面，端口默认是3000

![image](https://miansen.wang/assets/20190125160420.jpg)

7.启动移动端前台

输入以下命令

```
cd tuzixinwen/tuzixinwen-web-mobile
yarn install
yarn start
```

因为我们先启动了PC端前台，所以再接着启动移动端前台会提示3000端口已被占用

![image](https://miansen.wang/assets/20190125160940.jpg)

我们输入`y`换一个端口就可以了

同样的，启动成功后会自动跳转到浏览器页面，端口是3001

我们按`F12`打开谷歌浏览器的开发者模式，切换到移动端视图，就可以看到手机上的页面了

![image](https://miansen.wang/assets/20190125162048.jpg)

8.启动数据爬虫

经过上面几个步骤，我们已经成功启动了整个系统，但是！！还缺少了最重要的东西-**数据**。

数据爬虫这部分有点复杂，我这里先说明一下如何使用，具体的逻辑在tuzixinwen-crawler模块下有说明

爬虫模块需求环境

- Python 3.6.3或以上
- 阿里云oss对象存储（没有的可以去申请一个）

（1）先安装依赖的模块

依赖的模块在module.txt文件里，用pip直接安装就可以了。

（2）修改配置文件

配置文件是`application.cfg`

需要将你的数据库信息和oss信息添加上去

（3）添加爬虫配置

开启数据库，打开`crawler_hub`表，添加需要爬取的网站的数据，各个字段的含义都有注释

这里以虎嗅网为例

- hub_url：要爬取数据的URL，如: https://www.huxiu.com
- index_url：首页URL，如: https://www.huxiu.com
- article_url_selector：文章URL选择器，如：.mob-ctt .transition
- title_selector：标题选择器，如：.article-wrap .t-h1
- article_avatar_img_selector：文章头图选择器，如：.articleimg-box img
- author_selector：作者名称选择器，如：.article-wrap .author-name a
- author_avatar_img_selector：作者头像选择器，如：.author-face img
- content_selector：正文选择器，如：.article-content-wrap
- excerpt_selector：摘录选择器，如：.mob-sub
- channel_name：频道名称，如：科技
- theme_name：主题名称，如：互联网资讯
- site_name：站点名称，如：虎嗅网
- is_crawler_content：是否爬取正文 0: 否 1: 是，如：1

（4）验证配置

配置信息添加完之后，输入以下命令验证配置

```
python VerifyConfiguration.py
```

如图所示则说明配置正确

![image](https://miansen.wang/assets/584cf1ee-fe47-4cf0-90b6-a2fe3814fd14.gif)

（5）启动数据爬虫

配置验证正确之后，输入以下命令启动数据爬虫

```
python Application.py
```

## 反馈

[issues](https://github.com/miansen/tuzixinwen/issues)

## 贡献

欢迎大家提 issues，谢谢！

## License

MIT
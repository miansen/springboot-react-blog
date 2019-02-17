# tell

## 技术栈

- SpringBoot
- MyBatis
- React
- Redux
- antd

## 功能

- [x] 首页浏览
- [x] 登录
- [x] 注册
- [x] 发文章
- [ ] 评论
- [ ] 通知
- [x] 文章详情
- [x] 主题详情
- [x] 作者详情

## 预览

![](https://raw.githubusercontent.com/miansen/miansen.github.io/master/assets/20190217194358.jpg)

## 快速开始

### 本地运行

需求环境

- JDK1.8或以上
- MySQL
- Maven
- Nodejs10.13或以上
- yarn1.12.3或以上

1.克隆项目到本地：https://github.com/miansen/tell.git

2.创建MySQL数据库`kxw`，字符集utf8mb4。

3.将项目下的`init.sql`文件导入到`kxw`数据库。

4.修改数据源配置

数据源配置文件`application.yml`位于tell-server模块下的静态资源目录（resources）下

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
cd tell/tell-server
mvn install
mvn package
mvn spring-boot:run
```

6.启动前端界面

输入以下命令

```
cd tell/tell-front
yarn install
yarn start
```

## 反馈

[issues](https://github.com/miansen/tell/issues)

## 贡献

欢迎大家提 issues，谢谢！

## License

MIT
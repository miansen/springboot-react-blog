# abstract

## 预览地址：[https://www.tuzixinwen.com](https://www.tuzixinwen.com)

## 技术栈

- SpringBoot
- MyBatis
- React
- Redux
- antd

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

1.克隆项目到本地：https://github.com/miansen/abstract.git

2.创建MySQL数据库`kxw`，字符集utf8mb4。

3.将项目下的`init.sql`文件导入到`kxw`数据库。

4.修改数据源配置

数据源配置文件`application.yml`位于service模块下的静态资源目录（resources）下

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
cd abstract/service
mvn install
mvn package
mvn spring-boot:run
```
出现以下画面则说明启动成功

![image](https://miansen.wang/assets/20190125155537.jpg)

可以看到后台服务已经在8080端口启动了

6.启动前端界面

输入以下命令

```
cd abstract/web
yarn install
yarn start
```

出现以下画面则说明启动成功

![image](https://miansen.wang/assets/20190125163100.jpg)

启动成功后会自动跳转到浏览器页面，端口默认是3000

![image](https://miansen.wang/assets/20190125160420.jpg)

## 反馈

[issues](https://github.com/miansen/tuzixinwen/issues)

## 贡献

欢迎大家提 issues，谢谢！

## License

MIT
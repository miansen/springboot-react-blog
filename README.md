# springboot-react-blog

在线预览：http://101.34.121.225:3008

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

- JDK 1.8 或以上
- MySQL 5.7
- Maven 3.5 或以上
- Nodejs 10.13 或以上
- yarn 1.12.3 或以上

1.克隆项目到本地：https://github.com/miansen/springboot-react-blog.git

2.创建 MySQL 数据库 `tell`，字符集 utf8mb4。

3.将项目下的 `tell-server/src/main/resources/db/init.sql` 文件导入到 `tell` 数据库。

4.修改数据源配置

打开数据源配置文件 `tell-server/src/main/resources/application-dev.yml`

```
spring:
  datasource:
    #  数据源基本配置（请换成你自己的）
    username: root
    password: 123
    url: jdbc:mysql://127.0.0.1:3306/tell?autoReconnect=true&useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8
    driver-class-name: com.mysql.jdbc.Driver
```

将`username`，`password` 和 `url` 换成你自己的。

5.启动后台服务

进入 `tell-server` 目录，输入以下命令：

```
mvn install
mvn package
mvn spring-boot:run
```

6.启动前端界面

进入 `tell-front` 目录，输入以下命令：

```
yarn install
yarn start
```

7.打开浏览器访问即可，至此成功运行。

### 服务器 Docker 运行

需求环境

- Docker
- Docker-compose

1.克隆项目到服务器上：https://github.com/miansen/springboot-react-blog.git

2.cd springboot-react-blog 进入项目

3.修改 `axios.js` 配置

打开文件 `tell-front/src/axios/axios.js`，修改你服务器的 IP，这是前端访问后端的接口。端口不要改。

```
const Axios = axios.create({
	// 将 localhost 改成你服务器的 IP
    baseURL: 'http://localhost:8090'
});
```

4.运行 docker-compose up -d 命令启动容器，-d 是后台运行的意思。

5.浏览器运行 http://ip:3008 , 后台地址 http://ip:8090

6.关闭容器 docker-compose down

7.查看日志 docker-compose logs -f server

P.S. 第一次运行会比较慢,请耐心等待。


## 反馈

[issues](https://github.com/miansen/springboot-react-blog/issues)

## 贡献

欢迎大家提 issues，谢谢！

## License

MIT
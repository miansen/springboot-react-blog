# 兔子新闻-后台服务

## 技术栈

- SpringBoot
- MyBatis
- JWT

## 配置文件

### conf.yml

conf.yml文件位于根目录下，通常配置代码中用到的各种参数

- 跨域配置

因为项目采用的是前后端分离的方式，所有前端调后端接口会出现跨域问题。需要将你前端的域名和端口配置在这里

比如你前端的域名是`http://example.com`，则需要这样配置

```
site:
  corsDomain: ["http://example.com"]
```

- 分页配置

这里可以配置数据的分页，比如你想每页显示50条数据，可以这样配置

```
site:
  pageSize: 50
```

### application.yml

application.yml文件位于静态资源目录`resources`下，用于配置系统的启动参数

- 启动端口配置

```
server:
  port: 8081
```

- 数据源配置

```
spring:
  datasource:
    #  数据源基本配置
    username: sen
    password: 123
    url: jdbc:mysql://127.0.0.1:3306/kxw?autoReconnect=true&useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8
    driver-class-name: com.mysql.jdbc.Driver
```

## 本地运行

## 服务器部署
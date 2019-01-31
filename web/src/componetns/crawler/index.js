import React, { Component } from 'react';
import {
    Form, Input, Button,Row,Col
} from 'antd';
import Axios from "../../axios/axios";
import {openNotificationWithIcon} from "../notification";

/**
 * @Author: miansen
 * @Date: 2018/12/16
 * @description:
 */

const FormItem = Form.Item;

class Crawler extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                const crawlerHub = {
                    hubUrl: values.hub_url,
                    indexUrl: values.index_url,
                    articleUrlSelector: values.article_url_selector,
                    titleSelector: values.title_selector,
                    articleAvatarImgSelector: values.article_avatar_img_selector,
                    authorSelector: values.author_selector,
                    authorAvatarImgSelector: values.author_avatar_img_selector,
                    contentSelector: values.content_selector,
                    excerptSelector: values.excerpt_selector,
                    channelName: values.channel_name,
                    themeName: values.theme_name,
                    siteName: values.site_name,
                    createDate: new Date(),
                    isCrawlerContent: values.is_crawler_content === 1 ? true : false,
                    articleAvatarImgAttrSelector: values.article_avatar_img_attr_selector,
                    authorAvatarImgAttrSelector: values.author_avatar_img_attr_selector
                }
                this.addCrawlerHub(crawlerHub);
            }
        });
    }

    addCrawlerHub(crawlerHub){
        Axios.post("/crawler",crawlerHub).then(({data}) => {
            if(data.code === 200){
                {openNotificationWithIcon("success","Info",data.description)}
            }else{
                {openNotificationWithIcon("error","Error",data.description)}
            }
        }).catch( error => {
            {openNotificationWithIcon("error","Error",error.message)}
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
                    <div className="wrap-left pull-left">
                        <h1>添加爬虫（以虎嗅网为例）</h1>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                <label><h2>爬取URL（https://www.huxiu.com）-非空</h2></label>
                                {getFieldDecorator('hub_url', {
                                    rules: [{ required: true, message: '请输入hub_url（爬取页面的URL）!' }],
                                })(
                                    <Input placeholder="hub_url（爬取页面的URL）" />
                                )}
                            </FormItem>
                            <FormItem>
                                <label><h2>首页URL（https://www.huxiu.com）-非空</h2></label>
                                {getFieldDecorator('index_url', {
                                    rules: [{ required: true, message: '请输入index_url（首页URL）!' }],
                                })(
                                    <Input  type="text" placeholder="index_url（首页URL）" />
                                )}
                            </FormItem>
                            <FormItem>
                                <label><h2>文章URL选择器（.mob-ctt .transition）-非空</h2></label>
                                {getFieldDecorator('article_url_selector', {
                                    rules: [{ required: true, message: '请输入article_url_selector（文章URL选择器）!' }],
                                })(
                                    <Input  type="text" placeholder="article_url_selector（文章URL选择器）" />
                                )}
                            </FormItem>
                            <FormItem>
                                <label><h2>标题选择器（.article-wrap .t-h1）-非空</h2></label>
                                {getFieldDecorator('title_selector', {
                                    rules: [{ required: true, message: '请输入title_selector（标题选择器）!' }],
                                })(
                                    <Input  type="text" placeholder="title_selector（标题选择器）" />
                                )}
                            </FormItem>
                            <FormItem>
                                <label><h2>文章头图选择器（.article-img-box img）</h2></label>
                                <Input  type="text" placeholder="article_avatar_img_selector（文章头图选择器）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>作者名称选择器（.article-wrap .author-name a）</h2></label>
                                <Input  type="text" placeholder="author_selector（作者名称选择器）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>作者头像选择器（.author-face img）</h2></label>
                                <Input  type="text" placeholder="author_avatar_img_selector（作者头像选择器）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>正文选择器（.article-content-wrap）</h2></label>
                                <Input  type="text" placeholder="content_selector（正文选择器）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>摘录选择器（）</h2></label>
                                <Input  type="text" placeholder="excerpt_selector（摘录选择器）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>频道名称（科技）-非空</h2></label>
                                {getFieldDecorator('channel_name', {
                                    rules: [{ required: true, message: '请输入channel_name（频道名称）!' }],
                                })(
                                    <Input  type="text" placeholder="channel_name（频道名称）" />
                                )}
                            </FormItem>
                            <FormItem>
                                <label><h2>主题名称（互联网资讯）</h2></label>
                                <Input  type="text" placeholder="theme_name（主题名称）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>站点名称（虎嗅网）-非空</h2></label>
                                {getFieldDecorator('site_name', {
                                    rules: [{ required: true, message: '请输入site_name（站点名称）!' }],
                                })(
                                    <Input  type="text" placeholder="site_name（站点名称）" />
                                )}
                            </FormItem>
                            <FormItem>
                                <label><h2>是否爬取正文（0）</h2></label>
                                <Input  type="text" placeholder="is_crawler_content（是否爬取正文 0: 否 1: 是）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>文章头图属性选择器（src）</h2></label>
                                <Input  type="text" placeholder="article_avatar_img_attr_selector（文章头图属性选择器）" />
                            </FormItem>
                            <FormItem>
                                <label><h2>作者头像属性选择器（src）</h2></label>
                                <Input  type="text" placeholder="author_avatar_img_attr_selector（作者头像属性选择器）" />
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    提交
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
                <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}></Col>
            </Row>
        );
    }
}
const CrawlerForm = Form.create()(Crawler);
export default CrawlerForm;
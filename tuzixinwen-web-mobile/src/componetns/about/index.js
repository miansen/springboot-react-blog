import React, { Component } from 'react';

import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/12/16
 * @description: 关于
 */
class About extends Component{
    render() {
        return (
            <div className="about">
                <h3 className="mb-25">关于我们</h3>
                <p>兔子新闻是一个基于数据挖掘的综合新闻推荐引擎，在这里您可以浏览互联网上所有热点新闻和有趣的资讯。</p>
                <p>目前有国内、国际、科技、娱乐、财经、游戏、汽车、生活、文化等全方位的新闻频道。</p>
                <br/>
                <h3 className="mb-25">我们的愿景</h3>
                <p>愿每个人获取到有价值的新闻</p>
                <br/>
                <h3 className="mb-25">联系我们</h3>
                <p>邮箱: 1158827539@qq.com</p>
                <br/>
                <h3 className="mb-25">免责声明</h3>
                <p>兔子新闻遵守互联网Robots协议，使用User-agent为“TuziBot”的爬虫收录网络媒体的文章。若媒体不想被兔子新闻收录并推荐，可以利用robots.txt文件禁止TuziBot爬取贵站文章。</p>
                <p>本站所有的内容仅作为交流分享使用，非商业目的。如果侵权，请联系邮箱: 1158827539@qq.com，我们会在24小时内进行处理。</p>
            </div>
        );
    }
}

export default About;
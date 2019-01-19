import React, { Component } from 'react';

/**
 * @Author: miansen
 * @Date: 2018/12/7
 * @description: 热闻
 */
class HotArticle extends Component{
    render() {
        return (
            <div className="hot-article bui-box">
                <div className="bui-box">
                    <div className="pane-module hot-article-module">
                        <div className="column-wrap"><span>热门文章</span></div>
                    </div>
                    <ul className="module-content article-list">
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275194.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/07/084736490486.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275194.html" className="transition" target="_blank">张首晟：君掌盛无边，刹那含永劫</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275208.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/06/113614907277.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275208.html" className="transition" target="_blank">为什么加拿大能替美国扣人？</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275163.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201709/27/181420030104.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275163.html" className="transition" target="_blank">王健林梦碎万达影视</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275061.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/06/080015181917.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275061.html" className="transition"
                               target="_blank">我们分析了2.6万件胸罩，发现了中国女性内衣的秘密</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275230.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/06/131753928528.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275230.html" className="transition" target="_blank">奶茶妹妹的房子为什么不好卖</a>
                        </li>
                        <li>
                            <div className="hot-article-img">
                                <a href="/article/275162.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/06/081733903879.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275162.html" className="transition"
                               target="_blank">【虎嗅早报】外媒称华为CFO、任正非之女孟晚舟被逮捕；ofo回应“求助政府官员谋求上市机会”：不存在</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275284.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/06/161403336827.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275284.html" className="transition" target="_blank">马云：中国还有3次巨大机会</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275158.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201712/16/194948312815.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275158.html" className="transition" target="_blank">蔚来ES8高速换电之旅</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275160.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201812/06/081226941780.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275160.html" className="transition"
                               target="_blank">体检机构被曝丑闻，什么体检项目是我们真正需要的？</a>
                        </li>
                        <li className="hot-article-item">
                            <div className="hot-article-img">
                                <a href="/article/275189.html" target="_blank">
                                    <img
                                        src="https://img.huxiucdn.com/article/cover/201704/27/173544211562.jpg?imageView2/1/w/280/h/158/|imageMogr2/strip/interlace/1/quality/85/format/jpg"/>

                                </a>
                            </div>
                            <a href="/article/275189.html" className="transition" target="_blank">KTV快消失了，你们还唱歌吗？</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HotArticle;
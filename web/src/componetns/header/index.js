import React,{Component} from 'react';
import { enquireScreen } from 'enquire-js';
import { Layout } from 'antd';

import Nav from './nav/index';
import Nav02 from './nav/Nav02';
import './index.css';

const TopHeader = Layout.Header;
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
// console.log("是否为移动设备:"+isMobile);
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: true,
            scrollTop: 0 //监听滚轮变换，当scrollTop>100时，导航栏发生变化
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });

        //监听滚轮
        /*window.addEventListener('scroll',() => {
            //var header = this.refs.header
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            /!*if(scrollTop > 100){
                console.log("滚轮大于100")
            }else{
                console.log("滚轮小于100")
            }*!/
            this.setState({
                scrollTop: scrollTop
            });
        })*/
    }

    render() {
        // console.log("isMobile2"+isMobile);
        const children = [
            <Nav id="nav_0_0" key="nav_0_0" isMobile={this.state.isMobile}/>
        ];
        const pathname = this.props.path; //获取当前路由
        // console.log("当前路由："+pathname)
        return (
            <div className="basic-header">
                {
                    /*this.state.scrollTop > 500 && pathname === "/" ?
                        <TopHeader className="fixed-header" style={{ position: 'fixed', zIndex: 1, width: '100%', background: "#ffffff"}}>
                            <Nav02 id="nav_0_0" key="nav_0_0" isMobile={false} style={{borderBottom: "1px solid rgb(232, 232, 232)"}}/>
                        </TopHeader>
                        :*/
                        <div className="templates-wrapper basic-header">{this.state.show && children}</div>
                }
            </div>
        );
    }
}

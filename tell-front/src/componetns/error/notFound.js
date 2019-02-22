import React, { Component } from 'react';
import {Alert} from "antd";

import NotFoundImg  from '../../assets/images/404.png';

/**
 * @Author: miansen
 * @Date: 2018/12/2
 * @description: 404
 */
class NotFound extends Component{

    state = {
        animated: ''
    };

    enter = () => {
        this.setState({animated: 'hinge'})
    };

    render() {
        return (
            <Alert className="load-more" style={{marginTop: "20px",border: "0px",backgroundColor: "#ffffff"}}
                   message="秘密基地被你发现了，可惜这里什么都没有..."
                   type="error" />
        )
    }
}

export default NotFound;
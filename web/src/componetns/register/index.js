import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{
    render() {
        return (
            <section className="animated bounce">
                <table border="0">
                    <caption><h3>注册</h3></caption>
                    <tbody>
                    <tr>
                        <td>用户名</td>
                        <td><input type="text" ref="username" placeholder="用户名" /></td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td><input type="password" ref="password" placeholder="密码" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" valign="middle">
                            <div className="action">
                                <span>已有帐号？<Link to="/login">去登录</Link></span>
                                <button>注册</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Register;
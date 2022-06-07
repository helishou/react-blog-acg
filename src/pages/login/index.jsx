/*
 * @Author       : helishou
 * @Date         : 2021-06-02 09:02:40
 * @LastEditTime : 2021-09-13 18:34:38
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\login\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { useEffect } from 'react';
import axios from 'axios';
import { setAvatar, setToken, setName } from '../../utils/auth';
import { message } from 'antd';
import { withRouter } from 'react-router';
import { Wrapper } from './style';
import querystring from 'querystring';
function Login(props) {
    //   const [loading, setLoading] = useState(true);
    //设置cookie,注意设置domin,使同域名下都可以访问cookie
    // 后台登陆github
    const loginGithubHandel = (code) => {
        axios
            .post('/getUser', {
                code,
            })
            .then((res) => {
                if (res.code === 0) {
                    setToken(res.data._id);
                    setAvatar(res.data.avatar);
                    setName(res.data.name);
                    message.success('登录成功');
                    window.close();
                } else {
                    message.error(res.message, 1);
                }
            });
    };

    useEffect(() => {
        const checkCode = () => {
            try {
                //从地址获取code
                let query = window.location.search.substring(1);
                // var querystring = require("querystring");
                let code = querystring.parse(query).code;
                if (typeof code !== 'undefined') {
                    // loginGithubHandel(code);
                    loginGithubHandel(code);
                }
            } catch (err) {
                message.error(err, 1);
            }
        };
        checkCode();
        return () => {};
    }, []);
    return (
        <Wrapper>
            {/* <div style={{width:'100%',height:'1000px',backgroundColor:'red'}}>66666666666</div> */}
            <div className={'search-form search-form--modal is-visible'}>
                <div className="search-form__inner">
                    <div className="box">
                        <p>登陆中·······</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
export default withRouter(Login);

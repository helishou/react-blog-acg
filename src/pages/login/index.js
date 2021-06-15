/*
 * @Author       : helishou
 * @Date         : 2021-06-02 09:02:40
 * @LastEditTime : 2021-06-15 19:04:22
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\pages\login\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getAvatar,
  setAvatar,
  setToken,
  setName,
  config,
} from "../../lib/auth";
import { Icon, Menu, Dropdown, Affix, message } from "antd";
import { withRouter } from "react-router";
import { Wrapper } from "./style";
function Login(props) {
  //   const [loading, setLoading] = useState(true);
  //设置cookie,注意设置domin,使同域名下都可以访问cookie
  // 后台登陆github
  // const loginGithubHandel = (code) => {
  //   axios
  //     .post("/getUser", {
  //       code,
  //     })
  //     .then((res) => {
  //       if (res.code === 0) {
  //         setToken(res.data._id);
  //         setAvatar(res.data.avatar);
  //         setName(res.data.name);
  //         message.success("登录成功");
  //         window.close();
  //       } else {
  //         message.error(res.message, 1);
  //       }
  //     });
  // };
  // 前台登陆github,因为服务器老是连不上github
  const loginGithubHandelByFront = (code) => {
    let path = config.access_token_url;
    const params = {
      client_id: config.client_id,
      client_secret: config.client_secret,
      code: code,
    };
    console.log("params", params);
    fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res1) => {
        return res1.text();
      })
      .then((body) => {
        const args = body.split("&");
        let arg = args[0].split("=");
        const access_token = arg[1];
        // console.log("body:",body);
        console.log("access_token:", access_token);
        return access_token;
      })
      .then(async (token) => {
        const url = config.user_url;
        // + "?access_token=" + token
        console.log("url:", url);
        await fetch(url, {
          headers: {
            Authorization: "token " + token,
          },
        })
          .then((res2) => {
            console.log("res2 :", res2);
            return res2.json();
          })
          .then((response) => {
            console.log("response ", response);
            axios
              .post("/getUserFront", {
                response,
              })
              .then((res) => {
                if (res.code === 0) {
                  setToken(res.data._id);
                  setAvatar(res.data.avatar);
                  setName(res.data.name);
                  message.success("登录成功");
                  window.close();
                } else {
                  message.error(res.message, 1);
                }
              });
          });
      })
      .catch((e) => {
        console.log("e:", e);
      });
    // axios
    //   .post("/getUser", {
    //     code,
    //   })
    //   .then((res) => {
    //     if (res.code === 0) {
    //       setToken(res.data._id);
    //       setAvatar(res.data.avatar);
    //       setName(res.data.name);
    //       message.success("登录成功");
    //       window.close();
    //     } else {
    //       message.error(res.message, 1);
    //     }
    //   });
  };

  useEffect(() => {
    document.title = "使用github第三方登陆";
    const checkCode = () => {
      try {
        //从地址获取code
        let query = window.location.search.substring(1);
        var querystring = require("querystring");
        let code = querystring.parse(query).code;
        if (typeof code !== "undefined") {
          // loginGithubHandel(code);
          loginGithubHandelByFront(code);
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
      <div className={"search-form search-form--modal is-visible"}>
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

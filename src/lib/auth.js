import Cookies from "js-cookie";
import axios from "axios";
import { message } from "antd";
const TokenKey = "helishou-token";
const Avatar = "Avatar";
const Name = 'Name'
// const Github_id ='1111'
export const config = {
  oauth_uri: "https://github.com/login/oauth/authorize",
  redirect_uri: "http://wangxinyang.xyz/login",
  client_id: "eeb6852852645a7bc976",
  client_secret: "22e834508732cf7720884db5cd939e1f33a3f4e9",
};

// 本地开发环境下 
if (process.env.NODE_ENV === "development") {
  config.redirect_uri = "http://localhost:3000/login";
  config.client_id = "502176cec65773057a9e";
  config.client_secret = "65d444de381a026301a2c7cffb6952b9a86ac235";
}
export function getAvatar() {
  return Cookies.get(Avatar);
}

export function setAvatar(url) {
  return Cookies.set(Avatar, url);
}
export function getName() {
  return Cookies.get(Name);
}

export function setName(name) {
  return Cookies.set(Name, name);
}
// export function getId() {
//   return Cookies.get(Github_id);
// }

// export function setId(id) {
//   return Cookies.set(Github_id, id);
// }

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
export function loginGithubHandel(code) {
  axios
    .post("/getUser", {
      code,
    })
    .then((res) => {
      if (res.code === 0) {
        // console.log("登陆成功");
        setToken(res.data._id);
        setAvatar(res.data.avatar);
        setName(res.data.name)
        // this.setState({ isUser: true });
        message.success("登录成功");
      } else {
        message.error(res.message, 1);
      }
    });
}

export function scrollAnimation(currentY, targetY) {
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10);
    _currentY += dist;
    window.scrollTo(_currentY, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10) {
      scrollAnimation(_currentY, targetY);
    } else {
      window.scrollTo(_currentY, targetY);
    }
  }, 1);
}

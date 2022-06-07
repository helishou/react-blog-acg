/*
 * @Author       : helishou
 * @Date         : 2021-08-13 22:41:26
 * @LastEditTime : 2021-08-14 15:53:53
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\aboutme\style.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin: 0 0 5% 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Merriweather Sans","Noto Serif SC";
  font-style: normal;
  font-weight: 500;
  width: 100%;
  .dialogue {
    padding: 10px 20px;
    width: 100%;
    height: auto;
    border-radius: 15px;
    background-color: #f8f8f8;
  }
  .v-container {
    max-width: 768px !important;
    margin: 0 auto;
  }
  .container-content {
    flex: 1 0 100%;
    padding-bottom: 30px;
    background-color: #fff;
    animation: main 1s;
  }
  .dialogue-title {
    text-align: center;
    font-size: 18px;
    color: #404040;
    font-weight: bold;
  }
  .dialogue-title ruby,
  .dialogue-title span {
    font-size: 18px;
    color: #404040;
    font-weight: bold;
  }
  .dialogue-message {
    margin-top: 20px;
    min-height: 200px;
    position: relative;
  }
  .send-message {
    margin: 10px 5px;
  }
  .send-message span {
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #ebebeb;
    display: inline-block;
  }
  .me {
    text-align: left;
  }
  .you {
    text-align: right;
  }
  .me span {
    animation: leftMove 0.5s;
  }
  .you span {
    animation: rightMove 0.5s;
    background-color: #919292;
    color: #fff;
  }
  .choice-button {
    animation: leftMove 0.5s;
    border: 0;
    color: #fff;
    line-height: 1;
    cursor: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur'),auto;
    font-size: 14px;
    font-weight: 500;
    padding: 7px 20px;
    border-radius: 4px;
    background: #777979;
    box-shadow: 2px 3px 4px 0 rgba(0,0,0,.25);
  }
  .revision {
    padding-bottom: 10px !important;
  }
  @-moz-keyframes leftMove {
    from {
      transform: translateX(-15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes leftMove {
    from {
      transform: translateX(-15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-o-keyframes leftMove {
    from {
      transform: translateX(-15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes leftMove {
    from {
      transform: translateX(-15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-moz-keyframes rightMove {
    from {
      transform: translate(15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes rightMove {
    from {
      transform: translate(15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-o-keyframes rightMove {
    from {
      transform: translate(15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes rightMove {
    from {
      transform: translate(15px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export const MyButton = styled.button`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 2px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 36px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 500;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 6px 8px;
  min-width: 88px;
  outline: 0;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  position: relative;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &::before {
    border-radius: inherit;
    color: inherit;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    opacity: 0.12;
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
  }
`;

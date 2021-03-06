/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2022-03-15 23:16:38
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\components\BackTop\style.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import styled from "styled-components";

export const Top = styled.div`
  .toTop {
    will-change: auto;
    position: fixed;
    right: 40px;
    top: -30%;
    z-index: 222;
    /* width: 70px; */
    height: 130%;
    transition: all 0.5s ease-in-out;
    cursor: url(${require("../../assets/images/ayuda.cur")}), auto;
    -webkit-animation: float 2s linear infinite;
    animation: float 2s linear infinite;
    @media (max-width: 768px) {
      display: none;
    }
    .ant-back-top {
      position: absolute;
      bottom: 0;
      width: 70px;
      left: 0;
      height: 110px;
      opacity: 0;
      .ant-back-top-content {
        width: 70px;
        height: 110px;
        display: none;
      }
    }
  }
  @media (min-width: 768px) {
    .phone-backtop {
      display: none;
    }
  }
  .goTop {
    top: -130%;
  }

  .toTop img,
  .toTophui img {
    width: 100%;
    height: 96%;
  }

  @-webkit-keyframes float {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    50% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    50% {
      -webkit-transform: translateY(-6px);
      -ms-transform: translateY(-6px);
      transform: translateY(-6px);
    }

    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  }
`;

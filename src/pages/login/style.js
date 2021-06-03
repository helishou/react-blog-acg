/*
 * @Author       : helishou
 * @Date         : 2021-06-02 10:12:02
 * @LastEditTime : 2021-06-02 11:16:28
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\pages\login\style.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import styled from "styled-components";

export const Wrapper = styled.div`
  .search-form--modal {
    -webkit-transition: visibility 0.25s ease, opacity 0.25s ease;
    -moz-transition: visibility 0.25s ease, opacity 0.25s ease;
    -ms-transition: visibility 0.25s ease, opacity 0.25s ease;
    -o-transition: visibility 0.25s ease, opacity 0.25s ease;
    transition: visibility 0.25s ease, opacity 0.25s ease;
    overflow: hidden;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    visibility: hidden;
    opacity: 0;
  }
  .box {
    position: absolute;
    margin: 0 auto;
    left: 40%;
    top: 40%;
    color: rgb(167, 59, 92);
    // width: 120px;
    // height: 60px;

  }

  p {
    // width: 210px;
    font-size:40px;
    overflow: hidden;
    white-space: nowrap;
    border-right: .05em solid transparent;
    animation: typing 4s steps(40) infinite;
  }
  .search-form.is-visible {
    visibility: visible;
    opacity: 0.99;
    animation: elastic 0.5s;
    background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.2.1/img/other/iloli.gif);
    background-repeat: no-repeat;
    background-position: bottom right;
  }
  @keyframes typing {
    from {
      width: 125px;
    }
    to{
        width: 210px;
    }
  }
  @keyframes elastic {
    0% {
      transform: scale(0);
    }

    55% {
      transform: scale(1);
    }

    70% {
      transform: scale(0.98);
    }

    100% {
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
    @keyframes typing {
        from {
          width: 85px;
        }
        to{
            width: 130px;
        }
      }
    .search-form.is-visible {
      background-size: 30%;
    }
    // .box {
    //   width: 80px;
    //   height: 40px;
    // }
    p {
      padding-left: 10px;
      font-size: 25px;
      width：125px；
    }
    .search-form i {
      font-size: 22px;
      bottom: 11px;
    }
  }
`;

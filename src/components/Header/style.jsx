import styled from "styled-components";
import { MOUSEPOINTCUR } from "@/lib/constans/vite.js";
export const Headers = styled.div`
  /* .menulist {
    opacity: 0;
    transition: visibility 0.25s ease, opacity 0.25s ease;
  } */
  .ant-affix {
    z-index: 999;
    /* .menulist {
      opacity: 1;
    } */
    .nav-wrapper {
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
    }
  }
  /* &:hover {
    .menulist {
      opacity: 1;
    }
  } */
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
  .search-form--modal .search-form__inner {
    max-width: 640px;
    padding: 0 20px;
    margin: auto;
    text-align: left;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    height: 285px;
    top: 0;
    bottom: 0;
  }
  .search-form .box {
    position: relative;
  }
  .search-form--modal .search-form__inner p {
    padding-left: 24px;
    color: #404040;
    font-size: 15px;
    line-height: 1.5;
    margin: 15px 0 22px 0;
  }
  .search-form i {
    font-size: 32px;
    font-size: 2rem;
    line-height: 1;
    color: #ddd;
    position: absolute;
    bottom: 10px;
    margin-top: -16px;
    left: 16px;
  }
  .search-form input {
    font-size: 24px;
    font-size: 1.5rem;
    background: #fff;
    padding: 12px 24px 12px 64px;
    width: 100%;
    outline: none;
    border-radius: 50px;
    color: #666;
    border: 1px solid #ccc;
  }
  .search-form .search_close {
    position: absolute;
    width: 35px;
    height: 35px;
    background: 0 0;
    top: 20px;
    right: 15px;
    cursor: url(${MOUSEPOINTCUR}), auto;
  }
  .search_close:before,
  .search_close:after {
    background-color: #222;
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;
    top: 17px;
    left: 2px;
  }
  .search_close:before {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .search_close:after {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .search-form.is-visible {
    visibility: visible;
    opacity: 0.99;
    animation: elastic 0.5s;
    background-image: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.2.1/img/other/iloli.gif");
    background-repeat: no-repeat;
    background-position: bottom right;
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
  @media (min-width: 768px) {
    &:hover .nav-wrapper {
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 768px) {
    .search-form.is-visible {
      background-size: 30%;
    }
    .search-form--modal .search-form__inner p {
      padding-left: 10px;
      font-size: 14px;
    }
    .search-form i {
      font-size: 22px;
      bottom: 11px;
    }
    .search-form input {
      padding: 10px 10px 10px 45px;
      font-size: 18px;
    }
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  padding: 0 30px;
  z-index: 999;
  transition: all 0.4s ease;
  @media (max-width: 768px) {
    height: 50px;
    padding: 0 15px;
  }
`;

export const NavLeft = styled.div`
  float: left;
  height: 75px;
  line-height: 75px;
  max-width: 150px;
  font-family: "Moe-Mashiro", "Merriweather Sans", Helvetica, Tahoma, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei",
    sans-serif;
  a {
    color: #464646;
    float: left;
    font-size: 25px;
    font-weight: 800;
    height: 56px;
    line-height: 56px;
    padding-left: 6px;
    padding-right: 15px;
    margin-top: 8px;
    text-decoration-line: none;
  }
  .sakuraso .no {
    font-size: 25px;
    border-radius: 9px;
    padding-bottom: 2px;
    padding-top: 5px;
  }
  .sakuraso {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    color: "#464646";
    height: auto;
    line-height: 25px;
    margin-right: 0;
    padding-bottom: 0px;
    padding-top: 0px;
    text-size-adjust: 100%;
    width: auto;
  }
  .no {
    padding-left: 5px;
    padding-right: 5px;
    display: inline-block;
  }
  ruby {
    ruby-position: under;
    -webkit-ruby-position: after;
  }
  rt {
    font-size: 10px;
    transform: translateY(-8px);
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.5s, 0.5s;
  }
  i {
    font-size: 22px;
    color: #666666;
    cursor: url(${MOUSEPOINTCUR}), auto;
    display: none;
  }
  i:hover {
    color: var(--color-primary);
  }
  a:hover {
    color: var(--color-primary);
    rt {
      opacity: 1;
    }
    .sakuraso {
      color: #ffffff;
      background-color: var(--color-primary);
    }
    .no {
      animation: action 1s linear infinite;
    }
  }
  @media (max-width: 768px) {
    height: 50px;
    line-height: 50px;
    a {
      display: none;
    }
    i {
      display: inline-block;
    }
  }
  @keyframes action {
    from {
      transform: rotate(0deg) translate(0px);
    }

    to {
      transform: rotate(360deg) translate(0px);
    }
  }
`;
export const NavRight = styled.div`
  float: right;
  height: 75px;
  .flex-items {
    height: 75px;
  }
  @media (max-width: 768px) {
    height: 50px;
    .flex-items {
      height: 50px;
    }
  }
`;

export const Nav = styled.ul`
  height: 75px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 0 1rem;
  .nav-item {
    display: block;
    color: #666666;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    position: relative;
    cursor: url(${MOUSEPOINTCUR}), auto;
  }
  .nav-item i {
    margin-right: 5px;
  }
  .nav-item:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -17px;
    height: 6px;
    background-color: var(--color-primary);
    width: 0px;
    transition: width 0.25s ease-in-out;
  }
  &:hover .nav-item {
    color: var(--color-primary);
  }
  &:hover .nav-item:after {
    width: 100%;
  }
  .NavDropdown ul {
    padding: 10px;
    text-align: center;
    box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
  }
  .NavDropdown ul li:hover {
    background: none;
  }
  .NavDropdown ul li:hover a {
    color: var(--color-primary);
  }
  .NavDropdown ul:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
`;

export const IconBox = styled.div`
  i {
    font-size: 24px;
    margin-left: 20px;
    color: #666666;
    cursor: url(${MOUSEPOINTCUR}), auto !important;
  }
  i:hover {
    color: var(--color-primary);
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export const Mask = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 998;
  &.hidden {
    display: none;
  }
  &.show {
    display: block;
  }
`;

export const MoNav = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: #ffffff;
  width: 55%;
  z-index: 999;
  transition-duration: 0.5s;
  overflow-y: scroll;
  -webkit-transform: translateX(-100%) translateY(0px);
  transform: translateX(-100%) translateY(0px);
  /* @media (min-width: 768px){
    display: none;
  } */
  &.open {
    transform: translateX(0px) translateY(0px);
    -webkit-transform: translateX(0px) translateY(0px);
  }
  .m-avatar {
    width: 100%;
    height: auto;
    padding: 30px 0 20px;
    text-align: center;
  }
  .m-avatar img {
    width: 90px;
    height: 90px;
    max-width: 90px;
    border-radius: 100%;
  }
  .name {
    margin-bottom: 10px;
    padding: 0 15px;
    text-align: center;
    font-size: 13px;
    color: #333;
  }
  .info {
    margin-bottom: 10px;
    padding: 0 15px 15px 15px;
    text-align: center;
    font-size: 13px;
    color: #333;
    position: relative;
  }
  .menu {
    position: relative;
    &:after {
      position: absolute;
      right: 0px;
      top: 0;
      left: 0px;
      height: 1px;
      content: "";
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      background-color: #f1f1f1;
    }
    .item {
      position: relative;
      padding: 10px 15px;
      color: #333;
      font-size: 14px;
      span {
        margin-left: 5px;
      }
      i {
        font-size: 12px;
      }
      &:after {
        position: absolute;
        right: 0px;
        bottom: 0;
        left: 0px;
        height: 1px;
        content: "";
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        background-color: #f1f1f1;
      }
    }
  }
  .sub-menu {
    padding-left: 15px;
    .item {
      padding: 5px 10px;
      font-size: 13px;
    }
  }
`;

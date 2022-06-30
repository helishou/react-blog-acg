import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 600px;
  max-width: 900px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  animation: main 1s;
  .flex-items {
    align-items: start;
  }
  .toc {
    .ant-anchor-link-active > .ant-anchor-link-title {
      color: var(--color-primary);
    }
    .ant-anchor-link-title:hover {
      color: var(--color-primary);
    }
    .ant-anchor-ink-ball {
      border: 2px solid var(--color-primary);
    }
  }
  @keyframes main {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .example {
    height: 52px;
    line-height: 52px;
    text-align: center;
    i {
      background-color: var(--color-primary);
    }
  }
  .links > p {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    margin: 40px 0 80px;
    display: inline-block;
    color: #989898;
    font-size: 15px;
  }
  .links .link-title {
    padding-left: 0;
    border-left: none;
    margin: 50px 0 20px;
    .fake-title {
      font-weight: 400;
      color: #6d6d6d;
      padding-left: 10px;
      border-left: 3px solid orange;
    }
  }
  .links ul {
    margin: 0;
    list-style: none;
    padding: 0;
    width: 100%;
    display: inline-block;
  }
  .links ul li {
    width: 32%;
    float: left;
    border: 1px solid #ececec;
    padding: 10px 30px;
    margin: 10px 4px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 10px;
  }
  .links ul li:before {
    content: "";
    background-color: var(--color-primary);
    -webkit-transform: skew(45deg, 0);
    transform: skew(45deg, 0);
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: -60px;
    z-index: -1;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .links ul li img {
    float: right;
    box-shadow: inset 0 0 10px #000;
    padding: 5px;
    opacity: 1;
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transition: all ease 1s;
    -webkit-transition: all ease 1s;
    -moz-transition: all ease 1s;
    -o-transition: all ease 1s;
    margin-top: 5px;
    width: 65px;
    height: 65px;
    padding: 2px;
    border-radius: 100%;
  }
  .links ul li .sitename {
    color: var(--color-primary);
    padding-bottom: 10px;
    display: block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
  }
  .linkdes {
    color: #949494;
    font-size: 13px;
    padding: 10px 0;
    min-height: 46px;
    border-top: 1px dashed #ddd;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 25px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .post-list-show {
    animation: post-list-show 0.5s;
    -webkit-animation: post-list-show 0.5s;
    opacity: 1;
  }
  @keyframes post-list-show {
    0% {
      opacity: 0;
      -webkit-transform: translateY(80px);
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @media (min-width: 768px) {
    .links ul li:hover {
      color: #27323a;
      border-color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }
    .links ul li:hover:before {
      width: 180%;
    }
    .links ul li:hover img {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
    }
    .links ul li:hover .linkdes {
      border-top: 1px dashed #fff;
    }
  }
  @media (max-width: 768px) {
    padding-top: 30px;
    min-height: 400px;
    .toc-box {
      display: none;
    }
    .page-header {
      margin-bottom: 30px;
      h1 {
        font-size: 16px;
        font-weight: 400;
        border: 1px dashed #ddd;
        padding: 10px;
        color: #828282;
      }
    }
  }
  @media (max-width: 768px) {
    .links ul li {
      width: 48.6%;
    }
  }
  @media (max-width: 630px) {
    .links ul li {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

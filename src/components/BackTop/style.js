/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-09-13 18:25:28
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\BackTop\style.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-08-18 19:45:26
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
        top: -150px;
        z-index: 222;
        width: 70px;
        height: 900px;
        transition: all .5s 0.3s ease-in-out;
        cursor: url(${require('../../assets/images/ayuda.cur')}),auto;
        -webkit-animation: float 2s linear infinite;
        animation: float 2s linear infinite;
        @media(max-width:768px){
            display:none;
        }
        .ant-back-top{
            position: absolute;
            bottom: 0;
            width: 70px;
            left: 0;
            height: 110px;
            opacity: 0;
            .ant-back-top-content{
                width: 70px;
                height: 110px;
                display: none;
            }
        }
    }
    @media(min-width:768px){
        .phone-backtop{
            display:none;
        }
    }
    .goTop {
        top: -950px;
    }
    
    .toTop img, .toTophui img {
        width: 100%;
        height:96%;
    }
    
    @-webkit-keyframes float {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    
        50% {
            -webkit-transform: translateY(-6px);
            transform: translateY(-6px)
        }
    
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    }
    
    @keyframes float {
        0% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0)
        }
    
        50% {
            -webkit-transform: translateY(-6px);
            -ms-transform: translateY(-6px);
            transform: translateY(-6px)
        }
    
        100% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0)
        }
    }
`;

/*
 * @Author       : helishou
 * @Date         : 2021-08-12 21:12:33
 * @LastEditTime : 2021-08-13 15:13:14
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\Itemlayout\style.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import styled from "styled-components";
export const TopImage = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
    &:after{
        content: '';
        width: 150%;
        height: 4.375rem;
        background: #fff;
        left: -25%;
        bottom: -2.875rem;
        border-radius: 100%;
        position: absolute;
    }
    .pattern-attachment-img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-origin: border-box;
        width: 100%;
        height: 400px;
        img{
            background-image:url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.1/img/svg/loader/orange.progress-bar-stripe-loader.svg') ;
            background-size: 200% 180%;
            background-position: 50% 70%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }
    .pattern-header {
        position: absolute;
        top: 45%;
        left: 0;
        right: 0;
        text-align: center;
        color: #fff;
        text-shadow: 2px 2px 10px #000;
        z-index: 1;
        h1{
            color: #fff;
            font-size: 40px;
            font-weight: 500;
            width: 80%;
            margin: auto;
            padding: 0;
            border: 0;
        }
    }
    @media(max-width:768px){
        .pattern-attachment-img{
            height:280px;
        }
        .pattern-header {
            top:40%;
            h1{
                font-size:24px;
            }
        }
    }
`;

export const Wrapper = styled.div`
    .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
    @media(max-width:768px){
        .pattern-center-blank{
            padding-top: 50px;
        }
    }
`;




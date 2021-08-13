/*
 * @Author       : helishou
 * @Date         : 2021-08-12 21:12:09
 * @LastEditTime : 2021-08-13 15:35:29
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\Itemlayout\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from 'react'
import {TopImage,Wrapper,MainWrapper} from './style'
export default function Itemlayout(props) {
    return (
        <Wrapper>
            <div className="pattern-center-blank" />
            <TopImage>
                <div className="pattern-attachment-img">
                <img className="lazyload" src={props.timg} alt="" />
                </div>
                <div className="pattern-header ">
                <h1>{props.title}</h1>
                </div>
            </TopImage>
            {props.children}
      </Wrapper>
        
    )
}

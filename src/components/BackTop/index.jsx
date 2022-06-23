/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-09-13 19:51:32
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\BackTop\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, {PureComponent} from "react";
import {Top} from './style';
import {BackTop} from 'antd';
import backImg from '@/assets/images/scroll.png'
import throttle from '@/utils/throttle'
class ToTop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gotoTop: false
        };
        this.toTopfun = this.toTopfun.bind(this);
    }

    render() {
        return (
            <Top>
                <div className={this.state.gotoTop ? 'toTop hidden' : 'toTop goTop hidden'}>
                    <BackTop visibilityHeight={600} onClick={this.toTopfun}/>
                    <img src={backImg} alt=""/>
                </div>
                <div className='phone-backtop'>
                    <BackTop visibilityHeight={600}/>
                </div>
            </Top>
        )
    }

    componentDidMount() {
        window.onscroll = throttle(() => {
            let t = document.documentElement.scrollTop || document.body.scrollTop;
            this.setState({
                gotoTop: t > 600
            })
        },1000)
    }

    toTopfun() {
        this.setState({
            gotoTop: false,
        });
    }
}

export default ToTop

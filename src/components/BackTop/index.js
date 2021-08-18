/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-08-18 18:08:23
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\BackTop\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, {PureComponent} from "react";
import {Top} from './style';
import {BackTop} from 'antd';
import backImg from '../../statics/images/scroll.png'
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
        window.onscroll = () => {
            let t = document.documentElement.scrollTop || document.body.scrollTop;
            this.setState({
                gotoTop: t > 600
            })
        }
    }

    toTopfun() {
        this.setState({
            gotoTop: false,
        });
    }
}

export default ToTop

/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-10-17 10:29:17
 * @LastEditors  : helishou
 * @Description  : 页脚
 * @FilePath     : \src\components\Footer\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, {PureComponent} from 'react';
import {Footers} from './style';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Footer extends PureComponent {
    render() {
        const {copyright, domain, icp, title} = this.props.confing.toJS();
        return (
            <Footers>
                <div className='site-info'>
                    <div className='footertext'>
                        <p className='foo-logo'/>
                        <p className='name'>
                            <span>
                                <a href={domain} rel="noopener noreferrer" target={'_blank'}>{copyright}</a>
                            </span>
                        </p>
                        <p>© 2021 {title} <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">{icp}</a></p>
                    </div>
                </div>
            </Footers>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        confing: state.getIn(['header', 'confing']),
    }
};

export default connect(mapStateToProps)(withRouter(Footer));

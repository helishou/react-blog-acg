/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-09-13 18:40:16
 * @LastEditors  : helishou
 * @Description  : home
 * @FilePath     : \src\pages\home\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Banner from './components/Banner';
import ListWrapper from './components/List';
import Feature from './components/Feature';
import { HomeWrapper, MainWrapper } from './style';
// import {actionCreators} from "./store";
import { getrand } from '@/lib/utils';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      banner: '',
      innerHeight: window.innerHeight,
    };
    this.getBanner = this.getBanner.bind(this);
  }

  render() {
    const { banner, innerHeight } = this.state;
    const { userInfo, ListImg } = this.props;
    return (
      <HomeWrapper>
        <Banner
          banner={banner}
          innerHeight={innerHeight}
          getBanner={this.getBanner}
          userInfo={userInfo}
        />
        <MainWrapper id="content">
          <Feature ListImg={ListImg} />
          <ListWrapper />
        </MainWrapper>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    // console.log('index创建')
    this.changeInnerHeight();
    this.getBanner();
    // this.props.getFeature();
  }

  getBanner() {
    const banner = this.props.bannerList;
    const num = getrand(0, banner.length - 1);
    this.setState({
      banner: `url('${banner[num].img}')`,
    });
  }

  changeInnerHeight() {
    window.onresize = () => {
      this.setState({
        innerHeight: window.innerHeight,
      });
    };
  }
}

const mapState = (state) => ({
  userInfo: state.getIn(['header', 'userInfo']),
  // featureList: state.getIn(['home', 'featureList']),
  ListImg: state.getIn(['image', 'ListImg']),
  bannerList: state.getIn(['image', 'bannerList']),
});

// const mapDispatch = (dispatch) => {
//     return {
//         getFeature() {
//             dispatch(actionCreators.getFeature());
//         }
//     }
// };

export default connect(mapState, {})(Home);

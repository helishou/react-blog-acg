import React, { PureComponent } from "react";
import { BannerWrapper, Center, Focusinfo } from "../style";
import { scrollAnimation } from "../../../utils/auth";
import leetcode from "../../../assets/images/leetcode.svg";
import wechat from "../../../assets/images/wechat.png";
import github from "../../../assets/images/github.png";
import gitee from "../../../assets/images/gitee.png";
import next from "../../../assets/images/next-b.svg"
import qq from "../../../assets/images/qq.png"
class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  render() {
    const { banner, innerHeight } = this.props;
    const { introduction } = this.props.userInfo.toJS();
    const { info } = this.state;
    return (
      <BannerWrapper>
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" />
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" />
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" />
          </div>
        </div>
        <div className="headertop-down animated">
          <span onClick={headertop_down}>
            <i className="iconfont icon-chevrondown" />
          </span>
        </div>
        <Center style={{ backgroundImage: banner,height:innerHeight}}>
          <Focusinfo>
            <h1 className="glitch" data-text="こにちわ!">
              こにちわ!
            </h1>
            {/* <div className='header-tou'>
               <img src={'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=708482407,3295795161&fm=26&gp=0.jpg'}  alt=''/>
            </div> */}
            <div className="header-info">
              <p className="ellipsis">
                <i className="iconfont icon-quote-left" />
                <span>
                  {introduction ||
                    "这世界上有一种鸟是没有脚的，它只能够一直的飞呀飞呀。"}
                </span>
                <i className="iconfont icon-quoteright" />
              </p>
              <div className="top-social_v2">
                <li onClick={this.props.getBanner}>
                  <img
                    className="flipx"
                    src={next}
                    alt=""
                  />
                </li>
                {info.map((item, index) => {
                  if (item.showType === 1) {
                    return (
                      <li className="img" key={index}>
                        <img src={item.icon} alt="" />
                        <div className="img-box">
                          <img src={item.content} alt="" />
                        </div>
                      </li>
                    );
                  } else if (item.showType === 2) {
                    return (
                      <li className="text" key={index}>
                        <img src={item.icon} alt="" />
                        <div className="text-box">
                          <p>{item.content}</p>
                        </div>
                      </li>
                    );
                  } else if (item.showType === 3) {
                    return (
                      <li className="link" key={index}>
                        <a
                          href={item.link}
                          target={"_blank"}
                          rel="noopener noreferrer"
                        >
                          <img src={item.icon} alt="" />
                        </a>
                        <div className="text-box">
                          <p>{item.content}</p>
                        </div>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
                <li onClick={this.props.getBanner}>
                  <img
                    src={next}
                    alt=""
                  />
                </li>
              </div>
            </div>
          </Focusinfo>
        </Center>
      </BannerWrapper>
    );
  }

  componentDidMount() {
    // console.log('bannamount')
    // axios.get('https://www.bygit.cn/api/blog/auth/social/v1/info').then((res) => {
    //     if (res.success === 1) {
    // const {models} = res;
    const models = [
      {
        code: "QQ",
        content: "479525390",
        showType: 2,
        icon: qq,
        updateTime: 1621847573185,
      },
      {
        code: "WeChar",
        content: "WXY025025025",
        showType: 2,
        icon: wechat,
        updateTime: 1621847573185,
      },
      {
        code: "Email",
        content: "Wang86699596@gmail.com",
        showType: 2,
        icon: "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/email.svg",
        updateTime: 1621847573185,
      },
      {
        code: "leetcode",
        content: "leetcode",
        link: "https://leetcode-cn.com/u/he-li-shou/",
        showType: 3,
        icon: leetcode,
        updateTime: 1621847573185,
      },
      {
        code: "github",
        content: "github",
        link: "https://github.com/helishou",
        showType: 3,
        icon: github,
        updateTime: 1621847573185,
      },
      {
        code: "gitee",
        content: "gitee",
        link: "https://gitee.com/unclebao",
        showType: 3,
        icon: gitee,
        updateTime: 1621847573185,
      },
    ];
    let array = [];
    for (let i = 0; i < models.length; i++) {
      array.push({
        show: false,
        icon: models[i].icon,
        content: models[i].content,
        showType: models[i].showType,
        link:models[i].link||'',
      });
    }
    this.setState({
      info: array,
    });
  }

// componentWillUnmount(){
//     console.log('baba销毁')
// }
}

function headertop_down() {
  const content = document.getElementById("content").offsetTop;
  scrollAnimation(0, content);
}

export default Banner;

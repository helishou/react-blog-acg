import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Headers,
  NavWrapper,
  NavLeft,
  NavRight,
  Nav,
  NavItem,
  IconBox,
  MoNav,
  Mask,
} from "./style";
import { actionCreators } from "./store";
import { Icon, Menu, Dropdown, Affix, message } from "antd";
import {
  getAvatar,
  getToken,
} from "../../lib/auth";
import { config } from "../../lib/auth";
import openWindow from "../../lib/openWindow";
import { menulist } from "../../lib/router.config";
import isMobileBrowser from "../../utils/ismobli";
class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      value: "",
      open: false,
      isUser: false,
      menuList: menulist,
      loading: false,
      mobile:isMobileBrowser()
    };
    this.handleClick = this.handleClick.bind(this);
    this.keypress = this.keypress.bind(this);
    this.setValue = this.setValue.bind(this);
    this.openMonav = this.openMonav.bind(this);
    this.login = this.login.bind(this);
    // this.loginGithubHandel = this.loginGithubHandel.bind(this);
  }

  render() {
    const { isVisible, value, open, isUser, menuList, loading,mobile } = this.state;
    const { category } = this.props;
    // console.log('category',category)
    const { title, domain } = this.props.confing.toJS();
    const { name, introduction, avatar } = this.props.userInfo.toJS();
    if (title) document.title = title;
    return (
      <Headers>
        <Affix>
          <NavWrapper className="nav-wrapper">
            <NavLeft className="ellipsis">
              <a href={domain} alt="包子铺" id="title">
                <ruby>
                  <span className="sakuraso">肉まん</span>
                  <span className="no">の</span>
                  <span className="shironeko">店</span>
                  <rp></rp>
                  <rt className="chinese-font">{title}</rt>
                  <rp></rp>
                </ruby>
              </a>
              {/* <a >{title}</a> */}
              <Icon type="menu" onClick={this.openMonav} onMouseOver={this.preloadMonav}/>
            </NavLeft>
            <NavRight>
              {loading ? (
                <div className="flex-items">
                  <Nav className="flex-items">
                    <NavItem>
                      <Link to={"/"} className="nav-item">
                        <i className="iconfont icon-fort-awesome" />
                        <span>首页</span>
                      </Link>
                    </NavItem>
                    <NavItem id="area">
                      <Dropdown
                        overlay={this.setCategory(category.toJS(), true)}
                        placement="bottomCenter"
                        getPopupContainer={() =>
                          document.getElementById("area")
                        }
                        overlayClassName="NavDropdown"
                      >
                        <span className="nav-item">
                          <i className="iconfont icon-list-ul" />
                          <span>分类</span>
                        </span>
                      </Dropdown>
                    </NavItem>
                    {menuList.map((item, index) => {
                      if (item.child && item.child.length > 0) {
                        return (
                          <NavItem id={"area" + index} key={index}>
                            <Dropdown
                              overlay={this.setCategory(item.child, false)}
                              placement="bottomCenter"
                              getPopupContainer={() =>
                                document.getElementById("area" + index)
                              }
                              overlayClassName="NavDropdown"
                            >
                              <a
                                href={item.url}
                                target={"_blank"}
                                rel="noopener noreferrer"
                                className="nav-item"
                              >
                                <Icon type={item.icon} theme="filled" />
                                <span>{item.title}</span>
                              </a>
                            </Dropdown>
                          </NavItem>
                        );
                      } else {
                        return (
                          <NavItem key={index}>
                            <Link to={item.url} className="nav-item">
                              {item.icon ? (
                                <i className={item.icon} />
                              ) : (
                                <Icon type={item.type}></Icon>
                              )}
                              <span>{item.title}</span>
                            </Link>
                          </NavItem>
                        );
                      }
                    })}
                  </Nav>
                  <IconBox className="flex-items">
                    <Icon type="search" onClick={this.handleClick} />
                    {isUser || getAvatar() ? (
                      <img src={getAvatar()} alt="" />
                    ) : (
                      <Icon type="user" onClick={this.login} />
                    )}
                  </IconBox>
                </div>
              ) : null}
            </NavRight>
          </NavWrapper>
        </Affix>
        <div
          className={
            isVisible
              ? "search-form search-form--modal is-visible"
              : "search-form search-form--modal"
          }
        >
          <div className="search-form__inner">
            <div className="box">
              <p className="micro mb-">想要找点什么呢？</p>
              <Icon type="search" />
              <input
                type="search"
                name="s"
                placeholder="Search"
                onKeyPress={this.keypress}
                value={value}
                onChange={this.setValue}
              />
            </div>
          </div>
          <div className="search_close" onClick={this.handleClick} />
        </div>
        <Mask className={open ? "show" : "hidden"} onClick={this.openMonav}/>
        {mobile?<MoNav className={open ? "mo-nav open" : "mo-nav"}>
          <div className="m-avatar">
            <img src={avatar} alt="" />
          </div>
          <p className="name ellipsis">{name}</p>
          <p className="info ellipsis">{introduction}</p>
          <ul className="menu">
            <li>
              <Link
                to={"/"}
                className="item flex-items"
                onClick={this.openMonav}
              >
                <i className="iconfont icon-fort-awesome" />
                <span>首页</span>
              </Link>
            </li>
            <li>
              <span className="item flex-items">
                <i className="iconfont icon-list-ul" />
                <span>分类</span>
              </span>
              <ul className="sub-menu">
                {category.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={"/category/" + item.get("id")}
                        className="item flex-items"
                        onClick={this.openMonav}
                      >
                        <span>{item.get("name")}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            {menuList.map((item, index) => {
              if (item.child && item.child.length > 0) {
                return (
                  <li key={index}>
                    <a
                      href={item.url}
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="item flex-items"
                    >
                      <Icon type={item.icon} theme="filled" />
                      <span>{item.title}</span>
                    </a>
                    <ul className="sub-menu">
                      {item.child.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={item.url}
                              target={"_blank"}
                              rel="noopener noreferrer"
                              className="item flex-items"
                            >
                              <span>{item.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link
                      to={item.url}
                      className="item flex-items"
                      onClick={this.openMonav}
                    >
                      {item.icon ? (
                        <i className={item.icon} />
                      ) : (
                        <Icon type={item.type} />
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </MoNav>:null}
      </Headers>
    );
  }

  componentDidMount() {
    this.props.getCategory();
    this.props.getUser();
    this.props.getConfing();
    //自定义菜单
    this.getMenu();
  }

  getMenu() {
    this.setState({ loading: true });
    //自定义菜单
    // axios.get('/menu/front/v1/list', {
    //     params: {
    //         page: 1,
    //         size: 10
    //     }
    // }).then((res) => {
    //     console.log('getMenu()',res)
    //     if (res.success === 1) {
    //         let Time = setTimeout(() => {
    //             this.setState({
    //                 menuList: res.models,
    //                 loading: true
    //             });
    //             clearTimeout(Time);
    //         }, 10)
    //     }
    // });
  }

  login() {
    // let preventHistory = {
    //   pathname: window.location.pathname,
    //   search: window.location.search,
    // };
    // window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    // // window.location.href = 'https://github.com/login/oauth/authorize?client_id=6de90ab270aea2bdb01c&redirect_uri=http://biaochenxuying.cn/login'
    // window.location.href = `${config.oauth_uri}?client_id=${
    //   config.client_id
    // }&redirect_uri=${config.redirect_uri}`;
    // console.log(`${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`)
    openWindow(
      //打开新窗口登陆github
      `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`,
      "绑定GitHub",
      540,
      540
    );
    let cs = 0;
    let checkToken = () => {
      cs++;
      if (typeof getToken() !== "undefined") {
        clearInterval(iv);
        message.success("登录成功");
        this.setState({ isUser: true });
      } else if (cs > 50) {
        // 防止内存泄露
        clearInterval(iv);
        cs = null;
      }
    };
    let iv = setInterval(checkToken, 1000);
  }
  keypress(e) {
    if (e.which === 13) {
      const { value } = this.state;
      if (value === "") {
        message.warning("please type a comment");
      } else {
        this.props.history.push("/search/" + value);
        this.handleClick();
      }
    }
  }

  setValue(e) {
    const value = e.target.value;
    this.setState({ value: value });
  }

  openMonav() {
    this.setState((prevState) => {
      if (!prevState.open) {
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.height = "";
        document.body.style.overflow = "";
      }
      return {
        open: !prevState.open,
      };
    });
  }
  preloadMonav=()=>{
    this.setState({mobile:true})
  }
  handleClick() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  setCategory(list, isCategory) {
    // console.log(list)
    if (isCategory) {
      return (
        <Menu>
          {list.map((item, index) => {
            // console.log(item)
            return (
              <Menu.Item key={index}>
                <Link to={"/category/" + item.id}>
                  {<Icon  style={{paddingRight:'0.5rem',marginLeft:'-0.5rem'}} type="cloud" theme={index&1?'filled':''}></Icon>}
                  {item.name}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    } else {
      return (
        <Menu>
          {list.map((item, index) => {
            // console.log(item)
            return (
              <Menu.Item key={index}>
                <a href={item.url} target={"_blank"} rel="noopener noreferrer">
                  {item.title}
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.getIn(["header", "category"]),
    confing: state.getIn(["header", "confing"]),
    userInfo: state.getIn(["header", "userInfo"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCategory() {
      dispatch(actionCreators.getCategory());
    },
    getUser() {
      dispatch(actionCreators.getUser());
    },
    getConfing() {
      dispatch(actionCreators.getConfing());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

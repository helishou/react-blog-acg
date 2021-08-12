import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LinksWrapper, LinksTop, MainWrapper } from "./style";
import axios from "axios";
import Itemlayout from "../../components/Itemlayout";
import { Spin, Anchor } from "antd";
const { Link } = Anchor;

const LinksList = (props) => {
  const { list, loading } = props;
  if (loading) {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    );
  } else {
    return (
      <div className="links cell">
        {list.length > 0 ? (
          <div className="extra">
            {list.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <h2 className="link-title" id={`${item.title}`}>
                    <span className="fake-title">{item.title}</span>
                  </h2>
                  <ul className="link-items fontSmooth">
                    {item.list.map((item2, index2) => {
                      return (
                        <li className="link-item post-list-show " key={index2}>
                          <a
                            href={item2.href}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <img src={item2.logo} alt="" />
                            <span className="sitename">{item2.name}</span>
                            <div className="linkdes">{item2.description}</div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <p>去找点新朋友玩吧...</p>
        )}
      </div>
    );
  }
};

class Links extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timg: "",
      list: [],
      loading: true,
    };
  }

  render() {
    const { list, loading } = this.state;
    return (
      <Itemlayout title="友人帐" timg={this.state.timg}>
        <MainWrapper>
        <div className="flex-items">
          <LinksList list={list} loading={loading} />
          <div className="toc-box">
            {list.length > 0 && (
              <Anchor
                className="toc"
                affix
                showInkInFixed
                onClick={this.handleClick}
                offsetTop={100}
              >
                {list.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      href={`#${item.title}`}
                      title={item.title}
                    />
                  );
                })}
              </Anchor>
            )}
          </div>
        </div>
        </MainWrapper>
      </Itemlayout>
    );
  }

  componentDidMount() {
    this.getLinks();
    this.getTimg();
  }

  handleClick(e, link) {
    e.preventDefault();
  }

  getLinks() {
    this.setState({ loading: true });
    axios.get("/getLinkList").then((res) => {
      let { list } = res.data;
      let arrar = [];
      let temp = [];
      for (let i in list) {
        temp.push({
          id: 2,
          name: list[i].name,
          href: list[i].url,
          logo: list[i].icon,
          sort: 0,
          description: list[i].desc || "",
        });
      }
      arrar.push({
        title: "大佬们",
        list: temp,
      });
      if (res.code === 0) {
        this.setState({
          list: arrar,
          loading: false,
        });
      }
    });
  }

  getTimg() {
    // const list = this.props.topImg;
    // const num = this.getrand(0, list.length - 1);
    this.setState({
      timg: "https://2heng.xin/wp-content/uploads//2017/11/1-1511301SP0.jpg",
    });
  }

  getrand(m, n) {
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }
}

const mapState = (state) => {
  return {
    topImg: state.getIn(["image", "bannerList"]),
  };
};

export default connect(mapState)(Links);

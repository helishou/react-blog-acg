/*
 * @Author       : helishou
 * @Date         : 2021-05-31 09:30:07
 * @LastEditTime : 2021-08-13 15:40:03
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\tags\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Spin, Tag } from "antd";
import { TagsWrapper, TagsTop, MainWrapper } from "./style";
import Itemlayout from "../../components/Itemlayout";
const TagsList = (props) => {
  const { list, loading } = props;
  const color = [
    "#23b7e5",
    "#3a3f51",
    "#27c24c",
    "#1c2b36",
    "#fad733",
    "#7266ba",
    "#f05050",
  ];
  if (loading) {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    );
  } else {
    return (
      <div className="tags-list">
        {list.length > 0 ? (
          list.map((item, index) => {
            return (
              <Tag color={color[getrand(0, color.length - 1)]} key={index}>
                <Link to={"/tags/" + item._id}>
                  {item.name}
                  {item.postsTotal ? "(" + item.postsTotal + ")" : ""}
                </Link>
              </Tag>
            );
          })
        ) : (
          <p>你暂时还未添加标签...</p>
        )}
      </div>
    );
  }
};

const getrand = (m, n) => {
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

class Tags extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timg: "",
      list: [],
      loading: true,
    };
  }

  render() {
    const { timg, list, loading } = this.state;
    return (
      <Itemlayout title="标签墙" timg={timg}>
        <MainWrapper>
          <TagsList list={list} loading={loading} />
        </MainWrapper>
      </Itemlayout>
    );
  }

  componentDidMount() {
    this.getTags();
    this.getTimg();
  }

  getTags() {
    this.setState({ loading: true });
    axios.get("getTagList").then((res) => {
      if (res.code === 0) {
        this.setState({
          list: res.data.list,
          loading: false,
        });
      }
    });
  }

  getTimg() {
    // const list = this.props.topImg;
    // const num = getrand(0, list.length - 1);
    this.setState({
      timg: "https://2heng.xin/wp-content/uploads//2017/08/pixiv54839592.png",
    });
  }
}

const mapState = (state) => {
  return {
    topImg: state.getIn(["image", "bannerList"]),
  };
};

export default connect(mapState)(Tags);

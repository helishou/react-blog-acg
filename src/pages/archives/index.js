import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { MainWrapper } from "./style";
import ArticalLink from '../../components/ArticalLink'
import { Spin } from "antd";
import Itemlayout from "../../components/Itemlayout";
// const setYears = (time) => {
//   const date = new Date(time);
//   let Y = date.getFullYear() + "年";
//   let M =
//     (date.getMonth()  < 10
//       ? "0" + (date.getMonth() )
//       : date.getMonth() ) + "月";
//   return Y + M;
// };

const setDay = (time) => {
  const date = new Date(time);
  return date.getDate() + "日";
};

const ArchivesList = (props) => {
  const { list, loading } = props;
  const Class = [
    "info",
    "dark",
    "success",
    "black",
    "warning",
    "primary",
    "danger",
  ];
  if (loading) {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    );
  } else {
    return (
      <div className="wrapper-md">
        <ul className="timeline">
          {list.map((item, index) => {
            // console.log("item", item);
            return (
              <div className={Class[index % Class.length]} key={index}>
                <li className="tl-header">
                  <h2 className="title">
                    {item.archiveYear + "年" + item.archiveMonth + "月"}
                  </h2>
                </li>
                {item.archivePosts.map((item2, index2) => {
                  // console.log("archivePosts", item2);
                  return (
                    <div className="tl-body" key={index2}>
                      <li className="tl-item">
                        <div className="tl-wrap">
                          <span className="tl-date">
                            {setDay(item2.createTime)}
                          </span>
                          <h3 className="tl-content">
                            <span className="arrow left" />
                            <ArticalLink
                              id={item2.id}
                              thumbnail={item.thumbnail}
                              className="text-lt"
                            >
                              {item2.title}
                            </ArticalLink>
                          </h3>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="tl-header">
            <div className="start">博客用React重构</div>
          </div>
        </ul>
      </div>
    );
  }
};

class Archives extends PureComponent {
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
      <Itemlayout title="文章归档" timg={this.state.timg}>
        <MainWrapper>
          <ArchivesList list={list} loading={loading} />
        </MainWrapper>
      </Itemlayout>
    );
  }

  componentDidMount() {
    this.getArchives();
    this.getTimg();
  }

  getArchives() {
    this.setState({ loading: true });
    axios.get("/getArticleList?state=1&article=1").then((res) => {
      let { data } = res;
      let models = [];
      data.list.map((item, index) => {
        let archivePosts = [];
        // console.log(item);
        item.list.map((item, index) => {
          archivePosts.push({
            id: item._id,
            title: item.title,
            createTime: item.create_time,
            updateTime: item.create_time,
          });
          return null
        });
        models.push({
          articleTotal: data.count,
          archiveYear: item.yearMonth.slice(0, 4),
          archiveMonth: parseInt(item.yearMonth.slice(4)) + 1,
          archivePosts: archivePosts,
        });
        return null
      });
      // console.log('models',models)
      if (res.code === 0) {
        this.setState({
          list: models,
          loading: false,
        });
      }
    });
  }

  getTimg() {
    // const list = this.props.topImg;
    // const num = this.getrand(0, list.length - 1);
    this.setState({
      timg: "https://2heng.xin/wp-content/uploads//2017/08/午後_58898122.jpg",
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

export default connect(mapState)(Archives);

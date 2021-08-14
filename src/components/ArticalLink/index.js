/*
 * @Author       : helishou
 * @Date         : 2021-08-12 23:28:37
 * @LastEditTime : 2021-08-14 21:29:52
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\components\ArticalLink\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { actionCreators } from "../../pages/article/store";
import { connect } from "react-redux";
import axios from "axios";
import NProgress from "nprogress";
function ArticalLink(props) {
  const processConfig = {
    trickleSpeed: 200,
    showSpinner: false,
    easing: "ease",
    speed: 500,
    minimum: 0.2,
  };
  NProgress.configure(processConfig);
  const getArtical = (id) => {
    //获取文章
    return new Promise((resolve, reject) => {
      axios
        .post("/getArticleDetail", {
          id: id,
          type: 1,
          filter: 2,
        })
        .then((res) => {
          if (res.code === 0) {
            let { data } = res;
            let model = {
              id: data._id,
              title: data.title,
              content: data.content,
              comments: data.meta.comments,
              createTime: data.create_time,
              author: data.author,
              commentsList: data.comments,
              thumbnail: data.img_url,
            };
            props.setArtical(model);
            resolve();
          }
        })
        .catch((error) => {
          props.history.push("/404");
        });
    });
  };
  const onClick = async (e) => {
    let flag = false;
    NProgress.start();
    setTimeout(() => {
      if (!flag) {
        NProgress.inc(0.5);
      }
    }, 2000);
    e.preventDefault();
    if (props.ArticleId !== props.id) {
      await getArtical(props.id);
    }
    props.history.push("/article/" + props.id);
    NProgress.done();
    flag = true;
    // } catch {
    //   this.props.history.push("/404");
    // }
  };
  return (
    <Link
      to={{
        pathname: "/article/" + props.id,
      }}
      className={props.className}
      onClick={onClick}
    >
      {props.children}
    </Link>
  );
}
const mapState = (state) => {
  return {
    //   topImg: state.getIn(["image", "bannerList"]),
    //   // thumbnail: state.getIn(["artical", "thumbnail"]),
    ArticleId: state.getIn(["artical", "id"]),
    // userInfo: state.getIn(["header", "userInfo"]),
  };
};
const mapDispatch = (dispatch) => {
  return {
    setArtical(data) {
      dispatch(actionCreators.setArtical(data));
    },
  };
};
export default connect(mapState, mapDispatch)(withRouter(ArticalLink));

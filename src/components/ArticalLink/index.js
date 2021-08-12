/*
 * @Author       : helishou
 * @Date         : 2021-08-12 23:28:37
 * @LastEditTime : 2021-08-13 02:04:27
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\components\ArticalLink\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from "react";
import { Link ,withRouter} from "react-router-dom";
import { actionCreators } from "../../pages/article/store";
import { connect } from "react-redux";
import axios from "axios";
function ArticalLink(props) {
  const getArtical = (id) => {
    //获取文章
    return new Promise((resolve, reject) => {
      console.log("22");
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
              // summary: data.desc,
              // views: data.meta.views,
              // weight: data.weight || 1,
              createTime: data.create_time,
              // isComment: data.isComment || 1,
              // tagsList: data.category,
              // categoryId: data.category[0],
              // categoryName: data.category[0],
              author: data.author,
              commentsList: data.comments,
              thumbnail: data.img_url,
            };
            // http://img.netbian.com/file/2020/0407/small7e47965b793534d12b64e4ebdcd33cfa1586267701.jpg
            console.log(model, data.img_url);
            props.setArtical(model);
            resolve()
          }
        });
    });
  };
  const onClick = async (e) => {
    e.preventDefault()
    await getArtical(props.id);
    props.history.push("/article/" + props.id)
    // } catch {
    //   this.props.history.push("/404");
    // }
  };
  return (
    <Link
      to={{
        pathname: "/article/" + props.id,
        state: { thumbnail: props.thumbnail },
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
    //   content: state.getIn(["artical"]),
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

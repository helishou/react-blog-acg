import React, { Component } from "react";
import { CommentsWrapper, CommentTextarea } from "../style";
import { getFormatTime, getTime } from "../../../lib/public";
import { Pagination, message } from "antd";
import axios from "axios";
import { loginGithubHandel, config } from "../../../lib/auth";
import openWindow from "../../../lib/openWindow";
import { getToken, getAvatar, getName } from "../../../lib/auth";
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      isComment: props.isComment,
      commentsList: props.commentsList,
      pageInfo: {},
      value: "",
      parentId: "",
      preContent: "",
      preUserId: "",
      //   commentDetail: props.commentDetail,
    };
    this.setValue = this.setValue.bind(this);
    this.addComments = this.addComments.bind(this);
    this.reply = this.reply.bind(this);
    this.login = this.login.bind(this);
  }

  render() {
    const { pageInfo, id, commentsList, isComment } = this.state;
    return (
      <CommentsWrapper>
        <h3 className="comments-list-title">
          Comments | <span className="noticom">{pageInfo.total} 条评论 </span>
        </h3>
        <ul className="commentwrap">
          {commentsList.map((item, index) => {
            // if (item.is_handle !== 2) {
            //   return null;
            // }
            return (
              <li className="comment" key={index}>
                <div className="commentinfo flex-items">
                  <img src={item.user.avatar} alt="" />
                  <div className="commeta cell">
                    <h2>{item.user.name}</h2>
                    <h3>
                      {getTime(item.create_time)}
                      {/* |{" "}
                      {getFormatTime(item.create_time)} */}
                    </h3>
                  </div>
                  <span
                    onClick={() =>
                      this.reply(item._id, item.user.name, item.user.user_id)
                    }
                    className="comment-reply-link"
                  >
                    Reply
                  </span>
                </div>
                <div className="body">
                  <p>
                    {/* {item.parentUserName && <span>@{item.parentUserName}</span>} */}
                    {item.content}
                  </p>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
        <Pagination
          className="pagination"
          hideOnSinglePage
          size="small"
          onChange={(page) => this.getComments(id, page)}
          itemRender={this.itemRender}
          current={pageInfo.page}
          pageSize={5}
          total={pageInfo.total}
        />
        {isComment === 1 ? (
          <CommentTextarea>
            <textarea
              placeholder="你是我一生只会遇见一次的惊喜 ..."
              name="comment"
              className="commentbody"
              id="comment"
              rows="5"
              tabIndex="4"
              value={this.state.value}
              onChange={this.setValue}
            />
            <div className="form-submit">
              <input
                onClick={this.addComments}
                name="submit"
                type="submit"
                id="submit"
                className="submit"
                value="BiuBiuBiu~"
              />
            </div>
          </CommentTextarea>
        ) : (
          <p className="text">此处评论已关闭</p>
        )}
      </CommentsWrapper>
    );
  }

  componentDidMount() {
    // this.getComments(this.props.id, 1);
  }

  reply(parentId, authorName, preUserID) {
    this.setState({
      value: `@${authorName}：`,
      preContent: `@${authorName}：`,
      parentId: parentId,
      preUserID: preUserID,
    });
  }

  itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <span>« Older</span>;
    }
    if (type === "next") {
      return <span>Newer »</span>;
    }
    return originalElement;
  }

  setValue(e) {
    const value = e.target.value;
    this.setState((prevState) => {
      return {
        value: value,
        parentId: value ? prevState.parentId : "",
        preContent: value ? prevState.preContent : "",
        preUserID: value ? prevState.preUserID : "",
      };
    });
  }

  login() {
    let popWin = openWindow(
      `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`,
      "绑定GitHub",
      540,
      540
    );
    let checkCode = () => {
      try {
        let query = popWin.location.search.substring(1);
        var querystring = require("querystring");
        let code = querystring.parse(query).code;
        if (typeof code !== "undefined") {
          clearInterval(intervalId);
          popWin.close();
          loginGithubHandel(code);
          // eventEmitter.emit("code", code);
        }
      } catch (err) {}
    };
    let intervalId = setInterval(checkCode, 1000);
  }

  addComments() {
    const { value, id, parentId, preContent, preUserID } = this.state;
    const _id = getToken();
    if (!_id) {
      message.error("请先登录");
      this.login();
    }
    const data = {
      content: value,
      article_id: id,
      user_id: _id,
    };
    if (value === "") {
      message.warning("please type a comment");
      return false;
    }
    axios({
      method: "post",
      url: "/addComment",
      data: data,
    }).then((res) => {
      // console.log(res);
      if (res.code === 0) {
        message.success("评论成功");
        this.getComments(data);
      }

      this.setState({
        value: "",
        parentId: "",
      });
    });
  }

  getComments(data) {
    const newComment = {
      create_time: getTime(new Date().getTime()),
      user: { avatar: getAvatar(), name: getName() },
      content: data.content,
      _id: data.user_id,
    };
    this.setState({
      commentsList: [...this.state.commentsList, newComment],
      //   pageInfo: res.pageInfo,
    });
  }
}

export default Comments;

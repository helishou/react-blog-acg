/*
 * @Author       : helishou
 * @Date         : 2021-08-13 22:40:53
 * @LastEditTime : 2021-08-18 18:57:15
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\pages\aboutme\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

import { AboutWrapper, MyButton } from "./style";
import Itemlayout from "../../components/Itemlayout";
import img from "../../assets/images/ayrgh-0yern.webp";
import React, { Component } from "react";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueMessage: [],
      dialogueButton: [],
    };
  }
  componentDidMount() {
    this.created();
  }
  next = (message, time = 0, choice = false) => {
    setTimeout((_) => {
      if (!choice) {
        this.setState({
          dialogueMessage: [...this.state.dialogueMessage, message],
        });
      } else {
        this.setState({ dialogueButton: message });
      }
    }, time);
  };
  choice = (item) => {
    this.setState({ dialogueButton: [] });
    this.next({ message: item.message, class: "you" });
    switch (item.id) {
      default:
        this.next('忘记写id了')
        break
      case 1:
        this.next(
          {
            message: "😘",
            class: "me",
          },
          1000
        );
        this.next(
          {
            message: "目前就读于杭州电子科技大学",
            class: "me",
          },
          2000
        );
        this.next(
          {
            message: "主攻前端，也会写点后端和部署服务器",
            class: "me",
          },
          3000
        );
        this.next(
          {
            message: "技术栈主要是React，也学了一点vue",
            class: "me",
          },
          4000
        );
        this.next(
          {
            message: "Node.js，Electron，ReactNative也都做过一些",
            class: "me",
          },
         5000
        );
        this.next(
          { message: "喜欢动漫、喜欢前端、梦想去一趟日本", class: "me" },
          6000
        );
        this.next({ message: "希望进入大厂，学习技术", class: "me" }, 7000);
        this.next({ message: "人生远不止眼前的苟且", class: "me" }, 8000);
        this.next([{ message: "为啥取名叫包子叔?🤔", id: 3 },{ message: "为啥取名叫河狸兽?🤔", id: 4 }], 9000, true);
        break;
      case 2:
        this.next({ message: "告辞", class: "me" }, 1000);
        break;
      case 3:
        this.next(
          { message: "这个名字是早些年一个网友的名字", class: "me" },
          1000
        );
        this.next({ message: "然后被我盗用了！", class: "me" }, 2000);
        this.next(
          {
            message: "所以如果你从哪里看见这个名字，那可能不是我",
            class: "me",
          },
          3000
        );
        this.next([{ message: "域名有啥含义吗?(ง •_•)ง", id: 5 }], 4000, true);
        break;
      case 4:
        this.next(
          { message: "这是MHOL里一只怪物的名字", class: "me" },
          1000
        );
        this.next({ message: "因为毛茸茸的很可爱！", class: "me" }, 2000);
        this.next(
          {
            message: "所以就拿来用了!",
            class: "me",
          },
          3000
        );
        this.next([{ message: "域名有啥含义吗?(ง •_•)ง", id: 5 }], 4000, true);
        break;
      case 5:
        this.next(
          { message: "是我的真实姓名啦。。", class: "me" },
          1000
        );
        this.next(
          { message: "那么请仔细研究下我的blog吧！^_^", class: "me" },
          2000
        );
        break;
    }
  };
  created = () => {
    this.next({ message: "Hi, there👋", class: "me" });
    this.next({ message: "我是河狸兽", class: "me" }, 1000);
    this.next({ message: "也可以叫我包子叔", class: "me" }, 2000);
    this.next({ message: "我就是一个死宅 !!", class: "me" }, 3000);
    this.next(
      [
        { message: "然后呢?😃", id: 1 },
        { message: "少废话！🤯", id: 2 },
      ],
      4000,
      true
    );
    // this.getAbout();
  };

  render() {
    return (
      <Itemlayout title="关于我" timg={img}>
        <AboutWrapper>
          <div className="container-content revision">
            <div className="v-container">
              <article id="abount">
                <div className="dialogue">
                  <div className="dialogue-title">
                    <span>与&nbsp;</span>
                    <ruby>
                      包子叔
                      <rt>こんにちは</rt>
                    </ruby>
                    <span>&nbsp;对话</span>
                  </div>
                  <div className="dialogue-message">
                    {this.state.dialogueMessage.map((item, index) => {
                      return (
                        <div key={item.message} className={`send-message ${item.class}`}>
                          <span>{item.message}</span>
                        </div>
                      );
                    })}
                    {this.state.dialogueButton.map((item, index) => {
                      return (
                        <MyButton
                          className="choice-button"
                          key={item.message}
                          onClick={() => this.choice(item)}
                        >
                          {item.message}
                        </MyButton>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </AboutWrapper>
      </Itemlayout>
    );
  }
}

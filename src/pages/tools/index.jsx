import React, { createRef } from "react";
import { Wrapdiv, Backgroud } from "./style";

export default class Tools extends React.Component {
  frameRef =createRef()
    shouldComponentUpdate() {
      return false;
    }
  render() {
    return (
      <Backgroud>
        <Wrapdiv>
          <iframe
            ref={this.frameRef}
            id="ifreameId"
            title="圣遗物副词条数便捷计算器"
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
            // ref="iframe"
            src="http://spongem.com/ajglz/ys/ys.html"
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="0"
          />
        </Wrapdiv>
      </Backgroud>
    );
  }
}

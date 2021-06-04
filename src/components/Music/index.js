/*
 * @Author       : helishou
 * @Date         : 2021-05-25 16:44:36
 * @LastEditTime : 2021-06-04 20:22:37
 * @LastEditors  : helishou
 * @Description  : 音乐播放器
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\components\Music\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React, { useEffect } from "react";
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";
import axios from "axios";
import music1 from  '../../statics/music/song1.mp3'
export default function Music() {
  // const getWYY=()=>{
  //   https://api.imjad.cn/cloudmusic/?id=460839654&type=song
  //   https://v1.alapi.cn/api/music/search?keyword=雪之泪
  // }
  const getMuisic = () => {
    axios.get("/getMusic").then((res) => {
      console.log(res);
    });
    const options = {
      container: document.getElementById("player"),
      fixed: true,
      theme: "#fe9600",
      listMaxHeight: "300px",
      listFolded: false,
      lrcType: 1,
      // autoplay: true,
      audio: [
        // {
        //   name: "永不失联的爱",
        //   url: "https://m7.music.126.net/20210603215250/f29813d418f56f7088e956c5aea627cb/ymusic/6ffd/dd57/24d7/4cd039ba64c6646f4b9e21450b156852.mp3",
        //   artist: "周兴哲",
        //   cover:
        //     "https://p1.music.126.net/ACPwGpJZxmGKnM3rWilemA==/109951163083048605.jpg",
        //   lrc: "",
        // },
        // {
        //   name: "悬溺",
        //   url: "https://m8.music.126.net/20210603215354/f7bd84232ebbbab78d37879c4d782ba2/ymusic/075f/055d/5153/05d5063ae427413c4a0df9fddec6f4cf.mp3",
        //   artist: "封茗囧菌",
        //   cover:
        //     "https://p2.music.126.net/7giu5YmWVADmmLMJKka_6g==/109951164523346209.jpg",
        //   lrc: "",
        // },
        {
          name: "雪之泪 雨之音",
          url: music1,
          artist: "东京塔子",
          cover:
            "https://p2.music.126.net/bLW5Sq4HmQsLDaRrbFD_HA==/109951162862938232.jpg",
          lrc: `[00:27.35]\n[01:01.42]被雨滴拍打着\n[01:05.17]人群拥挤的车站前站立着\n[01:08.76]“欢迎回来”这样说道\n[01:10.12]虽然是非常美好的过去\n[01:13.90]然而现在依然是一个人\n[01:16.16]不再快点就要赶不上了\n[01:19.97]这场盲目的追逐游戏\n[01:23.62]仍然不知到底何时会结束\n[01:28.73]请告诉我答案\n[01:32.26]昏暗灯光下隐藏着\n[01:36.05]似乎很寂寞的表情\n[01:39.50]注视着你的每一天\n[01:43.39]虽然感到很痛苦\n[01:45.57]（正因为）喜欢你\n[01:47.55]即使知道是谎言也选择原谅\n[01:50.85]渡过漫漫长夜\n[01:52.82]不断自我安慰\n[01:54.41]即使继续等待下去\n[01:55.94]依然找寻不到答案\n[02:00.17]（正因为）是谎言\n[02:02.29]所以即使被玩弄也没关系\n[02:05.79]掌心残存的温度\n[02:09.24]现在依然记得\n[02:30.00]雪花夹雨纷纷落下\n[02:33.93]持续不断胡话梦话\n[02:37.43]即使捂住耳朵依然不断回响着\n[02:42.91]不要再选择放手了\n[02:45.93]被月光映照着的\n[02:49.93]渐渐拉长的人影\n[02:53.48]每次想要叫住你\n[02:57.21]都感到害怕而踌躇不前\n[02:59.27]行走于进退两难的境地的你\n[03:04.78]向我伸出双手 帮我擦干眼泪\n[03:08.22]轻声说道“不要再哭了”\n[03:14.04]行走于荆棘之路的我\n[03:19.55]已然不再是以前的我\n[03:22.40]不知不觉间与你渐行渐远\n[03:28.79]（正因为）喜欢你\n[03:30.91]即使怀抱不愉快的回忆\n[03:34.18]即使被践踏也选择相信\n[03:37.83]无论几次都会追逐着你\n[03:43.53]（正因为）爱着你\n[03:45.77]即使选择了不同的道路\n[03:49.07]请最后再一次看我一眼\n[03:52.49]在雪花之下\n`,
        },
      ],
    };
    const ap = new APlayer(options);
    ap.on("ended", function () {
      console.log("player ended");
    });
    //     }
    // })
  };
  useEffect(() => {
    getMuisic();
    return () => {};
  }, []);
  return <div id="player"></div>;
}

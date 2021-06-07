/*
 * @Author       : helishou
 * @Date         : 2021-05-25 16:44:36
 * @LastEditTime : 2021-06-07 09:02:40
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
    // axios.get("/getMusic").then((res) => {
    //   console.log(res);
    // });
    const options = {
      container: document.getElementById("player"),
      fixed: true,
      theme: "#fe9600",
      listMaxHeight: "300px",
      listFolded: false,
      lrcType: 3,
      preload:'none',
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
          lrc: ``,
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

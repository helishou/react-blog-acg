import React, { useEffect } from "react";
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";

export default function Music() {
  const getMuisic = () => {
    // axios.get('/music/music/v1/list').then((res) => {
    //     if(res.models.length > 0){
    const options = {
      container: document.getElementById("player"),
      fixed: true,
      theme: "#fe9600",
      listMaxHeight: "300px",
      listFolded: false,
      lrcType: 3,
      audio: [
        {
          name: "永不失联的爱",
          url: "http://music.163.com/song?id=523250334&userid=277106354",
          artist: "周兴哲",
          cover:
            "https://p1.music.126.net/ACPwGpJZxmGKnM3rWilemA==/109951163083048605.jpg",
          lrc: "",
        },
        {
          name: "悬溺",
          url: "http://music.163.com/song?id=1407112865&userid=277106354",
          artist: "封茗囧菌",
          cover:
            "https://p2.music.126.net/7giu5YmWVADmmLMJKka_6g==/109951164523346209.jpg",
          lrc: "",
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

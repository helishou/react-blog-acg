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
          name: "星辰大海",
          url: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
          artist: "黄霄雲",
          cover:
            "https://p3.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg",
          lrc: "",
        },
        {
          name: "乌兰巴托的夜 (Live)",
          url: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
          artist: "谭维维",
          cover:
            "https://p4.music.126.net/DprdNIWpRWYZJak4Q-cS-Q==/2891715582273535.jpg",
          lrc: "",
        },
        {
          name: "错位时空",
          url: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
          artist: "艾辰",
          cover:
            "https://p3.music.126.net/8C0lwLE88j9ZwLyPQ9a4FA==/109951165595770076.jpg",
          lrc: "",
        },
        {
          name: "10 Hz Alpha Thunderstorm (Extended Version)",
          url: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
          artist: "White Noise Meditation",
          cover:
            "https://p3.music.126.net/qubVOdYo2xfJJzNhSjwDLg==/7943971512042563.jpg",
          lrc: "",
        },
        {
          name: "句号",
          url: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
          artist: "G.E.M.邓紫棋",
          cover:
            "https://p4.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg",
          lrc: "",
        },
        {
          name: "Señorita",
          url: "http://music.163.com/song/media/outer/url?id=562598065.mp3",
          artist: "MADILYN",
          cover:
            "https://p3.music.126.net/sIP-VbnVw2JpxajGZvoTkw==/109951164233533476.jpg",
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

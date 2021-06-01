import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeCategory = (data) => ({
  type: constants.GET_CATEGORY,
  data: fromJS(data),
});

export const getCategory = () => {
  return (dispatch) => {
    axios.get("/getCategoryList").then((res) => {
      let list = res.data.list;
      list.map((item, index) => {
        item.id = item._id;
      });
      if (res.message === "success") {
        dispatch(changeCategory(res.data.list));
      }
    });
  };
};

export const getUser = () => {
  return (dispatch) => {
    // axios.get('/auth/master/v1/get').then((res) => {
    //     if (res.success === 1) {
    //         dispatch({
    //             type: constants.GET_USER,
    //             data: fromJS(res.model)
    //         });
    //     }
    // })
    dispatch({
      type: constants.GET_USER,
      data: fromJS({
        name: "河狸兽",
        avatar:
          "https://avatars.githubusercontent.com/u/41136716?v=4",
        email: "479525390@qq.com",
      }),
    });
  };
};

export const getConfing = () => {
  return (dispatch) => {
    // axios.get("/config/config-base/v1/list").then((res) => {
    //   if (res.success === 1) {
    // const { models } = res;
    const models = [
      {
        configKey: "title",
        configValue: "包子铺",
      },
      {
        configKey: "domain",
        configValue: "https://www.wangxinyang.xyz",
      },
      {
        configKey: "keywords",
        configValue: "web,javascript,vue,react,nuxt",
      },
      {
        configKey: "description",
        configValue: "河狸兽",
      },
      {
        configKey: "metas",
        configValue: "1.1.1",
      },
      {
        configKey: "copyright",
        configValue: "Copyright @ helishou",
      },
      {
        configKey: "icp",
        configValue: "浙ICP备2021016797号",
      },
    ];
    let data = {};
    models.forEach((item) => {
      if (item.configKey === "title") {
        data.title = item.configValue;
      }
      if (item.configKey === "keywords") {
        data.keywords = item.configValue;
        let oMeta = document.createElement("meta");
        oMeta.name = "keywords";
        oMeta.content = item.configValue;
        document.getElementsByTagName("head")[0].appendChild(oMeta);
      }
      if (item.configKey === "description") {
        data.description = item.configValue;
        let Meta = document.createElement("meta");
        Meta.name = "description";
        Meta.content = item.configValue;
        document.getElementsByTagName("head")[0].appendChild(Meta);
      }
      if (item.configKey === "domain") {
        data.domain = item.configValue;
      }
      if (item.configKey === "copyright") {
        data.copyright = item.configValue;
      }
      if (item.configKey === "metas") {
        data.metas = item.configValue;
      }
      if (item.configKey === "icp") {
        data.icp = item.configValue;
      }
    });
    dispatch({
      type: constants.GET_CONFING,
      data: fromJS(data),
    });
    //   }
    // });
  };
};

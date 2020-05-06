import { AppConfig as WechatAppConfig } from "remax/wechat";
import { AppConfig as AliAppConfig } from "remax/ali";
import { AppConfig as ToutiaoAppConfig } from "remax/toutiao";
import { AppConfig as WebAppConfig } from "remax/web";

const pages = ["pages/index/index", "pages/new/index"];

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarTitleText: "Remax One Wechat"
  }
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: "Remax One Ali"
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: "Remax One Toutiao"
  }
};

export const web: WebAppConfig = {
  pages,
  title: "Remax One Web"
};

import http from "./http";

let axiosApi = {
  // 登录
  Loginkey() {
    return http.get("http://localhost:3000/login/qr/key");
  },
  // 生成二维码
  LoginQr(e, q) {
    return http.get("http://localhost:3000/login/qr/create", {
      params: {
        key: e,
        qrimg: true,
        timestamp: q,
      },
    });
  },
  // 验证登录
  Logincheck(e) {
    return http.get("http://localhost:3000/login/qr/check", {
      params: {
        key: e,
      },
    });
  },
  // 获取用户状态
  LoginStatus(e) {
    return http.get("http://localhost:3000/login/status", {
      params: {
        cookie: e,
      },
    });
  },
  // 获取用户详细信息
  LoginUserInfo(e) {
    return http.get("http://localhost:3000/user/detail", {
      params: {
        uid: e,
      },
    });
  },

  // 首页数据

  // 首页数据
  Homepagedata(e) {
    return http.get("http://localhost:3000/personalized", {
      params: {
        limit: e,
      },
    });
  },
  // 歌单详情
  Homepagedatails(e, q) {
    return http.get("http://localhost:3000/playlist/track/all", {
      params: {
        id: e,
        limit: q,
      },
    });
  },
  // 歌单信息
  Homepagedatailsinfo(e) {
    return http.get("http://localhost:3000/playlist/detail", {
      params: {
        id: e,
      },
    });
  },
  // 显示歌曲名称
  Homepagedatailsname(e) {
    return http.get("http://localhost:3000/song/url", {
      params: {
        id: e,
      },
    });
  },
  // 新碟上架
  Homepagedatailsnew() {
    return http.get("http://localhost:3000/top/album", {
      params: {},
    });
  },
  // 退出
  Loginout() {
    return http.get("http://localhost:3000/logout");
  },
};
// 导出
export default axiosApi;

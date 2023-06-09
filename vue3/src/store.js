import Vuex from "vuex";
import persistedState from "vuex-persistedstate";
let store = new Vuex.Store({
  // 定义状态
  state: {
    // 登录状态
    loginStatus: false,
    // cookie
    cookie: "",
    // 用户信息
    userInfo: [],
    // 签到状态
    signStatus: false,
  },
  // 定义方法
  mutations: {
    // cookie
    setCookie(state, cookie) {
      state.cookie = cookie[0];
      state.loginStatus = cookie[1];
    },
    // setUserInfo 用户信息
    setUserInfo(state, e) {
      state.userInfo.push(e);
      console.log(state.userInfo);

    },
    // setLoginStatus 登录状态
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus;
      // 清空state
      if (loginStatus == false) {
        state.userInfo = [];
        state.cookie = "";
      }
    },
    // setSignStatus 签到状态
    setSignStatus(state, signStatus) {
      state.signStatus = signStatus;
    }
  },
  // 定义异步方法
  actions: {},
  // 定义计算属性
  getters: {},
  // 定义模块
  modules: {},
  // 插件
  plugins: [persistedState()],
});
export default store;

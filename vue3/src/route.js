import { createRouter, createWebHashHistory } from "vue-router";
let Mainpage = () => import("@/components/Mainpage.vue");
let Playlistdetails = () => import("@/components/Playlistdetails.vue");
let NotFound = () => import("@/components/NotFound.vue");

// 音乐人
// 下载客户端

let routes = [
  // 主页
  {
    path: "/",
    name: "Mainpage",
    component: Mainpage,
  },
  //   歌单详情
  {
    path: "/playlistdetails",
    name: "playlistdetails",
    component: Playlistdetails,
  },
  {
    path: "/NotFound",
    name: "NotFound",
    component: NotFound,
  },
  //   我的音乐
  {
    path: "/mymusic",
    name: "mymusic",
    // component: mymusic,
    // 重定向到404页面
    redirect: "/NotFound",
  },
  //   关注
  {
    path: "/follow",
    name: "follow",
    // component: follow,
    redirect: "/NotFound",
  },
  //   商城
  {
    path: "/shop",
    name: "shop",
    // component: shop,
    redirect: "/NotFound",
  },
  //   音乐人
  {
    path: "/musician",
    name: "musician",
    // component: musician,
    redirect: "/NotFound",
  },
  //   下载客户端
  {
    path: "/download",
    name: "download",
    // component: download,
    redirect: "/NotFound",
  },
  {
    path: "/ranking",
    name: "ranking",
    redirect: "/NotFound",
  },
  {
    path: "/songlist",
    name: "songlist",
    redirect: "/NotFound",
  },
  {
    path: "/anchor",
    name: "anchor",
    redirect: "/NotFound",
  },
  {
    path: "/singer",
    name: "singer",
    redirect: "/NotFound",
  },
  {
    path: "/newdisc",
    name: "newdisc",
    redirect: "/NotFound",
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});

<template>
    <!-- 导航栏 -->
    <el-container>
        <el-header style="padding: inherit;">
            <el-row>
                <el-col :span="6">
                    <RouterLink to="/" style="text-decoration: none;">
                        <div>
                            <img src="@/assets/logo.png" alt="">
                            <span>网易云音乐</span>
                        </div>
                    </RouterLink>
                </el-col>
                <el-col :span="7">
                    <ul>
                        <!--  -->
                        <li v-for="i in navList" :key="i.name"
                            :style="i.path == $route.path ? { 'background-color': '#000' } : ''">
                            <RouterLink :to="i.path" style="text-decoration: none;color: #ccc;">{{ i.name }}</RouterLink>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="11">
                    <div>
                        <el-input v-model="input" :prefix-icon="Search" placeholder="音乐/视频/电台/用户"></el-input>
                        <el-button type="primary" round>创作者中心</el-button>
                        <span class="Login" v-if="store.state.loginStatus == false" @click="Login">登录</span>
                        <el-dropdown v-else>
                            <!--判断是否为空,为空就显示默认 -->
                            <el-avatar :src=avatar :size="40" style="outline: none;" />
                            <template #dropdown class="dropdown">
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="Loginou">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                        <Login :isShow="isShow" @zi="zi" />
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <!-- 除了首页其余缩小 -->
        <el-footer :style="$route.path == '/' ? { 'height': '30px' } : { 'height': '4px' }">
            <ul>
                <li v-for="i in navList2" :key="i.name">
                    <RouterLink :to="i.path" style="text-decoration: none;color: #ccc;">{{ i.name }}</RouterLink>
                </li>
            </ul>
        </el-footer>
    </el-container>
</template>

<script>
import { ref, reactive} from 'vue'
import { Search } from "@element-plus/icons-vue";
import Login from "./Login.vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import axiosApi from '@/api/api';
export default {
    components: {
        Login
    },
    setup() {
        // 导航栏按钮
        let navList = reactive([
            {
                name: "发现",
                path: "/"
            },
            {
                name: "我的",
                path: "/mymusic"
            },
            {
                name: "关注",
                path: "/follow"
            },
            {
                name: "商城",
                path: "/shop"
            },
            {
                name: "音乐人",
                path: "/musician"
            },
            {
                name: "客户端",
                path: "/download"
            }
        ])
        // 推荐排行榜歌单主播电台歌手新碟上架
        let navList2 = reactive([
            {
                name: "推荐",
                path: "/"
            },
            {
                name: "排行榜",
                path: "/ranking"
            },
            {
                name: "歌单",
                path: "/songlist"
            },
            {
                name: "主播电台",
                path: "/anchor"
            },
            {
                name: "歌手",
                path: "/singer"
            },
            {
                name: "新碟上架",
                path: "/newdisc"
            }
        ])
        let input = ref("")
        let isShow = ref(false)
        let store = useStore()
        let router = useRouter()
        // 头像 判断是否为空
        let avatar = ref("")
        if (store.state.loginStatus==true) {
            avatar.value = store.state.userInfo[0].profile.avatarUrl
            console.log(store.state.userInfo);
        }
        // 关闭弹窗
        function zi(e) {
            isShow.value = e
        }

        // 打开弹窗
        function Login() {
            isShow.value = true
            document.body.style.overflow = "hidden"
        }
        // 返回首页
        function home() {
            router.push("/")
        }
        // 退出登录
        function Loginou() {
            axiosApi.Loginout().then(res => {
                console.log(res.data.code);
                if (res.data.code == 200) {
                    store.commit('setLoginStatus', false)
                    console.log(store.state.cookie);
                }
            })
        }

        return {
            navList,
            navList2,
            Search,
            input,
            Login,
            isShow,
            zi,
            store,
            home,
            Loginou, avatar,
        }
    }
}
</script>

<style lang="less">
.el-container {
    .el-header {
        height: 70px;
        background-color: #333;

        .el-row {
            height: 70px;

            // log
            &>.el-col:nth-child(1) {

                div {
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    // outline: 1px solid red;
                    margin-right: 10px;

                    img {
                        width: 34px;
                        height: 34px;
                    }

                    span {
                        color: #fff;
                        font-size: 24px;
                        font-weight: 100;
                        margin-left: 10px;
                    }
                }
            }

            // 导航按钮
            &>.el-col:nth-child(2) {

                height: 70px;
                // 溢出隐藏
                overflow: hidden;
                // outline: 1px solid red;
                // margin-left: 12px;

                &>ul {
                    height: 70px;
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #ccc;
                    // outline: 1px solid red;

                    &>li {
                        width: 300px;
                        padding: 0 10px;
                        height: 70px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover {
                            background-color: #000;
                        }
                    }
                }

            }

            // 搜索框
            &>.el-col:nth-child(3) {
                height: 70px;
                color: #fff;


                &>div {
                    height: 70px;
                    width: 340px;
                    // outline: 1px solid red;
                    display: flex;
                    // 分散对齐
                    justify-content: space-between;
                    align-items: center;
                    margin-left: 100px;

                    .el-input {
                        width: 160px;
                        color: #000;
                        font-size: 12px;

                        .el-input__wrapper {
                            border-radius: 32px;

                            &:hover {
                                border: none;
                                outline: none;
                                box-shadow: none;

                            }
                        }

                        .el-input__wrapper.is-focus {
                            // 取消box-shadow
                            box-shadow: none;

                        }

                    }

                    .el-button {
                        // 取消背景色
                        background-color: transparent;
                        color: #968888;
                        border-color: #968888;
                        font-size: 12px;

                        &:hover {
                            color: #dacbcb;

                            border-color: #dacbcb;
                        }
                    }

                    .Login {
                        font-size: 2px;
                        color: #968888;

                        &:hover {
                            text-decoration: underline;
                        }
                    }


                    /* 头像及下拉框的样式 */
                    .el-dropdown {
                        .el-dropdown-link {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 32px;
                            width: 32px;
                            border-radius: 50%;
                            overflow: hidden;
                            outline: 1px solid red;

                            img {
                                width: 32px;
                                height: 32px;
                            }
                        }

                        .el-dropdown-menu {
                            .el-dropdown-menu__item {
                                font-size: 12px;
                                color: #000;

                                &:hover {
                                    background-color: #000;
                                    color: #fff;
                                }
                            }

                        }
                    }



                }
            }
        }
    }


    .el-footer {
        height: 30px;
        background-color: #C20C0C;
        overflow: hidden;

        &>ul {
            margin: 0 auto;
            // 左移动
            margin-left: 378px;
            width: 500px;
            height: 30px;
            list-style: none;
            display: flex;
            justify-content: center;
            // 两端分散
            justify-content: space-between;
            align-items: center;

            // outline: 1px solid rgb(8, 4, 4);

            &>li {
                // 圆角
                border-radius: 15px;
                // width: 80px;
                padding: 0 14px;

                display: flex;
                align-items: center;
                justify-content: center;
                // background-color: #C20C0C;
                color: #F0F0F0;
                font-size: 12px;

                // outline: 1px solid rgb(8, 4, 4);
                &:nth-child(1) {
                    background-color: #9B0909;

                }

                &:hover {
                    background-color: #9B0909;
                }
            }
        }
    }

}
</style>
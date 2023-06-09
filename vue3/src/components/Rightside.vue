<template>
    <!-- 右侧信息 -->
    <el-container style="">
        <el-main style="padding: inherit;">
            <div class="Personallabel">
                <el-card>
                    <div v-if="store.state.loginStatus == true">
                        <div>
                            <div class="in">
                                <img :src="avatar">
                            </div>
                            <div class="mz">
                                <span>{{ username }}</span>
                                <el-button type="primary" size="mini" @click="ck">
                                    {{ store.state.signStatus == true ? '已签到' : '签到' }}
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            <div class="in">
                                <img src="" alt="" style="width: 100px;">
                            </div>
                            <div class="mz">
                                <span>请点击登录</span>
                                <el-button type="primary" size="mini" @click="Login">登录</el-button>
                                <Login :Logi="Logi" @zi2="zi2"></Login>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="Residentsinger">
            </div>
        </el-main>
    </el-container>
</template>

<script>
import Login from './Login.vue'
import { ref, reactive, onMounted, inject } from 'vue'
// vuex
import { useStore } from 'vuex'
export default {
    components: {
        Login
    },
    setup() {
        let store = useStore()
        let qd = ref(false)
        // 头像 判断是否为空
        let avatar = ref()
        let username = ref()
        if (store.state.loginStatus == true) {
            avatar = store.state.userInfo[0].profile.avatarUrl
            username = store.state.userInfo[0].profile.nickname
        } else {
            avatar = ''
            username = ''
        }

        // 签到
        function ck() {
            qd.value = true
            if (qd.value == true) {
                alert('已签到')
                store.commit('setSignStatus', qd.value)
            }
        }
        // 登录
        let Logi = ref(false)
        function Login() {
            Logi.value = true
        }
        // 登录成功
        function zi2() {
            Logi.value = false
        }
        return {
            store, avatar, username, ck, qd, Login, Logi, zi2
        }
    }
}
</script>
<style>
.el-card__body {
    padding: 0px;
}
</style>
<style lang="less" scoped>
.el-container {
    width: 268px;

    .el-main {

        .Personallabel {

            .el-card {
                height: 100%;

                div {
                    width: 100%;
                    height: 100px;
                    // outline: 1px solid #dc2929;

                    &>:nth-child(1) {
                        // outline: 1px solid #dc2929;
                        // 阴影
                        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                        display: flex;
                        justify-content: space-between;

                        &>.in {
                            width: 100px;
                            height: 100px;
                            // outline: 1px solid #dc2929;

                            img {
                                // width: 100%;
                                // height: 100%;
                                // border-radius: 50%;
                                margin: 10px;
                            }
                        }

                        &>.mz {
                            margin: 10px;
                            // 居中
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            span {


                                white-space: nowrap;
                                font-size: 8px;
                                font-weight: bold;
                                // margin-top: 26px;
                                color: #333;

                            }

                            .el-button {
                                width: 80%;
                                // 内边距
                                padding: 0px;
                                font-size: 16px;
                                margin-top: 12px;
                            }
                        }
                    }
                }
            }

        }

        .Residentsinger {
            outline: 1px solid #dc2929;

        }
    }
}
</style>
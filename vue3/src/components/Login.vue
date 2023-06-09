<template>
    <!--登录弹框 -->
    <teleport to="body">
        <div v-if="isShow || Logi == true" class="mask">
            <div class="dialog">
                <div class="title">
                    <span>登录</span>
                    <el-button :icon="Close" class="gb" @click="ck"></el-button>
                </div>
                <!-- 二维码 -->
                <div class="er">
                    <span>扫码登录</span>
                    <img :src="QRcode" alt="">
                    <!-- 登录 -->
                    <el-button text @click="Login">登录</el-button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import { Close } from '@element-plus/icons-vue'
import axiosApi from '@/api/api'
import { ref, reactive, onMounted, provide, computed, watch } from 'vue'
import { useStore } from "vuex"
export default {
    props: ["isShow", "Logi"],
    setup(props, { emit }) {
        // 二维码
        let QRcode = ref('')
        // key
        let key = ref('')

        // vuex
        let store = useStore()
        // 监听多个值
        watch([() => props.isShow, () => props.Logi], ([newVal, newVal2]) => {
            if (newVal || newVal2 == true) {
                axiosApi.Loginkey().then(res => {
                    key.value = res.data.data.unikey
                    let time = new Date().getTime()
                    axiosApi.LoginQr(key.value, time).then(res => {
                        QRcode.value = res.data.data.qrimg
                    })
                })
            } else {
                clearInterval(timer)
            }
        })
        // 关闭弹窗
        function ck() {
            emit('zi', false)
            document.body.style.overflow = 'auto'
            emit('zi2', false)
        }
        // 登录
        let timer
        function Login() {
            // 轮询
            timer = setInterval(() => {
                axiosApi.Logincheck(key.value).then(res => {
                    console.log(res.data);
                    if (res.data.code == 803) {
                        clearInterval(timer)
                        store.commit('setCookie', [res.data.cookie, true])
                        axiosApi.LoginStatus(store.state.cookie).then(res => {

                            axiosApi.LoginUserInfo(res.data.data.account.id).then(res => {
                                store.commit('setUserInfo', res.data)
                            })
                            ck()
                        })
                    }
                })
            }, 3000)
        }

        return {
            Close,
            ck,
            Login,
            QRcode,
            store,
        }
    }
}
</script>



<style  lang="less" scoped>
/*  遮罩层 */
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 弹窗 */

    .dialog {
        width: 35%;
        height: 52%;
        background-color: #fff;
        border-radius: 4px;


        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            color: #fff;
            padding: 0 8px 0 18px;
            background-color: black;
            border-radius: 4px 4px 0 0;
            font-size: 14px;
            // 字体加粗
            font-weight: bold;

            .gb {
                background-color: transparent;
                border: none;
                color: #fff;

                &:hover {
                    color: #fff;
                    background-color: black;

                }

                &:focus {
                    color: #fff;
                    background-color: black;

                }
            }
        }

        .er {
            width: 200px;
            // height: 100%;
            // outline: 1px solid red;
            margin: 10px auto;
            text-align: center;

            span {
                display: block;
                margin-bottom: 20px;
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }

            img {
                width: 100%;
            }

            .el-button {
                width: 100%;
                margin-top: 20px;
                background-color: #c20c0c;
                color: #fff;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                font-weight: bold;

                &:hover {
                    background-color: #c20c0c;
                    color: #fff;
                }

                &:focus {
                    background-color: #c20c0c;
                    color: #fff;
                }
            }
        }
    }
}
</style>
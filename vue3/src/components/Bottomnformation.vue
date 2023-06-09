<template>
    <el-container>
        <el-header style="padding: inherit;">
            <div>
                <ul>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> 音乐开放平台</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> 云村交易所</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> Amped Studio</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> 用户认证</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> 音乐交易平台</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> 赞赏</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="@/assets/foot_enter_new2.png" alt="" style="">
                            </div>
                            <span> 视频激励</span>
                        </div>
                    </li>

                </ul>
            </div>
        </el-header>
        <el-main style="padding: inherit;">
            <div>
                <div>
                    <ul>
                        <li v-for="item in state" :key="item" v-if="item !== '|'">{{ item }}</li>
                        <span v-if="i == '|'">{{ i }}</span>

                    </ul>
                </div>
                <div>
                    <span>廉正举报</span>
                    <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
                    <span>客服热线：95163298</span>
                </div>
                <div>
                    <!-- 互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18  工业和信息化部备案管理系统网站 -->
                    <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
                    <span>增值电信业务经营许可证：浙B2-20150198 </span>
                    <span>
                        <a href="https://beian.miit.gov.cn/#/Integrated/index"
                            target="_blank">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
                    </span>

                </div>
                <div>
                    <span>网易公司版权所有©1997-2023杭州乐读科技有限公司运营：
                        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"> 浙网文[2021]1186-054号</a>
                    </span>
                    <div>
                        <img src="@/assets/police.png" alt="">
                    </div>
                    <span>浙公网安备 33010902002564号</span>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
export default {
    setup() {
        // 服务条款| 隐私政策| 儿童隐私政策| 版权投诉| 投资者关系| 广告合作 | 联系我们

        // 音乐开放平台,云村交易所,Amped Studio,用户认证,音乐交易平台,赞赏,视频激励
        let iT = ref(["音乐开放平台", "云村交易所", "Amped Studio", "用户认证", "音乐交易平台", "赞赏", "视频激励"])
        return {
            iT
        }
    }
}
</script>

<style lang="less" scoped>
.el-container {
    height: 260px;
    outline: 1px solid #c6c4c4;
    background-color: #f2f2f2;

    .el-header {
        width: 100%;
        height: 80px;
        line-height: 50px;
        text-align: center;
        // outline: 1px solid rgb(0, 0, 0);
        background-color: #f2f2f2;
        margin-top: 42px;
        font-size: 20px;

        &>div {
            width: 52%;
            height: 100%;
            margin: 0 auto;

            &>ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                // outline: 1px solid red;
                // 第一个li
                &>li:nth-child(1) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;
                                // 1
                                transform: translateX(-152px) translateY(-3px);

                                &:hover {
                                    transform: translateX(-2px) translateY(-103px)
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }

                &>li:nth-child(2) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;

                                transform: translateX(-2px) translateY(-153px);

                                &:hover {
                                    transform: translateX(-52px) translateY(-153px)
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }

                &>li:nth-child(3) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;

                                transform: translateX(-2px) translateY(-53px);






                                &:hover {
                                    transform: translateX(-52px) translateY(-2px)
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }

                &>li:nth-child(4) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;

                                transform: translateX(-52px) translateY(-53px);







                                &:hover {
                                    transform: translateX(-102px) translateY(-2px)
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }

                &>li:nth-child(5) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;

                                transform: translateX(-102px) translateY(-103px);





                                &:hover {
                                    transform: translateX(-2px) translateY(-3px)
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }

                &>li:nth-child(6) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;

                                transform: translateX(-152px) translateY(-103px);







                                &:hover {
                                    transform: translateX(-52px) translateY(-103px);
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }

                &>li:nth-child(7) {
                    width: 100px;
                    height: 100%;
                    // background-color: #d32929;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    // 取消间距
                    margin: 0;
                    color: #656464;

                    &>div {
                        width: 100%;
                        height: 100px;
                        // overflow: hidden;

                        &>div {
                            width: 45px;
                            height: 45px;
                            margin: 0 auto;
                            // 溢出隐藏
                            overflow: hidden;

                            &>img {
                                width: 200px;

                                transform: translateX(-152px) translateY(-53px);






                                &:hover {
                                    transform: translateX(-102px) translateY(-53px);
                                }
                            }

                            &>span {
                                width: 100px;

                            }
                        }


                    }

                }
            }
        }
    }

    .el-main {
        margin-top: 30px;
        height: 206px;
        // background-color: #ec0f0f;
        // 向上移动
        transform: translateY(-20px);

        &>div {
            width: 60%;
            height: 100%;
            // background-color: aqua;
            margin: 0 auto;

            &>:nth-child(1) {
                width: 60%;
                height: 30px;
                margin: 0 auto;
                // background-color: #d32929;

                &>ul {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    // align-items: center;

                    &>li {
                        height: 100%;
                        // background-color: #d32929;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 12px;
                        // 取消间距
                        margin: 0;
                        color: #656464;
                        // outline: 1px solid red;

                        &:hover {
                            // 下划线
                            text-decoration: underline;
                        }
                    }
                }
            }

            &>:nth-child(2) {
                // outline: 1px solid red;
                font-size: 12px;
                color: #656464;
                display: flex;
                justify-content: center;

                &>:nth-child(1) {
                    &:hover {
                        text-decoration: underline;
                    }
                }

                &>span {
                    margin-right: 12px;

                }


            }

            &>:nth-child(3) {
                width: 90%;
                margin: 0 auto;
                // outline: 1px solid red;
                font-size: 12px;
                color: #656464;
                display: flex;
                justify-content: space-around;
                margin-top: 10px;

                &>:nth-child(3) {
                    &>a {
                        color: #656464;
                        // 取消下划线
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                }
            }

            &>:nth-child(4) {
                width: 73%;
                margin: 0 auto;
                // outline: 1px solid red;
                font-size: 12px;
                color: #656464;
                display: flex;
                justify-content: space-around;
                margin-top: 10px;

                &>:nth-child(1) {
                    &>a {
                        color: #656464;
                        // 取消下划线
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                &>:nth-child(2) {
                    width: 15px;
                    height: 15px;

                    &>img {
                        width: 100%;
                        height: 100%;
                    }
                }

                &>:nth-child(3) {
                    &:hover {
                        text-decoration: underline;
                    }
                }

            }
        }
    }

}</style>
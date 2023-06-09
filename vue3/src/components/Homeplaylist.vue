<template>
    <el-container>
        <el-header>
            <labeK :hotRecommend="hotRecommend" />
        </el-header>
        <!-- 歌单 -->
        <el-main style="padding: inherit;">
            <el-card>
                <div class="texTT">
                    <div v-for="o in hotRecommendList" :key="o.id" @click="playlistdetails(o.id)"
                        style="width: 140px;height: 200px;margin-left: 16px;margin-top: 10px;">
                        <div style="width: 140px;height: 140px;">
                            <img :src="o.picUrl" alt="" style="width: 100%;">
                            <div>
                                <div class="playCountl">
                                    <el-icon>
                                        <Headset />
                                    </el-icon>
                                    <i> {{ o.playCount }}</i>
                                </div>
                                <div class="playCountr">
                                    <el-icon>
                                        <VideoPlay />
                                    </el-icon>
                                </div>
                            </div>
                        </div>
                        <span>
                            {{ o.name }}
                        </span>
                    </div>
                </div>
            </el-card>


        </el-main>
        <!-- 底部信息 -->
    </el-container>
</template>

<script>
import labeK from '@/components/label.vue';
import axiosApi from '@/api/api';
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { Headset, VideoPlay, Right } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
export default {
    components: {
        Headset, VideoPlay, Right, labeK
    },
    props: ["hotRecommendList", "hotRecommend"],
    setup(props) {
        // 热门推荐华语 | 流行 | 摇滚 | 民谣 | 电子
        let hotRecommend = props.hotRecommend
        // 热门推荐
        let hotRecommendList = props.hotRecommendList
        const router = useRouter()
        // 歌单详情
        function playlistdetails(id) {
            router.push({
                path: '/playlistdetails',
                query: {
                    id: id
                }
            })

        }
        return {
            hotRecommend,
            hotRecommendList,
            playlistdetails
        }
    }
}
</script>

<style lang="less" scoped>
.el-container {
    width: 772px;
    margin-top: 26px;
    // 背景阴影
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    .el-header {
        height: 40px;
        background-color: transparent;
        margin-top: 16px;
    }

    .el-main {


        .el-card {
            border: none;
            margin: 0 auto;
            width: 772px;


            .texTT {

                width: 88%;
                margin: 0 auto;
                height: 420px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                // margin-top: 10px;
                // outline: 1px solid #c93737;

                &>div {

                    font-size: 12px;
                    // 字体间距
                    letter-spacing: 1px;

                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }

                    &>div {
                        &>div {
                            // 背景颜色
                            background-color: #000000;
                            color: #fff;
                            // 透明度
                            opacity: 0.8;
                            margin-top: -23px;
                            display: flex;
                            height: 20px;
                            justify-content: space-between;
                            align-items: center;
                            // 文字上下居中
                            line-height: 20px;
                            font-size: 12px;

                            &>.playCountl {
                                height: 100%;
                                line-height: 20px;

                            }

                            &>.playCountr {
                                // outline: 1px solid #dc2929;
                                line-height: 20px;

                                margin-right: 6px;

                                // 取消超链接下划线
                                &> {
                                    height: 100%;
                                    text-decoration: none;
                                    color: #999898;

                                    &:hover {
                                        color: #fff;
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }
                    }

                    &>a {
                        text-decoration: none;
                        color: #262424;
                        font-size: 12px;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

            }
        }
    }

    .w {
        width: 269px;
        color: #262424;
        outline: 1px solid #262424;
    }
}
</style>
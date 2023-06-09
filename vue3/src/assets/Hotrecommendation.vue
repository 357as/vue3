<template>
    <el-container>
        <el-main style="padding: inherit;">
            <div class="qb">
                <div class="q">
                    <el-card class="box-card">
                        <div class="card-header">
                            <div>
                                <div
                                    style="outline: 6px solid #C10D0C;width: 6px;height: 6px;border-radius: 50%;margin-left: 10px;">
                                </div>
                                <div style="margin-left: 13px;">
                                    <span v-for="o in hotRecommend" :key="o">
                                        <a v-if="o != '|'" href="#">{{ o
                                        }}</a>
                                        <span class="line" v-else>{{ o }}</span>
                                    </span>
                                </div>
                            </div>
                            <el-button text style="color: #333;font-size: 12px;">更多
                                <el-icon style="color: #C10D0C;margin-left: 2px;font-size: 12px;">
                                    <Right />
                                </el-icon>
                            </el-button>
                        </div>
                        <div class="texTT"
                            style="display: flex;flex-wrap: wrap;justify-content: space-between;margin-top: 10px;">
                            <div v-for="o in hotRecommendList" :key="o.id"
                                style="width: 140px;height: 200px;margin-left: 10px;margin-top: 10px;">
                                <div style="width: 140px;height: 140px;">
                                    <a href="#">
                                        <img :src="o.picUrl" alt="" style="width: 100%;">
                                    </a>
                                    <div>
                                        <i> {{ o.playCount }}</i>
                                    </div>
                                </div>
                                <a href="#">
                                    <span>
                                        {{ o.name }}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </el-card>

                </div>
                <div class="w">
                    123
                </div>
            </div>

        </el-main>
    </el-container>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { Delete, Edit, Right, Share, Upload } from '@element-plus/icons-vue'

export default {
    components: {
        Right
    },
    props: ["hotRecommend", "hotRecommendList"],
    setup(props) {
        // 热门推荐华语 | 流行 | 摇滚 | 民谣 | 电子
        let hotRecommend = props.hotRecommend
        // 热门推荐
        let hotRecommendList = props.hotRecommendList
        return {
            hotRecommend,
            hotRecommendList,
            Right
        }
    }
}
</script>

<style lang="less" scoped>
.el-container {

    .el-main {
        // outline: 1px solid #dc2929;

        .qb {
            display: flex;
            width: 1042px;
            height: 100%;
            margin: 0 auto;
            margin-right: 197px;
            // background-color: aqua;

            .q {
                width: 772px;
                color: #dc2929;
                // outline: 1px solid #dc2929;

                .el-card {
                    box-shadow: none;
                    outline: 1px solid #dc2929;

                    .card-header {
                        // 两端对齐
                        display: flex;
                        justify-content: space-between;
                        // 下边框
                        border-bottom: 2px solid #C10D0C;
                        // 下边框加粗
                        border-bottom-width: 3px;

                        div {
                            // width: 48%;
                            display: flex;
                            // 两端对齐
                            justify-content: space-between;
                            align-items: center;
                            // outline: 1px solid #dc2929;


                            span {
                                // outline: 1px solid #dc2929;

                                font-size: 14px;

                                .line {
                                    margin: 10px 10px;
                                    color: #ccc;

                                }

                                &:nth-child(1) a {
                                    text-decoration: none;
                                    font-size: 22px;
                                    color: #262424;

                                }

                                // 设置其余
                                &:nth-child(n+2) a {
                                    color: #262424;
                                    text-decoration: none;
                                    font-size: 12px;
                                    margin-left: 10px;

                                    &:hover {
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }

                        .el-button {
                            background-color: #fff;

                            &:hover {
                                background-color: #fff;
                                text-decoration: underline;
                            }
                        }
                    }

                    .texTT {
                        // outline: 1px solid #dc2929;

                        &>div {

                            &>div {

                                &>div {
                                    margin-top: -24px;
                                    color: #fff;
                                    background-color: #000;
                                    opacity: 0.8;
                                }


                            }

                            &>a {
                                //  取消a标签下划线
                                text-decoration: none;
                                color: #262424;
                                font-size: 12px;
                                margin-top: 10px;
                                display: block;
                                width: 100%;
                                height: 40px;
                                overflow: hidden;
                                text-overflow: ellipsis;

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

    }
}
</style>
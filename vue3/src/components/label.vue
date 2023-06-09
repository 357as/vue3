<template>
    <div class="card-header">
        <div>
            <div style="width: 18px;height: 18px;border-radius: 50%;border: 4px solid #dc2929;"></div>
            <div>
                <span v-for="o in hotRecommend" :key="o">
                    <a v-if="o != '|'" href="#">{{ o
                    }}</a>
                    <span class="line" v-else>{{ o }}</span>
                </span>
            </div>
        </div>
        <el-button text>更多
            <el-icon>
                <Right />
            </el-icon>
        </el-button>
    </div>
</template>

<script>
import axiosApi from '@/api/api';
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { Right } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
export default {
    components: {
        Right
    },
    props: ["hotRecommendList", "hotRecommend"],
    setup(props) {
        let hotRecommend = props.hotRecommend


        return {
            hotRecommend
        }
    }
}
</script>

<style lang="less" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e31616;
    border-bottom-width: 3px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        // outline: 1px solid #dc2929;

        div {
            margin-left: 10px;

            span {
                // outline: 1px solid #dc2929;

                font-size: 14px;

                .line {
                    margin: 8px 8px;
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
    }

    .el-button {
        background-color: #fff;
        font-size: 12px;

        .el-icon {
            // 左边距
            margin-left: 6px;
            font-size: 12px;
            color: #dc2929;
        }

        &:hover {
            background-color: #fff;
            text-decoration: underline;
        }
    }
}
</style>
<template>
    <el-button v-if="scrollTop" @click="ck" style="padding: none;">
        <div>
            <div style="width: 100%;">
                <el-icon>
                    <ArrowUp />
                </el-icon>
            </div>
            <div style="width: 100%">
                <span>Top</span>
            </div>
        </div>

    </el-button>
</template>

<script>
import { ArrowUp } from '@element-plus/icons-vue';
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue';
export default {
    components: {
        ArrowUp
    },
    setup() {
        let scrollTop = ref(false);
        // 监听滚动条
        watch(() => {
            window.onscroll = function () {
                // console.log(document.documentElement.scrollTop);
                if (document.documentElement.scrollTop == 0) {
                    scrollTop.value = false;
                } else {
                    scrollTop.value = true;
                }
            }
        })
        function ck() {
            document.documentElement.scrollTop = 0;
            
        }

        return {
            scrollTop, ck
        }
    }
}
</script>

<style lang="less" scoped>
.el-button {
    // 绝对定位
    position: fixed;
    color: rgb(162, 162, 162);
    background-color: rgb(233, 233, 233);
    margin-top: 200px;
    margin-left: 20px;
    width: 50px;
    height: 50px;

    div {
        // 上下间距
        margin: 5px 0;
    }

    &:hover {
        background-color: rgb(209, 209, 209);
        color: rgb(162, 162, 162);
        outline: none;
        border: none;
    }
    &:active {
        background-color: rgb(209, 209, 209);
        color: rgb(162, 162, 162);
    }
}
</style>
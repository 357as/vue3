<template>
    <el-container>
        <el-header>
            <labeK :hotRecommend="hotRecommend" />
        </el-header>
        <el-main>
            <div class="lbt">
                <div class="zy">
                    <div @click="jian()">
                        <el-icon style="margin-top: 18px;">
                            <ArrowLeft />
                        </el-icon>
                    </div>
                    <div @click="jia()">
                        <el-icon style="margin-top: 18px;">
                            <ArrowRight />
                        </el-icon>
                    </div>
                </div>
                <div class="tp">
                    <div v-for="i in addEventListener[ee]" :key="i">
                        <img :src="i.blurPicUrl" alt="">
                        <span>
                            {{ i.name }}
                        </span>
                    </div>
                </div>
            </div>

        </el-main>
        <!-- 底部信息 -->
    </el-container>
</template>

<script>
import labeK from '@/components/label.vue';
import axiosApi from '@/api/api';
import { ref, reactive, onMounted, watch, computed } from 'vue';
import { Right, ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
export default {
    components: {
        labeK,
        Right,
        ArrowLeft,
        ArrowRight
    },
    props: ["hotRecommendList", "hotRecommend"],
    setup(props) {

        let hotRecommend = props.hotRecommend
        let hotRecommendList = props.hotRecommendList
        let newdiscontheshelf = reactive([])
        let ee = ref(0)
        const router = useRouter()
        let addEventListener = computed(() => {
            return JSON.parse(JSON.stringify(newdiscontheshelf))
        })
        onMounted(() => {
            axiosApi.Homepagedatailsnew().then(res => {
                // console.log(res.data.weekData);
                // 循环遍历分割数组，每个数组中只有5个元素
                let arr = []
                for (let i = 0; i < res.data.weekData.length; i += 5) {
                    arr.push(res.data.weekData.slice(i, i + 5))
                }
                newdiscontheshelf.push(...arr)
            }
            )
        })

        function jian() {
            if (ee.value == 0) {
                ee.value = 0
            } else {
                ee.value--
            }
        }
        function jia() {
            if (ee.value == newdiscontheshelf.length - 1) {
                ee.value = newdiscontheshelf.length - 1
            } else {
                ee.value++
            }
        }
        return {
            hotRecommend,
            hotRecommendList,
            addEventListener,
            jian,
            jia,
            ee
        }
    }
}
</script>

<style lang="less" scoped>
.el-container {
    width: 772px;
    margin-top: 26px;
    .el-header {
        height: 30px;
        background-color: transparent;

    }

    .el-main {
        width: 772px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
        margin-top: 26px;

        &>.lbt {
            margin-top: 40px;
            height: 110px;

            &>.zy {
                display: flex;
                justify-content: space-between;

                &>div {
                    width: 30px;
                    height: 60px;
                    color: #858585;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 999;



                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            &>.tp {
                position: relative;
                top: -100px;
                display: flex;
                justify-content: center;
                align-items: center;
                // outline: 1px solid #dc2929;
                margin-top: 0px;
                // 阴影
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);

                &>div {
                    width: 118px;
                    height: 150px;
                    // background-color: #aeaeae;
                    margin: 0 10px;

                    &:hover {
                        cursor: pointer;
                        // background-color: #dcdcdc;
                    }

                    img {
                        width: 100%;
                        // height: 100%;
                    }

                    span {
                        display: block;
                        width: 100%;
                        height: 28px;
                        line-height: 30px;
                        text-align: center;
                        color: #fff;
                        background-color: rgba(0, 0, 0, .5);
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 4px;
                    }
                }
            }
        }
    }

}
</style>
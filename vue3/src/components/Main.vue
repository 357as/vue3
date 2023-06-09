<template>
    <el-container>
        <el-main style="padding: inherit;">
            <el-row>
                <el-col :span="18" style="margin-left: 281px;display: flex; ">
                    <div>
                        <Homeplaylist :hotRecommendList="hotRecommendList" :hotRecommend="hotRecommend" />
                        <Newdiscontheshelf :hotRecommendList="hotRecommendList2" :hotRecommend="hotRecommend2" />
                    </div>
                    <div>
                        <Rightside />
                    </div>
                    <div>
                        <top style="z-index: 999;" />
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Homeplaylist from './Homeplaylist.vue'
import top from './top.vue'
import Rightside from './Rightside.vue'
import axiosApi from '@/api/api';
import { ref, reactive, onMounted } from 'vue';
import Newdiscontheshelf from './Newdiscontheshelf.vue';
export default {
    components: {
        Homeplaylist,
        top,
        Rightside,
        Newdiscontheshelf
    },
    setup() {
        let hotRecommend = ref(["热门推荐", "华语", "|", "流行", "|", "摇滚", "|", "民谣", "|", "电子"])
        let hotRecommend2 = ref(["新碟上架"])
        let hotRecommendList = reactive([])
        let hotRecommendList2 = reactive([])
        onMounted(() => {
            axiosApi.Homepagedata(8).then(res => {
                hotRecommendList.push(...res.data.result)
            })
        });
        return {
            hotRecommend,
            hotRecommendList,
            hotRecommend2,
            hotRecommendList2
        }
    }
}
</script>

<style lang="less" scoped></style>

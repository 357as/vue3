<template>
    <div style="margin-left: 382px;font-size: 20px;line-height: 28px;">
        <span>歌曲列表</span>
    </div>
    <el-table :data="Songinformation" v-loading="loading" style="margin: 0 auto;font-size: 16px;width: 60%;height: 100vh;"
        :row-class-name="rowClassName" align="center">
        <el-table-column width="100" align="center" label="编号">
            <template #default="scope">
                <span style="margin-left: 10px">{{ scope.$index + 1 }}</span>
            </template>
        </el-table-column>
        <el-table-column width="200" prop="name" label="歌曲标题">
            <template #default="scope">
                <span @click="ck(scope.$index)">{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column width="180" prop="singer" label="歌手"></el-table-column>
        <el-table-column width="200" prop="album" label="专辑"></el-table-column>
    </el-table>
    <!-- 播放音乐 -->
    <div class="playbar" @mouseover="showPlaybar = true" @mouseout="showPlaybar = false"
        :style="{ height: showPlaybar ? '60px' : '3px' }" style="transition: height 0.5s;">
        <playbar :audioUrl="audioUrl" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import playbar from '@/components/playbar.vue'
import { ref, reactive, onMounted } from 'vue'
import axiosApi from '@/api/api'
export default {
    components: {
        playbar
    },
    setup() {
        const loading = ref(true)
        const route = useRoute()
        // 歌曲信息
        let Songinformation = reactive([])
        // 音频播放地址
        let audioUrl = ref([])
        let showPlaybar = ref(false);
        // 获取歌单详情
        onMounted(() => {
            Songlistdetails()

        })
        // 获取歌单详情
        function Songlistdetails() {
            axiosApi.Homepagedatails(route.query.id, 20).then(res => {
                for (let i = 0; i < res.data.songs.length; i++) {
                    Songinformation.push({
                        id: res.data.songs[i].id,
                        name: res.data.songs[i].name,
                        album: res.data.songs[i].al.name,
                        singer: res.data.songs[i].ar[0].name
                    })
                }
            })
            loading.value = false
        }
        // 点击播放音乐
        function ck(e) {
            console.log(e);
            axiosApi.Homepagedatailsname(Songinformation[e].id).then(res => {
                audioUrl.value = []
                audioUrl.value = res.data.data[0].url
            })
        }

        return {
            route,
            Songinformation,
            ck,
            audioUrl, showPlaybar, loading
        }
    }
}
</script>

<style lang="less" scoped>
.playbar {
    // 音乐播放器 在底部
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #c32c2c;
    z-index: 999;
}
</style>
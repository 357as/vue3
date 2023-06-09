<template>
    <!-- 头部 -->
    <Navigationbar />
    <!-- 主体 -->
    <Playlistdetails2 />
    <!-- 底部信息 -->
    <Bottomnformation />
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Playlistdetails2 from './Playlistdetails2.vue'
import Navigationbar from './Navigationbar.vue';
import Bottomnformation from './Bottomnformation.vue';
export default {
    components: {
        Navigationbar,
        Playlistdetails2,
        Bottomnformation
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>
<template>
    <el-container>
        <el-header>
            <Navigationbar />
            <rotograph />
        </el-header>
        <el-main>
            <Main />
        </el-main>
        <el-footer>
            <Bottomnformation />
        </el-footer>
    </el-container>
    <!-- 动态高度，鼠标移动到底部，显示播放器 ,鼠标移动到播放器上，不隐藏 -->
    <div class="playbar" @mouseover="showPlaybar = true" @mouseout="showPlaybar = false"
        :style="{ height: showPlaybar ? '60px' : '3px' }" style="transition: height 0.5s;">
        <playbar />
    </div>
</template>

<script>
import Navigationbar from './Navigationbar.vue';
import rotograph from './rotograph.vue';
import Main from './Main.vue';
import Bottomnformation from './Bottomnformation.vue';
import playbar from './playbar.vue';
import { ref } from 'vue';
export default {
    components: {
        Navigationbar,
        rotograph,
        Main,
        Bottomnformation,
        playbar
    },
    setup() {
        // 播放器的显示
        let showPlaybar = ref(false);


        return {
            showPlaybar
        }
    }
}
</script>

<style lang="less" scoped>
// 版心 居中
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.el-container {

    // width: 100%;
    .el-header {
        // 下边距
        height: 400px;
    }

    .el-main {}

    .el-footer {
        height: 260px;
        margin-top: 40px;
        background-color: aqua;

    }
}

.playbar {
    // 音乐播放器 在底部
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;

    z-index: 999;
}
</style>
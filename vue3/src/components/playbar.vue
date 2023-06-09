<template>
    <el-container>
        <el-header>
            <audio class="ys" :src="audioUrl" controls="controls" autoplay="autoplay" loop="loop" />
        </el-header>
    </el-container>
</template>

<script>
export default {
    props: ['audioUrl'],
    setup() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.el-container {
    .el-header {
        height: 60px;
        background-color: #B3B3B3;
        text-align: center;
        line-height: 60px;
        // 音乐播放器
        .ys {
            width: 60%;
            height: 100%;
            background-color: #B3B3B3;
            

        }
    }
}
</style>
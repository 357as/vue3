<template>
    <el-container>
        <!-- 轮播图 -->
        <el-main style="padding: inherit;">
            <el-carousel :interval="4000" height="300px" style="width: 100%;" arrow="always">
                <el-carousel-item v-for="item in imgList" :key="item" style="width: 100%;">
                    <div :style="{ backgroundImage: 'url(' + item.bgUrl + ')' }"
                        style="width: 100%;height: 100%;background-size: cover;overflow: hidden;">
                        <img :src="item.imgUrl" alt="" style="height: 100%;margin-left: 280px;">
                    </div>
                </el-carousel-item>
            </el-carousel>
            <!-- 绝对定位 -->
            <div
                style="position: absolute;top: 250px;left: 1187px;transform: translate(-50%,-50%);z-index: 999;height: 300px;">
                <img src="../assets/download.png" alt="" style="height: 100%;">
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
export default {
    setup() {
        // 图片地址 reactive require
        let imgList = reactive([
            {
                imgUrl: require('../assets/轮播图1.jpg'),
                bgUrl: require('../assets/背景图1.jpg')
            },
            {
                imgUrl: require('../assets/轮播图2.jpg'),
                bgUrl: require('../assets/背景图2.jpg')
            },
            {
                imgUrl: require('../assets/轮播图3.jpg'),
                bgUrl: require('../assets/背景图3.jpg')
            },
            {
                imgUrl: require('../assets/轮播图4.jpg'),
                bgUrl: require('../assets/背景图4.jpg')
            },
            {
                imgUrl: require('../assets/轮播图5.jpg'),
                bgUrl: require('../assets/背景图5.jpg')
            },
            {
                imgUrl: require('../assets/轮播图6.jpg'),
                bgUrl: require('../assets/背景图6.jpg')
            },
            {
                imgUrl: require('../assets/轮播图7.jpg'),
                bgUrl: require('../assets/背景图7.jpg')
            },
            {
                imgUrl: require('../assets/轮播图8.jpg'),
                bgUrl: require('../assets/背景图8.jpg')
            },
            {
                imgUrl: require('../assets/轮播图9.jpg'),
                bgUrl: require('../assets/背景图9.jpg')
            }
        ])
        return {
            imgList
        }
    }
}
</script>

<style lang="less">
.el-container {
    // height: 40vh;

    .el-main {


        // 取消圆角
        .el-carousel__arrow {
            border-radius: 0;
            width: 30px;
            height: 60px;
            background-color: transparent;
            font-size: 40px;

            // 取消hover效果
            &:hover {
                background-color: #3333338b;
            }

        }

        // 左箭头
        .el-carousel__arrow--left {
            left: 220px;
        }

        // 右箭头
        .el-carousel__arrow--right {
            right: 160px;
        }

        .el-carousel__indicators--horizontal {
            left: 43%;
        }

        .el-carousel__button {
            // 圆点
            border-radius: 50%;
            width: 6px;
            height: 6px;
            background-color: #fff;
            margin-left: 10px;

        }
    }
}
</style>
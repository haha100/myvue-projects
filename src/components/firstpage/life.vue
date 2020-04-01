<template>
    <div class="life-wrap">
        <!-- 轮播图上方导航栏 -->
        <ul class="nav">
            <li><a href="#" class="yellow">美团外卖</a></li>
            <li><a href="#" class="red">猫眼电影</a></li>
            <li><a href="#" class="red">美团酒店</a></li>
            <li><a href="#" class="yellow">民宿/公寓</a></li>
            <li><a href="#" class="orange">商家入驻</a></li>
            <li><a href="#" class="red">美团公益</a></li>
        </ul>
        <!-- 轮播图的第一行和右边登录注册区域 -->
        <el-row class="carousel-wrap">
            <!-- 轮播图区域 -->
            <el-col class="carousel" :span="14">
                <my-carousel />
            </el-col>
            <!-- 轮播图右边休闲生活图片区域 -->
            <el-col class="img" :span="4">
                <a href="#">
                    <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg">
                </a>
            </el-col>
            <!-- 登录注册区域 -->
            <el-col class="login-register" :span="6">
                <div class="headPhoto">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
                </div>
                <p>Hi! {{ $store.state.userName ? $store.state.userName : "你好"}}</p>
                <div v-if="!$store.state.userName">
                <router-link :to="{name: 'register'}">注册</router-link>
                <router-link :to="{name: 'login'}" class="register">立即登录</router-link>
                <router-view />
                </div>
            </el-col>
        </el-row>
        <!-- 轮播图第二行和右边二维码区域 -->
        <el-row class="app-wrap">
            <el-col class="liveHotel" :span="6">
                <a href="#"><img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"></a>
            </el-col>
            <el-col class="zzs" :span="6">
                <a href="#"><img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"></a>
            </el-col>
            <el-col class="shangjia" :span="6">
                <a href="#"><img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"></a>
            </el-col>
            <!-- 二维码区域 -->
            <el-col class="mtapp" :span="6">
                <div class="saoma">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png">
                </div>
                <p class="app-iphone">美团APP手机版</p>
                <p class="eat-drink">
                    <span>1元起</span>
                    <span class="eat">吃喝玩乐</span>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import myCarousel from "./myCarousel.vue";
export default {
    components: {
        myCarousel
    }
}
</script>
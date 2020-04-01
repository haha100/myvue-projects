<template>
    <el-row class="search-row">
        <!-- 美团logo图 -->
        <el-col class="mt-logo">
            <a href="//hz.meituan.com">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团首页">
            </a>
        </el-col>
        <!-- 中间搜索区 -->
        <el-col class="search-wrap">
            <!-- 搜索框 -->
            <div class="search-btn">
                <el-input v-model="searchWord" placeholder="搜索商家或地点" class="search" @focus="focusFuc" @blur="blurFuc" @input="input"></el-input>
                <el-button type="primary" class="btn"><i class="el-icon-search" /></el-button>
            </div>
            <!-- 搜索框下面热门地点 -->
            <ul class="hot-place">
                <li v-for="(place, index) in hotPlaceList" :key="index">
                    <router-link :to="{name: 'goods', params: {name: place}}">{{ place }}</router-link>
                </li>
            </ul>
            <!-- 热门搜索 -->
            <dl class="hotSearch" v-show="isHotPlace">
                <dt>热门搜索</dt>
                <dd v-for="(place, index) in hotSearchList.slice(0, 4)" :key="place + '_' + index">
                    <router-link :to="{name: 'goods', params: {name: place}}">{{ place }}</router-link>
                </dd>
            </dl>
            <!-- 搜索结果展示 -->
            <ul class="huoguo" v-show="isSearchList">
                <li v-for="(item, index) in huoguoList" :key="index">
                    <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
                </li>
            </ul>
        </el-col>
    </el-row>
</template>

<script>
import api from "@/api/index.js";
export default {
    data () {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: [],
            hotSearchList: [],
            huoguoList: []
        }
    },
    created() {
        //获取热门搜索地点
        api.getSearchHotWord().then(res => {
            this.hotPlaceList = res.data.data;
            this.hotSearchList = res.data.data;
        })
    },
    computed: {
        //如果搜索框内容为空，并且搜索框聚焦，显示热门搜索关键词
        isHotPlace() {
            return !this.searchWord && this.isFocus;
        },
        //如果搜索框不为空，并且搜索框聚焦，显示搜索结果
        isSearchList() {
            return this.isFocus && this.searchWord;
        }
    },
    methods: {
        //搜索框聚焦
        focusFuc() {
            this.isFocus = true;
        },
        //搜索框失焦
        blurFuc() {
            let self = this;
            setTimeout(function() {
                self.isFocus = false;
            }, 200)
        },
        //搜索框内容改变时，获取搜索数据
        input() {
            api.getSearchList().then(res => {
                this.huoguoList = res.data.data.list;
            })
        }
    }
}
</script>
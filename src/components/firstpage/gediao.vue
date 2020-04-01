<template>
    <div class="gediao">
        <!-- 有格调区域上方导航栏区 -->
        <dl class="gediao-ul" @mouseover="over">
            <dt :class="nav.class">{{ nav.title }}</dt>
            <dd v-for="(item, index) in nav.list" :key="index + '-' + item" clas="sanjiao" :data-type="item.tab">
                <span :class="item.tab1">{{ item.text }}</span>
                <!-- 动态设置class属性，添加三角形下标 -->
                <span :class="{active: kind == item.tab}"></span>
            </dd>
        </dl>
        <!-- 商家展示区 -->
        <ul class="ibody">
            <li v-for="(item, index) in allList[kind]" :key="index + '-' + item">
                <el-card class="card">
                    <a href="#">
                        <img :src="item.image">
                        <div class="title-price">
                            <div class="title">{{ item.title }}</div>
                            <div class="sub-title">{{ item.subTitle }}</div>
                            <div class="price-wrap">
                                <span class="yuan">￥</span>
                                <span class="currentPrice">{{ item.price }}</span>
                                <span class="address">{{ item.address }}</span>
                            </div>
                        </div>
                    </a>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            kind: "all",
            allList: []
        }
    },
    //获取各商家需展示的数据
    created() {
        api.getResultsByKeyword().then((res) => {
            this.allList = res.data.data;
        })
    },
    props: ["nav"],
    methods: {
        //鼠标移入有格调区域导航栏，动态设置class属性，添加三角形下标
        over(e) {
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            console.log(dom,tagName);
            if (tagName != "dd") {
                return false;
            }
            this.kind = dom.getAttribute("data-type");
        }
    }
}
</script>
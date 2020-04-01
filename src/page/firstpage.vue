<template>
<div class="firstpage">
    <el-row class="menu-life-wrap">
        <!-- 首页全部分类菜单栏 -->
        <el-col class="menu">
            <my-menu />
        </el-col>
        <!-- 首页轮播图、轮播图右边登录注册、二维码区域 -->
        <el-col class="life">
            <life />
        </el-col>
    </el-row>
    <!-- 首页下方有格调区域 -->
    <el-row class="gediao-el">
        <gediao :nav="istyle"></gediao>
    </el-row>
</div>
</template>

<script>
import myMenu from "@/components/firstpage/menu.vue";
import life from "@/components/firstpage/life.vue";
import gediao from "@/components/firstpage/gediao.vue";
export default  {
    data() {
        return {
            istyle: {
                title: "有格调",
                class: "istyle",
                list: [{
                    text: "全部",
                    tab: "all"
                },{
                    text: "约会聚餐",
                    tab: "food"
                },{
                    text: "丽人SAP",
                    tab: "spa"
                },{
                    text: "电影演出",
                    tab: "movie"
                },{
                    text: "品质出游",
                    tab: "travel"
                }]
            }
        }
    },
    components: {
        myMenu,
        life,
        gediao
    }
}
</script>

<style lang="less">
    @import "../assets/styles/firstpage/firstpage.less";
</style>
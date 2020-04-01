<!-- 切换城市页面 -->
<template>
    <div class="changeCity-wrap">
        <!-- 选择省份区域 -->
        <el-row>
            <province />
        </el-row>
        <!-- 热门城市区域 -->
        <el-row>
            <hot-city />
        </el-row>
        <!-- 最近访问区域 -->
        <el-row>
            <recently />
        </el-row>
        <!-- 按拼音选择和城市列表区域 -->
        <el-row>
            <!-- 按拼音选择 -->
            <letter />
            <!-- 城市列表 -->
            <city-list />
        </el-row>
    </div>
</template>

<script>
import Province from "../components/changecity/province.vue";
import HotCity from "../components/changecity/hotCity.vue";
import Recently from "../components/changecity/recently.vue";
import Letter from "../components/changecity/letter.vue";
import CityList from "../components/changecity/cityList.vue";
export default {
    components: {
        Province,
        HotCity,
        Recently,
        Letter,
        CityList
    }
}
</script>

<style lang="less">
    @import "../assets/styles/changecity/changecity.less";
</style>
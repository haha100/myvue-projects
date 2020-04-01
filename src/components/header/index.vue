<template>
  <div class="header">
    <!-- 首页顶部导航栏 -->
    <el-row class="nav">
      <top-bar />
    </el-row>
    <!-- 搜索栏 -->
    <el-row class="search">
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from "./topBar.vue";
import searchBar from "./searchBar.vue";

export default {
  components: {
    topBar,
    searchBar
  }
};
</script>

<style lang="less">
@import "../../assets/styles/header/index.less";
</style>
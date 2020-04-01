<template>
  <el-container>
    <!-- 模板页面页头-->
    <el-header height="">
      <my-header />
    </el-header>
    <!-- 模板页码主体 -->
    <el-main>
      <router-view />
    </el-main>
    <!-- 页脚 -->
    <el-footer height="">
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from "@/components/header/index.vue";
import myFooter from "@/components/footer/footer.vue";
export default {
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style scoped lang="less">
  @import "../assets/styles/default.less";
</style>
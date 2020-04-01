<template>
    <el-row class="top-bar">
        <!-- 导航栏左侧 -->
        <el-col :span="12">
            <geo />
        </el-col>
        <!-- 导航栏右侧 -->
        <el-col :span="12">
            <my-nav />
        </el-col>
    </el-row>
</template>

<script>
import Geo from './Geo.vue';
import myNav from './Nav.vue';
export default {
    components: {
        Geo,
        myNav
    }
}
</script>
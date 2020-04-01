<template>
  <div class="geo">
    <!-- 定位、城市 -->
    <div class="position">
      <i class="el-icon-location-information" />
      {{ $store.state.position.name }}
      <router-link class="changecity" :to="{name: 'changeCity'}">切换城市</router-link>
      [<a href="#" v-for="item in nearCity" :key="item.id">{{ item.name }}</a>]
    </div>
    <!-- 未登录状态显示以下元素 -->
    <div class="login-register" v-if="!$store.state.userName">
      <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
    <!-- 登录状态显示以下元素 -->
    <div class="userName-exit" v-if="$store.state.userName">
      <a href="#" class="userName">{{ $store.state.userName }}</a>
      <span class="exit" @click="exit">退出</span>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: []
    }
  },
  //侦听是否切换城市，如果切换城市，更改nearCity的值
  watch: {
    "$store.state.position": function () {
      this.nearCity = this.$store.state.position.nearCity
    }
  },
  created() {
    //获取当前城市信息
    api.getPosition().then((res) => {
      this.$store.dispatch("setPosition", res.data.data);
      this.nearCity = res.data.data.nearCity;
    })
  },
  methods: {
    //退出登录状态，设置username为空
    exit() {
      this.$store.commit('setUserName', "");
      this.$router.push({path: '/home'});
    }
  }
};
</script>
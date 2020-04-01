<template>
    <div class="login-page">
        <div class="white-header"></div>
        <!-- 美团logo图片 -->
        <div class="login-header">
            <a href="https://www.meituan.com"></a>
        </div>
        <!-- 登录页面主体区 -->
        <div class="login-penel">
            <!-- 主体区左边大图 -->
            <div class="image">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" />
            </div>
            <!-- 登录输入框，登录按钮-->
            <div class="login-from">
                <div class="error-wrapper">
                    <div class="error" v-if="error">
                        <i class="el-icon-warning"></i>
                        <span>{{ error }}</span>
                    </div>
                </div>
                <p class="text">
                    <span>账号登录</span>
                </p>
                <el-input v-model="username" :class="{'active': error && !username}" placeholder="手机号/用户名/邮箱" prefix-icon="el-icon-user"></el-input>
                <el-input v-model="password" :class="{'active': error && !password}" type="password" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
                <div class="forget">
                    <a href="#">忘记密码?</a>
                </div>
                <el-button @click="submit">登录</el-button>
                <p class="notuser">
                    <span>还没有账号?</span>
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <div class="cooperate-wrapper">
                    <h3>
                        <span>用合作网站账号登录</span>
                    </h3>
                    <div class="cooperate">
                        <a href="#" class="qq"></a>
                        <a href="#" class="weibo"></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 登录页面页脚 -->
        <div class="login-footer">
            <ul class="footer-ul">
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            username: "",
            password: "",
            error: ""
        }
    },
    methods: {
        submit() {
            //判断账号是否为空
            if(!this.username) {
                this.error = "请输入正确的手机号";
                return false;
            }
            //判断密码是否为空
            if(!this.password) {
                this.error = "请输入密码";
                return false;
            }
            //登录账号，登录成功跳转至首页，并保存账号至store.js
            //登录失败显示失败信息
            api.login({
                params: {
                    userName: this.username,
                    password: this.password
                }
            }).then((res) => {
                if(res.data.status == "success") {
                    this.$router.push({name: "firstpage"});
                    this.$store.commit('setUserName', this.username);
                }else {
                    this.error = res.data.msg;
                }
            })
        }
    }
}
</script>

<style lang="less">
    @import "../assets/styles/login/login.less";
</style>
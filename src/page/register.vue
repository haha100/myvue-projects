<template>
  <div class="page-register">
    <!-- 注册页面页头 -->
    <div class="header-wrapper">
      <div class="register-header">
        <a href="#" class="register-logo"></a>
        <div class="login-block">
          <span>已有美团账号?</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </div>
    </div>
    <!-- 注册页面主体区 -->
    <div class="register-content">
      <div class="register-form">
        <!-- 使用element的el-from组件 -->
        <el-form
          :model="registerForm"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 手机号输入框 -->
          <el-form-item label="手机号" prop="userName">
            <el-input
              type="text"
              v-model="registerForm.userName"
              autocomplete="off"
            ></el-input>
            <span class="J-unitive-tip">注册成功后，全美团通用</span>
          </el-form-item>
          <!-- 密码输入框及密码强弱显示 -->
          <el-form-item label="创建密码" prop="password">
            <el-input
              type="password"
              v-model="registerForm.password"
              autocomplete="off"
              @input="input"
            ></el-input>
            <div class="pw-strength">
              <div :class="['bar', strengthClass]"></div>
              <div class="letter">
                <span>弱</span>
                <span>中</span>
                <span class="strong">强</span>
              </div>
            </div>
          </el-form-item>
          <!-- 确认密码输入框 -->
          <el-form-item label="确认密码" prop="rePassword">
            <el-input
              type="password"
              v-model="registerForm.rePassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 提交按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="term"></div>
    </div>
    <!-- 注册页面页脚 -->
    <div class="register-footer">
      <ul class="register-footer-ul">
        <li class="register-footer-li">
          <a href="#">©meituan.com</a>
        </li>
        <li class="register-footer-li">
          <a href="#">京ICP证070791号</a>
        </li>
        <li class="register-footer-li">
          <span>京公网安备11010502025545号</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      //账号验证
      //如果账号输入为空，或者账号长度小于4或者大于16,抛出错误提示
      if (value === "") {
        callback(new Error("请输入账号名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    //密码验证
    //如果账号输入为空，或者账号长度小于4或者大于16,抛出错误提示
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("密码必须为4-16位的字母数字下划线组成"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    //判断两次密码输入是否一致
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    //如果用户输入的数据校验通过，则进行注册
    //注册成功跳转至登录页面，注册失败输出提示
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.register({
            params: this.registerForm
          }).then((res) => {
            if(res.data.status == "success") {
              this.$router.push({name: "login"});
            }else {
              alert(res.data.msg);
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //判断密码输入强弱
    //密码长度在14-16为强，8-13为中，4-7为弱
    input() {
      if (
        this.registerForm.password.length > 13 &&
        this.registerForm.password.length < 17
      ) {
        this.strengthClass = "bar-strong";
      } else if (
        this.registerForm.password.length > 7 &&
        this.registerForm.password.length < 14
      ) {
        this.strengthClass = "bar-normal";
      } else if (
        this.registerForm.password.length < 8 &&
        this.registerForm.password.length > 3
      ) {
        this.strengthClass = "bar-weak";
      } else {
        this.strengthClass = "";
      }
    }
  }
};
</script>

<style lang="less">
@import "../assets/styles/register/register.less";
</style>
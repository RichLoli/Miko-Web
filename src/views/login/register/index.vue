<template>
  <div id="forget">
    <div class="forget-card">
      <div class="forget-head">
        <span>账户注册</span>
      </div>
      <el-divider :style="{ 'background-color': '#cbcbcb' }"></el-divider>
      <div class="register-form">
        <el-form
          :model="user"
          :label-position="labelPosition"
          :rules="rules"
          ref="userLogin"
          label-width="120px"
        >
          <el-form-item label="" prop="username">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名/手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="user.password"
              type="password"
              autocomplete="off"
              placeholder="请输入密码"
              prop="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="user.confirmPasswd"
              type="password"
              autocomplete="off"
              placeholder="请再次输入密码"
              prop="password"
            ></el-input>
          </el-form-item>
          <el-form-item> </el-form-item>
          <el-form-item>
            <el-button class="button-full" type="primary" @click="handleLogin"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div>
        <div class="login-tips">
          <router-link to="/login/forget">忘记密码？</router-link>
          <router-link to="/login/">已有账户？去登陆</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, unref } from "vue";

export default {
  name: "Forget",
  setup () {
    const userLogin = ref(null);

    const user = reactive({
      username: "",
      password: "",
      confirmPasswd: "",
    });

    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 20,
          message: "用户名应为 3-20 个字符",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 6,
          message: "密码应不少于6位",
          trigger: "blur",
        },
      ]
    });

    const handleLogin = async () => {
      const form = unref(userLogin);
      if (!form) return;
      form.validate((valid) => {
        if (valid) {
          if (user.password !== user.confirmPasswd) {
            return false;
          }
          console.log("submit!");
          console.log(user.username);
          console.log(user.password);
          console.log(user.confirmPasswd);
          this.$cookies.set("token", "admin");
          // this.$router.push("/");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    return {
      user,
      rules,
      userLogin,
      handleLogin,
    };
  },
  data () {
    return {
      labelPosition: "top",
    };
  },
}
</script>

<style>
.forget-card {
  width: 310px;
  background: #fff;
  padding: 25px;
}

.forget-head {
  font-size: 1.3em;
  font-weight: bolder;
  color: #277cd5;
}
</style>
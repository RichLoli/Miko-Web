<template>
  <div id="login-board">
    <div id="login-info">
      <div style="text-align: center">
        <span>MIKO</span>
      </div>
    </div>
    <div id="login-card">
      <div class="login-title">
        <span>账户登录</span>
        <el-divider :style="{ 'background-color': '#cbcbcb' }"></el-divider>
      </div>

      <div class="login-form">
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
          <el-form-item> </el-form-item>
          <el-form-item>
            <el-button class="button-full" type="primary" @click="handleLogin"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div>
        <div class="login-tips">
          <router-link to="/login/forget">忘记密码？</router-link>
          <router-link to="/login/register">没有账户？立即注册></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, unref } from "vue";
import { useStore } from 'vuex';
import { useRouter} from "vue-router"

const userLogin = ref(null);

const labelPosition = ref('top')

const $store = useStore();
const $router = useRouter();

const user = reactive({
  username: "",
  password: "",
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
  ],
});

const handleLogin = async () => {
  const form = unref(userLogin);
  if (!form) return;
  form.validate((valid) => {
    if (valid) {
      console.log("submit!");
      $store.dispatch("Login", user).then((response) => {
        console.log(response);
        $router.push("/home");
      }).catch((e) => {
          
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
}
</script>

<style>
#login-board {
  display: flex;
}

#login-info {
  height: 310px;
  width: 165px;
  padding: 25px;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#login-info span {
  font-size: 2.5em;
  font-weight: bold;
  color: #499edb;
  font-family: "微软雅黑";
}

#login-card {
  height: 310px;
  width: 340px;
  padding: 25px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#login-card > div {
  margin-bottom: 15px;
}

.login-title {
  font-size: 1.3em;
  font-weight: bolder;
  color: #277cd5;
}

.login-tips {
  font-size: 0.5em;
  display: flex;
  justify-content: space-between;
}

.login-tips > a {
  color: rgb(114, 114, 114);
}

.login-form label {
  padding: 0px !important;
}
</style>
<template>
  <div id="forget">
    <div class="forget-card">
      <div class="forget-head">
        <span>忘记密码</span>
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
            <SliderVerify/>
          </el-form-item>
          <el-form-item>
            <el-button class="button-full" type="primary" @click="handleLogin"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, unref, defineComponent } from "vue";
import SliderVerify  from "@/components/form/SliderVerify";

const userLogin = ref(null);

const labelPosition = ref('top')

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
    } else {
      console.log("error submit!");
      return false;
    }
  });
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
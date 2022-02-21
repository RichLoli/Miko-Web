<template>
  <div id="login">
    <div class="m">
      <div id="login-banner">
        <div id="login-maintainer">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="f">
      <div class="links">
        <router-link to="/about">关于我们</router-link> |
        <router-link to="/contact">联系我们</router-link> |
        <router-link to="/contact">友情链接</router-link>
      </div>
      <div class="copyright">
        <p>Copyright © 2020-2021 macoloco 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data () {
    return {
      currentForm: "LoginForm"
    }
  },
  methods: {

  },
};
</script>

<style>
#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-image: url("../../assets/images/bg-617537.jpg");
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

.m {
  width: 100%;
}

#login-banner {
  width: 1090px;
  height: 780px;
  margin: auto;
}

#login-maintainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.f {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-full {
  width: 100%;
}

.links {
  margin-top: 20px;
  color: #fff;
}

.links > a {
  padding: 0px 10px;
  color: #ff6767;
  font-family: 微软雅黑;
  font-size: 1.2em;
  font-weight: 700;
}

.copyright {
  color: #ff6767;
}
</style>
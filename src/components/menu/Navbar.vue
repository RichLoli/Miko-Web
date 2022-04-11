<template>
  <div class="navbar">
    <div class="navbar-menu">
      <div class="navbar-menu-item" @click="toggleSidebar">
        <el-icon :size="25">
          <component :is="siderbarIcon"></component>
        </el-icon>
      </div>
      <div class="navbar-menu-item">
        <div style="height: 40px">
          <el-badge :value="12" class="item">
            <el-avatar
              :size="40"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </el-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from 'vuex';


const siderbarIcon = ref('fold')

const $store = useStore()

const toggleSidebar = () => {
  siderbarIcon.value = siderbarIcon.value === "fold" ? "expand" : "fold"
  $store.dispatch("toggleSidebar")
}
</script>

<style>
.navbar {
  height: 57px;
  background-color: #ffffff;
}
.navbar-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.navbar-menu-item {
  height: 100%;
  min-width: 40px;
  padding: 0px 20px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  transition: all 0.5s ease;
}
</style>
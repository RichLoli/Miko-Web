<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#697ffc"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="this.$store.getters.sidebar.opened"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><setting /></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>联盟管理</span>
        </template>
        <el-menu-item index="2-1">联盟列表</el-menu-item>
        <el-menu-item index="2-2">组织列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>节点管理</span>
        </template>
        <el-menu-item index="3-1">节点列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="4">
        <template #title>
          <el-icon><location /></el-icon>
          <span>通道管理</span>
        </template>
        <el-menu-item index="4-1">通道列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="5">
        <template #title>
          <el-icon><location /></el-icon>
          <span>合约管理</span>
        </template>
        <el-menu-item index="5-1">合约列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="6">
        <template #title>
          <el-icon><location /></el-icon>
          <span>应用管理</span>
        </template>
        <el-menu-item index="6-1">应用列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="7">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="7-1">用户管理</el-menu-item>
        <el-menu-item index="7-2">角色管理</el-menu-item>
        <el-menu-item index="7-3">菜单管理</el-menu-item>
        <el-menu-item index="7-4">字典管理</el-menu-item>
        <el-menu-item index="7-5">编码管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-item.is-active {
  background: rgba(255, 255, 255, 0.35) !important;
}

.el-sub-menu .el-menu-item {
  background: #536cfd;
}

.el-menu-vertical-demo{
    height: 100%;
}

.sidebar {
  height: 100%;
}
</style>
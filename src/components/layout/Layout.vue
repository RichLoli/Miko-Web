<template>
  <div class="layout-main">
    <div class="layout-side">
      <Sidebar></Sidebar>
    </div>
    <div
      class="layout-content"
      :class="{ 'sidebar-open': !this.$store.getters.sidebar.opened }"
    >
      <div class="layout-nav">
        <Navbar></Navbar>
      </div>
      <div class="layout-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/menu/Sidebar'
import Navbar from '@/components/menu/Navbar'

</script>

<style>
.layout-side {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
}

.sidebar-open {
  margin-left: 220px !important;
}

.layout-content {
  margin-left: 64px;
  transition: all 0.3s ease-in-out;
}

.layout-view {
  padding: 15px;
}
</style>
<template>
  <div id="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="data-info">
          <div class="data-info-title">
            <div>
              <el-icon size="30"><coin /></el-icon>
            </div>
            <div>
              <span>区块高度</span>
            </div>
          </div>
          <div class="data-info-value">
            <span>16</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="data-info">
          <div class="data-info-title">
            <div>
              <el-icon size="30"><coin /></el-icon>
            </div>
            <div>
              <span>区块高度</span>
            </div>
          </div>
          <div class="data-info-value">
            <span>16</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="data-info">
          <div class="data-info-title">
            <div>
              <el-icon size="30"><coin /></el-icon>
            </div>
            <div>
              <span>区块高度</span>
            </div>
          </div>
          <div class="data-info-value">
            <span>16</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="data-info">
          <div class="data-info-title">
            <div>
              <el-icon size="30"><coin /></el-icon>
            </div>
            <div>
              <span>区块高度</span>
            </div>
          </div>
          <div class="data-info-value">
            <span>16</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div>
          <div>
            <h1>7日交易趋势</h1>
          </div>
          <div>
            <LineChart></LineChart>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import * as echarts from 'echarts';
import LineChart from '@/components/charts/LineChart'
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-col > div {
  padding: 15px;
  background: #fff;
  border-radius: 5px 5px 5px 5px;
  border: 0.5px rgb(207, 207, 207) solid;
}

.data-info {
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.data-info-title {
  font-size: 1.5em;
  display: flex;
}

.data-info-value {
  font-size: 1.5em;
}
</style>
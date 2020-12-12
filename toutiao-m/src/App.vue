<template>
  <div id="app">
      <h1>黑马头条</h1>
    <!-- 路由的出口,会被渲染到这里. -->
    <van-cell-group>
  <van-cell title="单元格1" value="内容"></van-cell>
  <van-cell title="单元格" value="内容"></van-cell>
</van-cell-group>
<van-button type="primary">主要按钮</van-button>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
  }
  </script>

<style lang="less"></style>
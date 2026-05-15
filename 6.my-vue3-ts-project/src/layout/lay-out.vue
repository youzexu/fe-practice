<template>
  <div class="layout">
   <TopBar v-model:collapse="isCollapsed" />
    <div class="main-wrapper">
     <LeftSidebar v-model:collapse="isCollapsed" />
      <div class="content-wrapper">
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Layout">
import TopBar from './components/top-bar.vue'
import LeftSidebar from './components/left-sidebar.vue'
import AppMain from './components/App-Main.vue'
import { ref } from 'vue';
const isCollapsed = ref(false)
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-wrapper {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.content-wrapper {
  flex: 1;
  overflow: hidden;
  background-color: #f0f2f6;
  padding: 16px;
  min-width: 0;
  min-height: 0;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
}
</style>

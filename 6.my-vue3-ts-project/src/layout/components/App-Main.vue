<template>
  <div class="app-main">
    <app-header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts" name="AppMain">
import AppHeader from './app-header.vue'


</script>


<style scoped>
.app-main {
  width: 100%;
  display: flex;
  flex-direction: column
}

.content {
flex: 1
}
</style>
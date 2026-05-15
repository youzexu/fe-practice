<template>
 <div class="sidebar" :class="{ collapse }">
   <el-menu :router="true" :collapse="collapse" :collapse-transition="false" background-color="transparent"
      text-color="#bfcbd9" active-text-color="#409eff">
      <el-menu-item>
        <el-icon>
          <location />
        </el-icon>
        <span>驾驶舱</span>
     </el-menu-item>
      <el-sub-menu index="basic">
        <template #title>
          <el-icon>
            <location />
         </el-icon>
          <span>基础信息</span>
        </template>
       <el-menu-item index="/foundation/team">团队管理</el-menu-item>
        <el-menu-item index="/foundation/customer">客户管理</el-menu-item>
        <el-menu-item index="/foundation/supplier">供应商管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup name="LeftSidebar">

defineProps<{
  collapse: boolean
}>()





</script>

<style scoped>
.sidebar {
  width: 208px;
  height: 100%;
  background: #262D36;
  transition: .3s;
  overflow-y: auto;
}

.sidebar.collapse {
  width: 64px;
}

:deep(.el-menu),
:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  border-right: none !important;
  background: #262D36 !important;
}

.sidebar.collapse :deep(.el-menu-item span),
.sidebar.collapse :deep(.el-sub-menu__title span) {
  display: none;
}

.fold {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  cursor: pointer;
  color: #bfcbd9;
  border-bottom: 1px solid #3a4a5c;
  margin-bottom: 8px;
}

.fold:hover {
  color: #409eff;
  background: #1a1f26;
}

.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: #262D36;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #4a5a6a;
  border-radius: 4px;
}
</style>
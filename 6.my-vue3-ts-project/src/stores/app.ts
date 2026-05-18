// stores/app.ts
import { defineStore } from 'pinia'

// 定义数据类型
interface AppState {
    sidebarCollapsed: boolean
}

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        // 从 localStorage 读取初始值
        sidebarCollapsed: localStorage.getItem('sidebar-collapsed') === 'true'
    }),
    // 切换侧边栏状态
    actions: {      
        toggleSidebar() {
            this.sidebarCollapsed = !this.sidebarCollapsed         
            localStorage.setItem('sidebar-collapsed', String(this.sidebarCollapsed))
        },
    }
})
// stores/app.ts
import { defineStore } from 'pinia'

// 定义状态类型
interface AppState {
    sidebarCollapsed: boolean
}

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        // 从 localStorage 读取初始值
        sidebarCollapsed: localStorage.getItem('sidebar-collapsed') === 'true'
    }),

    actions: {
        // 切换侧边栏状态
        toggleSidebar() {
            this.sidebarCollapsed = !this.sidebarCollapsed
            // 保存到 localStorage
            localStorage.setItem('sidebar-collapsed', String(this.sidebarCollapsed))
        },
    }
})
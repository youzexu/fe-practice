<template>
    <div>
        <el-dialog v-model="dialogVisible" title="新增客户" width="500">
            <el-form label-width="120px" label-position="top" style="min-height: 600px;">
                <el-form-item label="客户属性" style="width: 100%;margin-bottom: 24px;" size="small">
                    <el-select placeholder="请选择">
                        <el-option label="个人" value="个人"></el-option>
                        <el-option label="企业" value="企业"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户类型" style="width: 100%;margin-bottom: 24px;" size="small">
                    <el-select placeholder="请选择">
                        <el-option label="潜在客户" value="潜在客户"></el-option>
                        <el-option label="正式客户" value="正式客户"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户分组" style="width: 100%; margin-bottom: 24px;" size="small">
                    <el-select placeholder="请选择">
                        <el-option label="分组1" value="分组1"></el-option>
                        <el-option label="分组2" value="分组2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户所属组织" style="width: 100%;margin-bottom: 24px;" size="small">
                    <el-select placeholder="请选择">
                        <el-option label="组织1" value="组织1"></el-option>
                        <el-option label="组织2" value="组织2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户名称" style="width: 100%;margin-bottom: 24px;" size="small">
                    <el-input placeholder="请选择" />
                </el-form-item>
                <el-form-item label="客户简称" style="width: 100%;margin-bottom: 24px;" size="small">
                    <el-input placeholder="请选择" />
                </el-form-item>
                <el-form-item label="备注" style="width: 100%;margin-bottom: 24px;" size="small">
                    <el-input type="textarea" rows="2" placeholder="请填写备注信息 (200字以内)" />
                </el-form-item>
                <el-form-item>
                    <el-row type="flex" justify="end" align="middle" style="width: 100%">
                        <el-button type="primary" size="small" @click="dialogVisible = false">确定</el-button>
                        <el-button size="small" @click="dialogVisible = false">取消</el-button>
                    </el-row>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>


<script setup lang="ts" name="AddCustomer">
import { ref } from 'vue';

const dialogVisible = ref(false);
const open = () => {
    dialogVisible.value = true;
}
defineExpose({ open })
</script>

<style></style>
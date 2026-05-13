<template>
    <div>
       <el-dialog v-model="dialogVisible" title="新增客户" width="520">
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
           </el-form>
            <div class="harvestinformation">
                <span class="span1">|</span>
                <span>收货信息</span>
            </div>
            <el-form label-position="top" style="min-height: 500px;">
                <div class="Form2" style="display: flex; flex-direction: column; align-items: center;">
                    <el-form-item label="配送地址名称" style="width: 440px; margin-bottom: 24px; margin-top: 24px;"
                        size="small">
                        <el-input style="width: 100%;" placeholder="请填写" />
                    </el-form-item>
                    <el-form-item label="联系人" style="width: 440px; margin-bottom: 24px;" size="small">
                        <el-input style="width: 100%;" placeholder="请填写" />
                    </el-form-item>
                    <el-form-item label="联系人电话" style="width: 440px; margin-bottom: 24px;" size="small">
                        <el-input style="width: 100%;" placeholder="请填写" />
                    </el-form-item>
                    <el-form-item label="所在地区" style="width: 440px; margin-bottom: 24px;" size="small">
                        <el-select style="width: 30%;" placeholder="请选择">
                            <el-option label="重庆" value="重庆"></el-option>
                            <el-option label="北京" value="北京"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="详细地址" style="width: 440px; margin-bottom: 24px;" size="small">
                        <el-input style="width: 100%;" type="textarea" rows="3" placeholder="请输入详细名称" />
                    </el-form-item>
                </div>
            </el-form>
            <el-row type="flex" justify="center" align="middle">
                <el-button size="small" style="width: 100%; border: 1px dashed #ccc;">+ 新增</el-button>
            </el-row>
            <el-row type="flex" justify="end" align="middle" style="margin-top: 24px;">
                <el-button type="primary" size="small" @click="dialogVisible = false">确定</el-button>
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
            </el-row>
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

<style scoped>
.Form2 {
    margin: 0 auto;
    background: #FAFAFA;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.09);
}

.harvestinformation {
    margin-top: 24px;
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    color: black;
    margin-bottom: 8px;
}

.span1 {
    color: #0065FE;
    font-weight: 900;
    font-size: 18px;
}
</style>
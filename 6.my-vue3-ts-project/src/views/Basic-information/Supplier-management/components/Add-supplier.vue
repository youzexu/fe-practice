<template>
    <div>
        <el-dialog v-model="showHide" width="520" @close="btnCancel">
            <el-form label-width="120px" label-position="top" style="min-height: 600px;" :model="formList1"
                ref="formOne" :rules="rules">
                <el-form-item label="供应商属性" style="width: 100%; margin-bottom: 24px;" size="small" prop="attribute">
                    <el-select placeholder="请选择" v-model="formList1.attribute">
                        <el-option label="内部" value="内部"></el-option>
                        <el-option label="外部" value="外部"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="供应商类型" style="width: 100%; margin-bottom: 24px;" size="small" prop="type">
                    <el-select placeholder="请选择" v-model="formList1.type">
                        <el-option label="苹果" value="苹果"></el-option>
                        <el-option label="香蕉" value="香蕉"></el-option>
                        <el-option label="橘子" value="橘子"></el-option>
                        <el-option label="葡萄" value="葡萄"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户所属组织" style="width: 100%;margin-bottom: 24px;" size="small" prop="organization">
                    <el-select placeholder="请选择" v-model="formList1.organization">
                        <el-option label="组织1" value="组织1"></el-option>
                        <el-option label="组织2" value="组织2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="供应商名称" style="width: 100%;margin-bottom: 24px;" size="small" prop="name">
                    <el-input placeholder="请输入" v-model="formList1.name" />
                </el-form-item>
                <el-form-item label="供应商简称" style="width: 100%;margin-bottom: 24px;" size="small" prop="abbreviation">
                    <el-input placeholder="请输入" v-model="formList1.abbreviation" />
                </el-form-item>
                <el-form-item label="联系电话" style="width: 100%;margin-bottom: 24px;" size="small" prop="phone">
                    <el-input placeholder="请输入" v-model="formList1.phone" type="number" />
                </el-form-item>
                <el-form-item label="供应商地址" size="small" prop="address">
                    <div v-if="formList1.addresses[0]" style="width: 100%;">
                        <el-input v-model="formList1.addresses[0].address" placeholder="请输入地址" />
                    </div>
                </el-form-item>
                <el-form-item label="门牌号" size="small" prop="house">
                    <div v-if="formList1.addresses[0]" style="width: 100%;">
                        <el-input v-model="formList1.addresses[0].house" placeholder="请输入门牌号(50字以内)" type="textarea"
                            :rows="2" />
                    </div>
                </el-form-item>
                <el-form-item label="备注" style="width: 100%;margin-bottom: 24px;" size="small" prop="remark">
                    <el-input type="textarea" :rows="2" placeholder="请填写备注信息 (200字以内)" v-model="formList1.remark" />
                </el-form-item>
            </el-form>
            <el-row type="flex" justify="end" align="middle" style="margin-top: 24px;">
                <el-button type="primary" size="small" @click="btnOk">确定</el-button>
                <el-button size="small" @click="btnCancel">取消</el-button>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="AddSupplier">
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';

interface customerData {
coding: number,
attribute: string,
type: string,
organization: string,
name: string,
abbreviation: string,
phone: string,
remark: string,
    addresses: {
    address: string,
    house: string,
    }[]
}
let coding = 40999999917
const formOne = ref();
const formList1 = reactive<customerData>({
coding: coding++,
attribute: '',
type: '',
organization: '',
name: '',
phone: '',
abbreviation: '',
remark: '',
    addresses: [{
    address:'' ,
    house:'',
    }]
});
const showHide = ref<boolean>(false)

const open = () => { 
    showHide.value = true;
}
const emit = defineEmits<{
     (e: 'addCustomer', data: customerData): void
     (e: 'editCustomer', data: customerData): void
}>()
const btnOk = () => { 
    formOne.value.validate((valid: boolean) => { 
        if (valid) {           
            emit('addCustomer', formList1)
            showHide.value = false;
            ElMessage.success('添加成功')
        } else { 
             ElMessage.error('请填写完整信息')
        }
    })
}
const btnCancel = () => { 
    formOne.value.resetFields();
    showHide.value = false;
    
}
// 表单验证规则
const rules = reactive({
    attribute: [{ required: true, message: '请选择供应商属性', trigger: 'blur' }],
    type: [{ required: true, message: '请选择供应商类型', trigger: 'blur' }],
    organization: [{ required: true, message: '请选择客户所属组织', trigger: 'blur' }],
    name: [{ required: true, message: '请输入供应商名称', trigger: 'blur' }],
    abbreviation: [{ required: true, message: '请输入供应商简称', trigger: 'blur' }],
    phone: [
        { required: true, message: '请输入联系人电话', trigger: 'blur' },
        // {  pattern: /^1[3-9]\d{9}$/, message: '电话格式不正确', trigger: 'blur' },
        // { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' }
    ],
    address: [{ required: true, message: '请输入供应商地址', trigger: 'blur' }],
    house: [
        { required: true, message: '请输入门牌号', trigger: 'blur' },
        { max: 50, message: '门牌号不能超过50字', trigger: 'blur' }
    ],
    remark: [
        { required: true, message: '请输入备注信息', trigger: 'blur' },
        { max: 200, message: '备注信息不能超过200字', trigger: 'blur' }
    ]
})

defineExpose({open})

</script>

<style scoped>
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
<template>
    <div>
       <el-dialog v-model="dialogVisible" :title="showTitle" width="520" @close="btnCancel">
            <el-form label-width="120px" label-position="top" style="min-height: 600px;" :model="formList1"
                ref="formOne" :rules="rules">
                <el-form-item label="客户属性" style="width: 100%;margin-bottom: 24px;" size="small" prop="attribute">
                    <el-select placeholder="请选择" v-model="formList1.attribute">
                        <el-option label="个人" value="个人"></el-option>
                        <el-option label="企业" value="企业"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户类型" style="width: 100%;margin-bottom: 24px;" size="small" prop="type">
                    <el-select placeholder="请选择" v-model="formList1.type">
                        <el-option label="潜在客户" value="潜在客户"></el-option>
                        <el-option label="正式客户" value="正式客户"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户分组" style="width: 100%; margin-bottom: 24px;" size="small" prop="group">
                    <el-select placeholder="请选择" v-model="formList1.group">
                        <el-option label="分组1" value="分组1"></el-option>
                        <el-option label="分组2" value="分组2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户所属组织" style="width: 100%;margin-bottom: 24px;" size="small" prop="organization">
                    <el-select placeholder="请选择" v-model="formList1.organization">
                        <el-option label="组织1" value="组织1"></el-option>
                        <el-option label="组织2" value="组织2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户名称" style="width: 100%;margin-bottom: 24px;" size="small" prop="name">
                    <el-input placeholder="请输入" v-model="formList1.name" />
                </el-form-item>
                <el-form-item label="客户简称" style="width: 100%;margin-bottom: 24px;" size="small" prop="abbreviation">
                    <el-input placeholder="请输入" v-model="formList1.abbreviation" />
                </el-form-item>
                <el-form-item label="备注" style="width: 100%;margin-bottom: 24px;" size="small" prop="remark">
                    <el-input type="textarea" :rows="2" placeholder="请填写备注信息 (200字以内)" v-model="formList1.remark" />
                </el-form-item>
            </el-form>
            <div class="harvestinformation">
                <span class="span1">|</span>
                <span>收货信息</span>
            </div>
            <div v-for="(addressList, index) in addressLists" :key="addressList.id">
                <el-form label-position="top" style="min-height: 500px;" :model="addressList" ref="addressForm"
                    :rules="rules">
                    <div style="display: flex; justify-content: flex-end;" v-if="addressLists.length > 1">
                        <el-button @click="addressLists.splice(index, 1)" link type="danger"
                            size="small">删除此条</el-button>
                    </div>
                    <div class="Form2" style="display: flex; flex-direction: column; align-items: center;">
                        <el-form-item label="配送地址名称" style="width: 440px; margin-bottom: 24px; margin-top: 24px;"
                            size="small" prop="address">
                            <el-input v-model="addressList.address" style="width: 100%;" placeholder="请填写" />
                        </el-form-item>
                        <el-form-item label="联系人" style="width: 440px; margin-bottom: 24px;" size="small"
                            prop="contact">
                            <el-input v-model="addressList.contact" style="width: 100%;" placeholder="请填写" />
                        </el-form-item>
                        <el-form-item label="联系人电话" style="width: 440px; margin-bottom: 24px;" size="small"
                            prop="phone">
                            <el-input v-model="addressList.phone" style="width: 100%;" placeholder="请填写" />
                        </el-form-item>
                        <el-form-item label="所在地区" style="width: 440px; margin-bottom: 24px;" size="small"
                            prop="region">
                            <el-select v-model="addressList.region" style="width: 30%;" placeholder="请选择">
                                <el-option label="重庆" value="重庆"></el-option>
                                <el-option label="北京" value="北京"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="详细地址" style="width: 440px; margin-bottom: 24px;" size="small"
                            prop="detailedAddress">
                            <el-input v-model="addressList.detailedAddress" style="width: 100%;" type="textarea"
                                :rows="3" placeholder="请输入详细地址" />
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <el-row type="flex" justify="center" align="middle">
                <el-button size="small" style="width: 100%; border: 1px dashed #ccc;" @click="addForm">+ 新增</el-button>
            </el-row>
            <el-row type="flex" justify="end" align="middle" style="margin-top: 24px;">
                <el-button type="primary" size="small" @click="btnOk">确定</el-button>
                <el-button size="small" @click="btnCancel">取消</el-button>
            </el-row>
        </el-dialog>
    </div>
</template>


<script setup lang="ts" name="AddCustomer">
import { ref, reactive, watch, computed, } from 'vue';
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
interface addressItem {
    id: number
    address: string
    contact: string
    phone: string
    region: string
    detailedAddress: string
}
interface customerData {
    id: number
    attribute: string
    type: string
    group: string
    name: string
    abbreviation?: string
    remark?: string
    addresses?: addressItem[]
    organization: string
}
const props = defineProps({
    id: {
        type: Number,
        default: 0
    
    }
})
const emit = defineEmits(['update:id'])
const resetId = () => {
    emit('update:id', 0)
}

const formList1 = reactive(
    {
    attribute: '',
    type: '',
    group: '',
    organization: '',
    name: '',
    abbreviation: '',
    remark: ''
    }
);
const dialogVisible = ref(false);
const open = () => {
    dialogVisible.value = true;
}
watch(() => props.id, (newId) => {
    // 编辑
    if (newId !== 0) {
        dialogVisible.value = true
        console.log(newId);
        
    // 新增
    } else {

    }
}, { immediate: true })
const showTitle = computed(() => {
    return props.id === 0 ? '新增客户' : '编辑客户'
 })
const clearForm = () => { 
     nextId = 1
        addressLists.value = [{
            id: nextId++,
            address: '',
            contact: '',
            phone: '',
            region: '',
            detailedAddress: ''
        }]
}
let nextId = 1 
const addressLists = ref(
    [{
        id:nextId++,
        address: '',
        contact: '',
        phone: '',
        region: '',
        detailedAddress: ''
    }]
)
const addForm = () => {
    addressLists.value.push({
        id:nextId++,
        address: '',
        contact: '',
        phone: '',
        region: '',
        detailedAddress: ''
    })
}
const openEdit = (data: customerData) => {
    formList1.attribute = data.attribute || ''
    formList1.type = data.type || ''
    formList1.group = data.group || '' 
    formList1.name = data.name || ''
    formList1.remark = data.remark || ''
    formList1.abbreviation = data.abbreviation || ''
    formList1.organization = data.organization || ''
   if (data.addresses && Array.isArray(data.addresses) && data.addresses.length > 0) {
        nextId = 1
        addressLists.value = data.addresses.map((addr:addressItem) => ({
            id: nextId++,
            address: addr.address || '',
            contact: addr.contact || '',
            phone: addr.phone || '',
            region: addr.region || '',
            detailedAddress: addr.detailedAddress || ''
        }))
    } else {
        nextId = 1
        addressLists.value = [{
            id: nextId++,
            address: '',
            contact: '',
            phone: '',
            region: '',
            detailedAddress: ''
        }]
    }
    
    dialogVisible.value = true
}
const formOne = ref()
const addressForm = ref<FormInstance[]>([])

const btnOk = async () => {
    try {
        const validations = [
            formOne.value?.validate(),
            ...addressForm.value.map(form => form?.validate())
        ]
        await Promise.all(validations) 
        ElMessage.success('添加成功')
        formOne.value?.resetFields()
        addressForm.value.forEach(form => form?.resetFields())
        dialogVisible.value = false
        clearForm()
       resetId()
    } catch {
        ElMessage.error('请填写完整信息')
    }
}
const btnCancel = () => {
        formOne.value?.resetFields()
        addressForm.value.forEach(form => form?.resetFields())
        dialogVisible.value = false;
    clearForm()
        resetId()
}
const rules = reactive({
    attribute: [
        { required: true, message: '请选择客户属性', trigger: 'blur' }
    ],
    type: [
        { required: true, message: '请选择客户类型', trigger: 'blur' }
    ],
    group: [
        { required: true, message: '请选择客户分组', trigger: 'blur' }
    ],
    organization: [
        { required: true, message: '请选择客户所属组织', trigger: 'blur' }
    ],
    name: [
        { required: true, message: '请填写客户名称', trigger: 'blur' }
    ],
    abbreviation: [
        { required: true, message: '请填写客户简称', trigger: 'blur' }
    ],
    remark: [
        { required: true, message: '请填写备注信息', trigger: 'blur' },
        { max: 200, message: '备注信息不能超过200字', trigger: 'blur' }
    ],
    address: [
        { required: true, message: '请填写配送地址名称', trigger: 'blur' }
    ],
    contact: [
        { required: true, message: '请填写联系人', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '请填写联系人电话', trigger: 'blur' }
    ],
    region: [
        { required: true, message: '请选择所在地区', trigger: 'blur' }
    ],
    detailedAddress: [
        { required: true, message: '请填写详细地址', trigger: 'blur' }
    ]
})

defineExpose({ open,openEdit })
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
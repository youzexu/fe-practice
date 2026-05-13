<template>
    <div>
       <el-dialog v-model="dialogVisible" title="新增客户" width="520" @close="btncancel">
            <el-form label-width="120px" label-position="top" style="min-height: 600px;" :model="formList1"
                ref="FormOne" :rules="rules">
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
                            prop="detailedaddress">
                            <el-input v-model="addressList.detailedaddress" style="width: 100%;" type="textarea"
                               :rows="3" placeholder="请输入详细地址" />
                        </el-form-item>
                    </div>
                </el-form>
           </div>
            <el-row type="flex" justify="center" align="middle">
               <el-button size="small" style="width: 100%; border: 1px dashed #ccc;" @click="AddForm">+ 新增</el-button>
            </el-row>
            <el-row type="flex" justify="end" align="middle" style="margin-top: 24px;">
               <el-button type="primary" size="small" @click="btnOk">确定</el-button>
                <el-button size="small" @click="btncancel">取消</el-button>
            </el-row>
        </el-dialog>
    </div>
</template>


<script setup lang="ts" name="AddCustomer">
import { ref, reactive } from 'vue';
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
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
let nextid = 1 
const addressLists = ref(
    [{
        id:nextid++,
        address: '',
        contact: '',
        phone: '',
        region: '',
        detailedaddress: ''
    }]
)
const AddForm = () => {
    addressLists.value.push({
        id:nextid++,
        address: '',
        contact: '',
        phone: '',
        region: '',
        detailedaddress: ''
    })
}
const FormOne = ref()
const addressForm = ref<FormInstance[]>([])

const btnOk = async () => {
    try {
        const validations = [
            FormOne.value?.validate(),
            ...addressForm.value.map(form => form?.validate())
        ]
        await Promise.all(validations) 
        ElMessage.success('添加成功')
        FormOne.value?.resetFields()
        addressForm.value.forEach(form => form?.resetFields())
        dialogVisible.value = false
        nextid = 1
        addressLists.value = [{
            id: nextid++,
            address: '',
            contact: '',
            phone: '',
            region: '',
            detailedaddress: ''
        }]
    } catch {
        ElMessage.error('请填写完整信息')
    }
}
const btncancel = () => {
        FormOne.value?.resetFields()
        addressForm.value.forEach(form => form?.resetFields())
        dialogVisible.value = false;
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
    detailedaddress: [
        { required: true, message: '请填写详细地址', trigger: 'blur' }
    ]
})

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
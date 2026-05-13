<template>
    <div class="customer-info">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="客户属性：">
                <el-select v-model="formInline.region" placeholder="请选择客户属性" clearable style="width: 299px;">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户类型：">
                <el-select v-model="formInline.region1" placeholder="请选择客户类型" clearable style="width: 299px;">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户分组：">
                <el-select v-model="formInline.region2" placeholder="请选择客户分组" clearable style="width: 299px;">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="客户名称/姓名：">
                <el-input v-model="formInline.user" placeholder="请输入" clearable style="width: 263px;" />
            </el-form-item>
            <el-form-item label="客户简称/别名：">
                <el-input v-model="formInline.user1" placeholder="请输入" clearable style="width: 263px;" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="onSubmit">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="bottom-menu">
        <el-button class="btn-export" size="small" type="primary">导出</el-button>
        <el-button class="btn-add" size="small" @click="addCustomer">新增客户</el-button>
        <div class="bottom-menu1">
            <!-- 表格 -->
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="coding" label="客户财务编码" width="180" />
                <el-table-column prop="attribute" label="客户属性" width="180" />
                <el-table-column prop="type" label="客户类型" width="160" />
                <el-table-column prop="grouping" label="客户分组" width="160" />
                <el-table-column prop="name" label="客户名称/姓名" width="160" />
                <el-table-column prop="remark" label="备注" width="180" show-overflow-tooltip />
                <el-table-column prop="address" label="操作" width="250">
                   <el-button link type="primary" size="small" @click="Viewaddress">查看配送地址</el-button>
                    <el-button link type="primary" size="small" @click="Edit">编辑</el-button>
                </el-table-column>
            </el-table>
            <el-row type="flex" justify="end" align="middle">
                <el-pagination size="small" background layout="prev, pager, next" :total="50" class="mt-4" />
            </el-row>
        </div>
        <!-- 查看配送地址 -->
        <el-dialog v-model="showDialog" title="查看配送地址" width="500">
           <el-from>
               <el-divider />
                <div class="harvestinformation">
                    <span class="span1">| </span>
                    <span>收货信息1</span>
                </div>
                <div class="Receivingaddress">
                    <span>配送收货地址名称：{{}}</span>
                </div>
                <div class="Contact">
                    <span>联系人：{{}}</span>
                </div>
                <div class="Contactnumber">
                    <span>联系电话：{{}}</span>
                </div>
                <div class="Location">
                    <span>所在地区：{{}}</span>
                </div>
                <div class="detailedaddress">
                    <span>详细地址：{{}}</span>
                </div>
                <div class="harvestinformation">
                    <span class="span1">| </span>
                    <span>收货信息2</span>
                </div>
                <div class="Receivingaddress">
                    <span>配送收货地址名称：{{}}</span>
                </div>
                <div class="Contact">
                    <span>联系人：{{}}</span>
                </div>
                <div class="Contactnumber">
                    <span>联系电话：{{}}</span>
                </div>
                <div class="Location">
                    <span>所在地区：{{}}</span>
                </div>
                <div class="detailedaddress">
                    <span>详细地址：{{}}</span>
                </div>
               <el-divider />
                <el-row type="flex" justify="end" align="middle">
                    <el-button @click="showDialog = false">
                        关闭
                    </el-button>
               </el-row>
            </el-from>
        </el-dialog>
    </div>
    <!-- 添加客户 -->
   <Add-customer ref="subinstance" />
</template>


<script setup lang="ts" name="Customer-Info">
import AddCustomer from './components/Add-customer.vue'

import { reactive, ref } from 'vue';
const formInline = reactive({
  user: '',
  user1: '',
  region: '',
  region1: '',
  region2: '',
  date: '',
})
const showDialog = ref( false)

const subinstance = ref()

const addCustomer = () => {
    subinstance.value.open()
}
const onSubmit = () => {
    Object.assign(formInline, {
        user: '',
        user1: '',
        region: '',
        region1: '',
        region2: '',
        date: ''
    })
}
const Viewaddress = () => {
  showDialog.value = true
}
const Edit = () => {
  console.log('edit!')
}
const tableData = [
  {
    coding: '40999999911',
    attribute: '外部',
    grouping: '商超',
    name: '加剋夫',
    remark: '我带我活动i啊我都i啊我活动kkkk',
    type: '个人',
  },
  {
    coding: '40999999912',
    attribute: '外部',
    grouping: '上群',
    name: '好又多',
    remark: '备注',
     type: '个人',
  },
  {
    coding: '40999999913',
    attribute: '内部',
    grouping: '社群',
    name: '中百大潮',
    remark: '备注',
     type: '个人',
  },
  {
    coding: '40999999914',
    attribute: '内部',
    grouping: '团建',
    name: '加号团建',
    remark: '备注',
     type: '个人',
  },
 {
    coding: '40999999915',
    attribute: '内部',
    grouping: '社群',
    name: '重庆批发',
    remark: '备注',
     type: '个人',
  },
 {
    coding: '40999999915',
    attribute: '内部',
    grouping: '社群',
    name: '重庆批发',
    remark: '备注',
     type: '个人',
  },
]


</script>

<style scoped>
.customer-info {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
}

.bottom-menu {
    margin-top: 20px;
    background: #FFFFFF;
    height: 459px;
}

.bottom-menu1 {
    height: 323px;
    margin-bottom: 72px;
    margin-left: 24px;
    margin-right: 24px;
}

.btn-export {
    width: 60px;
    height: 32px;
    margin-left: 24px;
    margin-top: 16px;
    margin-bottom: 16px;
}

.btn-add {
    margin-right: 10px;
    margin-top: 16px;
    width: 88px;
    height: 32px;
    margin-bottom: 16px;
}

.mt-4 {
    margin-top: 20px;
    margin-right: 30px;
}

.Receivingaddress {
    margin-top: 16px;
}

.harvestinformation {
    margin-top: 24px;
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    color: black
}

.Contact {
    margin-top: 16px;
}

.Contactnumber {
    margin-top: 16px;
}

.Location {
    margin-top: 16px;
}

.detailedaddress {
    margin-top: 16px;
}

.span1 {
    color: #0065FE;
    font-weight: 900;
    font-size: 18px;
}
</style>
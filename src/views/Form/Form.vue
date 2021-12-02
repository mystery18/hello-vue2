<template>
  <div class="">
    <h2>form</h2>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="email"
        label="邮箱："
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <!-- 动态增加 -->
      <el-form-item label="关联素材：">
        <el-button type="text" @click="addDomain">+ 添加</el-button>
        <!-- <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button> -->
        <div
          v-for="(material, index) in dynamicValidateForm.materialList"
          :key="material.key"
        >
          <el-form-item
            :prop="'material.' + index + '.name'"
            :rules="{
              required: true, message: '素材名字不能为空', trigger: 'blur'
            }"
          >
            <el-input v-model="material.name"></el-input><el-button @click.prevent="removeDomain(index)">删除</el-button>
          </el-form-item>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        materialList: [],
        email: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(index) {
      this.dynamicValidateForm.materialList.splice(index, 1)
      // var index = this.dynamicValidateForm.materialList.indexOf(item)
      // if (index !== -1) {
      //   this.dynamicValidateForm.materialList.splice(index, 1)
      // }
    },
    addDomain() {
      this.dynamicValidateForm.materialList.push({
        name: '',
        key: Date.now() // 每新增一行，都要有一个唯一个key
      });
    }
  }
}
</script>

<style scoped>
.el-form {
  width: 1000px;
  margin: 0 auto;
}
</style>

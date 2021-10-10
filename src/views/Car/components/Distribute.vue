<template>
  <div>
    <el-table class="tableBox" :data="tableData" v-loading="isLoading">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="from" label="来自" width="100"> </el-table-column>
      <el-table-column prop="address" label="地址" width="100">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="160"> </el-table-column>
    </el-table>
    <!-- total是总记录数，page-size是每页大小，分页组件会自动根据 total和page-size计算出要分多少页 -->
    <!-- @size-change="handleSizeChange" 的作用是：每当每页大小改变后，会触发执行这个handleSizeChange函数 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="page_size"
      :total="tableData.length"
      layout="total, prev, pager, next"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from '@/api/base'
export default {
  data () {
    return {
      tableData: [],
      isLoading: false,
      page: 1,
      page_size: 3
    }
  },
  methods: {
    async getData () {
      this.isLoading = true
      try {
        // const { data } = await getTableData({
        //   order_id: this.$route.params.id,
        //   page: this.page,
        //   page_size: this.page_size
        // })
        const { data } = await getTableData()
        this.tableData = data.data
        this.$emit('OnceRequest')
      } catch (err) {
        console.log(err)
      }
      this.isLoading = false
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.tableBox {
  margin-bottom: 15px;
}
</style>
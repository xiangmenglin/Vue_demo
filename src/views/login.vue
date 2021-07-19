<template>
  <div>
  <div>
    <el-table
      :data="users"
      stripe
      style="width:  100%">
      <el-table-column
        prop="teacher_id"
        label="id">
      </el-table-column>
      <el-table-column
        prop="teacher_name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="teacher_dept_id"
        label="系部id">
      </el-table-column>
      <el-table-column
        prop="teacher_title"
        label="职称">
      </el-table-column>
      <el-table-column
        prop="teacher_tel"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="teacher_address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="teacher_email"
        label="邮箱地址">
      </el-table-column>
    </el-table>
  </div>
  </div>

</template>
<script>

  export default {
    name: "login",
    data() {
      return {
        users:[

        ]
      }
    },
    created() {
      const _this = this
      this.$axios.get('http://localhost:6934/teacher/getAll0').then(function(resp){
        _this.users = resp.data
      })
    }
  }
</script>
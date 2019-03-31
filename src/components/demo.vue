<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <div v-for="(item,index) in demo" :key="index">
        <el-form>
          <el-form-item label="活动名称">
            <el-input v-model="item.name"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "" },
      demo: [{ name: "" }]
    };
  },
  methods: {
    onSubmit() {
        console.log(this.demo)
        console.log(this.form)
    }
  }
};
</script>
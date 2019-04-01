<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div v-for="(item,index) in obj" :key="index">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="item.age"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: [{ name: "z3", age: "12" }, { name: "l3", age: "hah" }],
      rules: [],
      ruleForm: []
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          for (let i = 0; i < this.obj.length; i++) {
            switch (this.obj[i].name) {
              case "z3":
                let rgb = /^[0-9]*$ /;
                console.log(rgb.test(this.obj[i].age));
                break;
              case "l3":
                let tgb = /^[0-9]*$/;
                console.log(tgb.test(this.obj[i].age));
                break;
            }
          }

          alert("submit!");
        } else {
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
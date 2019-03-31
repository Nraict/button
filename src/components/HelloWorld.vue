<template>
  <div>
    <el-button @click="addMore">按钮</el-button>

    <!-- 弹出层 -->
    <el-dialog title="证件详情" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="请选择证件类型">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option v-for="(item,index) in gridData" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="determine">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 列表详情页面 -->
    <div v-for="(item,index) in lists" :key="index">
      <el-form ref="bbq" :model="bbq" label-width="80px" v-if="someLike">
        <el-form-item label="证件名称">
          <el-input v-model="item.name" style="width : 200px" disabled></el-input>
        </el-form-item>
        <el-form-item label="证件编号">
          <el-input v-model="item.num" style="width : 200px"></el-input>
        </el-form-item>
        <el-form-item label="签发国">
          <el-input v-model="item.china" style="width : 200px"></el-input>
        </el-form-item>
        <el-form-item label="有效期">
          <el-input v-model="item.time" style="width : 200px"></el-input>
        </el-form-item>
        <el-button type="warning" @click="removeAdd(index,item.name)">删除</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someLike: true,
      someName: "",
      bbq: null,
      gridData: [
        "身份证",
        "护照",
        "签证",
        "港澳通行证",
        "台湾通行证",
        "户口本",
        "证件"
      ],
      dialogFormVisible: false,
      form: {
        region: ""
      },
      lists: [
        { name: "身份证", num: 1, china: 1, time: 1 },
        { name: "护照", num: 1, china: 1, time: 1 }
      ] // 循环证件列表
    };
  },
  methods: {
    addMore() {
      if (this.lists) {
        for (let i = 0; i < this.lists.length; i++) {
          this.gridData.splice(this.gridData.indexOf(this.lists[i].name), 1);
        }
      }

      this.dialogFormVisible = true;
      this.form.region = "";
      console.log(this.gridData);
    },
    determine() {
      this.someName = this.gridData.splice(
        this.gridData.indexOf(this.form.region),
        1
      );
      console.log(this.gridData);
      let obj = { name: this.someName[0], num: "", china: "", time: "" };
      this.lists.push(obj);
      this.someLike = true;
      this.dialogFormVisible = false;
    },
    removeAdd(index, val) {
      let arr = this.lists.splice(index, 1);
      this.gridData.push(arr[0].name);
    }
  },
  created() {
    console.log();
  }
};
</script>
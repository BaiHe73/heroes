<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="heroname" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="herogender" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">提交</button>
    </form>
  </div>
</template>
<script>
 import axios from 'axios';
 export default{
  props : ['id'],
  data() {
    return {
      // 1 绑定文本框的数据 为post传递的参数
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  created() {
    this.handleHero();
  },
  methods: {
    handleHero() {
       axios
        .get(`http://localhost:3000/heroes/${ this.id }`)
        .then((response) => {
          if(response.status === 200) {
            this.formData = response.data;
          } else {
            alert('修改失败');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 2 添加英雄处理函数
    handleEdit() {
      axios
        .put(`http://localhost:3000/heroes/${ this.id }`,this.formData)
        .then((response) => {
          if(response.status === 200) {
            this.$router.push('/heroes');
            // this.handleHero;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
 };
</script>
<style>

</style>

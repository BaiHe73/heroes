<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
          <!-- <a class="btn btn-success" href="">添加</a> -->
          <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(items, index) in list" :key="items.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ items.name }}</td>
                  <td>{{ items.gender }}</td>
                  <td>
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      axios
        .get('http://localhost:3000/heroes')
        .then((response) => {
          // console.log(response);
          if(response.status == 200) {
            this.list = response.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
</script>
<style>

</style>

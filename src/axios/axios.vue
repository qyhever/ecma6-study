<template>
  <div>
    <a href="javascript:;" class="btn btn-primary" @click="get">Get请求</a>
    <a href="javascript:;" class="btn btn-primary" @click="post">Post请求</a>
    <a href="javascript:;" class="btn btn-primary" @click="multiple">multiple</a>
    <a href="javascript:;" class="btn btn-primary" @click="axiosApi">axiosApi</a>
    <a href="javascript:;" class="btn btn-primary" @click="asyncReq">async/await</a>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  axios.defaults.baseURL = 'http://localhost:3000';
  export default {
    created() {
    },
    methods: {
      get() {
        let params = { id: 10001 };
        axios.get('/get', {
          params
        }).then(res => {
          console.log(res.data);
        });
      },
      post() {
        let params = { id: 10001, type: 'delete' };
        axios.post('/post', qs.stringify(params), {
          headers: {}
        }).then(res => {
          console.log(res.data);
        });
      },
      multiple() {
        axios.all([axios.get('/user'), axios.get('/goods')]).then(axios.spread((acct, perms) => {
          console.log(acct.data)
          console.log(perms.data)
        }));
      },
      axiosApi() {
        let params = { id: 10001, type: 'delete' };
        axios({
          method: 'post',
          url: '/post',
          data: qs.stringify(params)
        }).then(res => {
          console.log(res.data);
        });
      },
      asyncReq: async () => {
        // try {
        //   const response = await axios.get('/get?ID=12345');
        //   console.log(response.data);
        // } catch (error) {
        //   console.error(error);
        // }
        try {
          let params = { id: 10001, type: 'delete' };
          const response = await axios.post('/post', qs.stringify(params));
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
</script>

<style>

</style>
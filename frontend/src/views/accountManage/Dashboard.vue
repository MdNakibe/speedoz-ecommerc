<template>
    <div class="my-account-dashboard">
      <div class="inner">
        <div class="row">
          <!-- <div class="col-md-4 mb-3" v-for="card in cards" :key="card.title"> -->
          <div class="col-md-12 mb-3">
            <h3>Welcome {{ info.name }} Speedoz User Dashboard (<span @click="logout">Log out</span>)</h3> 
            <!-- <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <a><img :src="card.imgSrc"></a>
                </div>
                <h2>{{ card.title }}</h2>
                <p>{{ card.description }}</p>
              </div>
            </div> -->
            <!-- <div class="gi-single-cart mt-4">
              <button class="btn btn-primary gi-btn-1" >Log out</button>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      info(){
        return this.$store.getters['customerLogin/GET_AUTH_INFO'];
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('customerLogin/logout')
        .then(() => {
          this.$router.push('/login');
        })
        .catch((error) => {
          // Handle errors if any
          console.error(error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
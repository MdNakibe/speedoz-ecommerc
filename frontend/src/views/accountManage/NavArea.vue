<template>
    <!-- <div class="nav-area">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" v-for="tab in tabs" :key="tab.name">
          <a 
            class="nav-link" 
            :class="{ active: tab.component === currentTab }" 
            @click.prevent="switchTab(tab.component)" 
            href="#">
            <i class="fas" :class="getIcon(tab.name)"></i> 
            <span>{{ tab.name }}</span>
          </a>
        </li>
      </ul>
    </div> -->
    <div class="gi-sidebar-wrap gi-border-box gi-sticky-sidebar">
      <div class="gi-vendor-block-items">
          <ul>
              <li v-for="tab in tabs" :key="tab.name"><a :class="{ active: tab.component === currentTab }" 
                @click.prevent="switchTab(tab.component)"  href="#">{{ tab.name }}</a></li>
          </ul>
      </div>
  </div>
  </template>
  
  <script>
  export default {
    props: ['tabs', 'currentTab'],
    methods: {
      switchTab(tab) {
        this.$emit('switch-tab', tab);
      },
      getIcon(tabName) {
        switch (tabName) {
          case 'Dashboard':
            return 'fa-tachometer-alt';
          case 'Orders':
            return 'fa-file-invoice';
          case 'Address':
            return 'fa-map-marker-alt';
          case 'Account Details':
            return 'fa-user-alt';
        //   case 'Logout':
        //     return 'fa-sign-out-alt';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  #myTab{
    margin-left: 10%;
    margin-bottom: 2%;
  }
  .nav-item{
    border-radius: 25px;
    color: white;
    background: red;
    margin-left: 2%;
  }
  .nav-item .active{
    border-radius: 25px;
    color: white;
    background: black;
  }
  .gi-vendor-block-items ul li{
    margin-top:10px;
  }
  .gi-vendor-block-items ul li{
    margin-left:10px;
  }
  .gi-vendor-block-items ul li a.active{
    text-decoration: none;
    outline: none;
    color: red;
  }
  .gi-vendor-block-items ul li a{
    text-decoration: none;
    outline: none;
    color: rgb(241, 195, 195);
  }
  </style>
  
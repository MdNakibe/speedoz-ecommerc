<template>
  <div class="container">
      <div class="row mb-minus-24px">
          <div class="col-lg-3 col-md-12 mb-5">
            <NavArea :tabs="tabs" :currentTab="currentTab" @switch-tab="switchTab" />
          </div>
          <div class="col-lg-9 col-md-12 mb-24">
            <component :is="currentTabComponent"></component>
          </div>
      </div>
  </div>
</template>
  
  <script>
  // import AccountBanner from './AccountBanner.vue';
  import NavArea from './NavArea.vue';
  import Dashboard from './Dashboard.vue';
  import Orders from './Orders.vue';
  // import Address from './Address.vue';
  // import AccountDetails from './AccountDetails.vue';
//   import Logout from './Logout.vue';
  
  export default {
    components: {
      // AccountBanner,
      NavArea,
      Dashboard,
      Orders,
      // Address,
      // AccountDetails,
    //   Logout
    },
    data() {
      return {
        tabs: [
          { name: 'Dashboard', component: 'Dashboard' },
          { name: 'Orders', component: 'Orders' },
          // { name: 'Address', component: 'Address' },
          // { name: 'Account Details', component: 'AccountDetails' },
        //   { name: 'Logout', component: 'Logout' }
        ],
        currentTab: 'Dashboard'
      };
    },
    computed: {
      currentTabComponent() {
        return this.currentTab;
      }
    },
    methods: {
      switchTab(tab) {
        this.currentTab = tab;
      }
    }
  };
  </script>

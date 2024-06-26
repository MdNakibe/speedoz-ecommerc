<template>
    <Header  v-if="loggedInStatus" />

    <Sidebar v-if="loggedInStatus" />
    <router-view />

</template>
<script>
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
export default {
  components:{
    Header,
    Sidebar
  },
  data() {
    return {
      hastoken: false,
    }
  },
  computed:{
    loggedInStatus(){
      return this.$store.getters['user/GET_AUTH_TOKEN'];
    },
  },
}
</script>


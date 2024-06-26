<template>
    <div>
      <Headers />
        <router-view/>
      <Footer />
    </div>
    
  
</template>
<script>
import Headers from './views/layouts/header.vue';
import Footer from './views/layouts/footer.vue';
export default {
  components:{
    Headers,
    Footer,
  },

 
  
}
</script>

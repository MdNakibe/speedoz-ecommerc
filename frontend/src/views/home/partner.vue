<template>
  <!-- Client Logo -->
  <section class="clients-wrapper wow fadeInUp" data-wow-delay="0.2s">
    <div class="container">
      <div class="section-head text-center">
        <h4 class="gi-title"><span>OUR</span> BRANDS</h4>
        <!-- <h4 class="title">OUR BRANDS</h4> -->
      </div>
      <div class="swiper clients-swiper" v-if="this.$store.getters['home/brands']">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(brand, ind) in this.$store.getters['home/brands']"
            :key="ind"
          >
            <div class="clients-logo" @click="brandProduct(brand)">
              <img
                class="logo-main"
                :src="`${$store.state.hostName}${brand.image}`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Client Logo -->
</template>
<script>
export default {
  methods: {
    async brandProduct(brand){
      let slug = brand.name.toLowerCase().replace(/\s+/g, '-');
      // Remove special characters
      slug = slug.replace(/[^\w\-]+/g, '');
      let success =  await this.$store.dispatch('home/brandProduct', {brand_id: brand.id});
      this.$router.push('/brand/' + slug);
    }
  },
}
</script>

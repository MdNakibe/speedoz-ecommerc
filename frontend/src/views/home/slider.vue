<template>
  <!-- <section class="content-inner-2 section-pattren1"> -->
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(slider, ind) in this.$store.getters['home/sliders']"
        :key="ind"
        :class="{ active: ind === 0 }"
      >
        <div class="slider_item-box">
          <div class="slider_item-container">
            <div class="container">
              <div class="row">
                <div class="col-md-6 order-md-1 order-2">
                  <div class="slider_item-detail">
                    <div>
                      <h1 class="title">
                        {{ slider.main_text }}
                      </h1>
                      <p>
                        {{ slider.description }}
                      </p>
                      <div class="d-flex">
                        <router-link
                          :to="'/' + slider.url"
                          class="text-uppercase custom_orange-btn mr-3"
                        >
                          Shop Now
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 order-md-2 order-1">
                  <div class="slider_img-box">
                    <div>
                      <img
                        :src="`${$store.state.hostName}${slider.image}`"
                        alt=""
                        class=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom_carousel-control">
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="sr-only" aria-hidden="true">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="sr-only" aria-hidden="true">Next</span>
      </button>
    </div>
  </div>
  <!-- </section> -->
</template>
<script>
export default {
  async created() {
    this.$store.dispatch("home/getSlider");
  },
};
</script>
<style>
@media (max-width: 767px) {
  .custom_orange-btn {
      margin-right: 62px;
  }
  .slider_item-container .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .slider_item-container .col-md-6 {
    width: 100%;
  }

  .slider_item-container .slider_img-box {
    margin-bottom: 20px;
  }

  .slider_item-container .slider_img-box img {
    width: 100%;
    height: auto;
  }
}
</style>

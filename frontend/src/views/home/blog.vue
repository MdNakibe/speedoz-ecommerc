<template>
    <!-- Our Blog  -->
		<section class="content-inner-2 section-pattren1">
			<div class="container">
				<div class="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
					<h4 class="gi-title"><span>SPEEDOZ</span> NEWS</h4>
					<p>Discover news on upcoming model releases, in-depth reviews, special promotions, and expert advice to enhance your riding experience.</p>
				</div>
				<div class="swiper blog-slider-full">
					<div class="swiper-wrapper m-b5" v-if="this.$store.getters['aditiondata/limitNews']">
						<div class="swiper-slide" v-for="(news, ind) in this.$store.getters['aditiondata/limitNews']" :key="ind">
							<div class="dz-card style-1 wow fadeInUp" data-wow-delay="0.6s">
								<div class="dz-media">
									<img :src="`${$store.state.hostName}${news.image}`"  alt="">
									<!-- <ul class="dz-badge-list">
										<li><a href="javascript:void(0);" class="dz-badge">EDUCATION</a></li>
									</ul> -->
									<button type="button" class="btn btn-secondary" @click="newsDetails(news)">Read More</button>
								</div>
								<div class="dz-info">
									<h5 class="dz-title">{{ news.title }}</h5>
									<p>{{ news.sort_description }}</p>
									
									<!-- <div class="author-wrappper">
										<div class="author-media">
											<img src="images/avatar/avatar4.jpg" alt=""> 
										</div>
										<div class="author-content">
											<div class="author-head">
												<h6 class="author-name">Adam Jordon</h6>
											</div>
											<ul class="author-meta">
												<li class="date">November 21th, 2022</li>
											</ul>
										</div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Our Blog End  -->
</template>
<script>
export default {
	data() {
        return {
            data:null
        }
    },
	async created() {
        this.$store.dispatch("aditiondata/getNewsData",{type: 1});
		this.newsDetails(null);
    },
	methods: {
        newsDetails(data){
			this.data = data;
            console.log(this.data, data)
            if(this.data){
				console.log(data)
                this.$store.dispatch('aditiondata/newsDetails', data);
                this.$router.push('/news/' + data.slug);
				this.data = null;
            }
        }
    },
}
</script>
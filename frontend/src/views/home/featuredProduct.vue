<template>
    <!-- Main container section -->
		<section class="gi-main-container">
			<div class="container">
				<div class="row">
						<div class="col-xl-12 col-lg-12 col-md-12">
							<!-- Product tab Area Start -->
							<div class="section-head text-center wow fadeInUp mt-5" data-wow-delay="0.2s">
								<h4 class="gi-title"><span>FEATURED</span> MOTORCYCLE</h4>
								<p>Speedoz Ltd. offers best-in-class motorcycles that come with a hassle-free 2-year engine warranty, ensuring both superior performance and peace of mind.</p>
							</div>
							<div class="gi-product-tab gi-products padding-tb-40 wow fadeInUp" data-wow-duration="2s">
								
								<!-- New Product -->
								
								
									<div class="row m-b-minus-24px">
										<div class="col-xl-3 col-lg-3 col-md-3 gi-banner-side" style="height: auto; margin-bottom: 9px;">
											<div class="gi-banner-block-side gi-banner-block-side-2 gi-banner-block-1 padding-tb-40 wow fadeInUp">
												<!-- <img src="/assets/images/web_banner.jpg" alt="Image"> -->
												<div class="banner-block-side banner-block">
													<div class="banner-content">
														<div class="banner-text">
															<span class="gi-banner-title">Our top most products check it now</span>
														</div>
														<a href="shop-left-sidebar-col-3.html" class="custom_orange-btn">Shop Now</a>
													</div>
												</div>
											</div>
										</div>
										<div class="col-xl-9 col-lg-9 col-md-9">
											<div class="tab-content">
												<!-- 1st Product tab start -->
												<div class="tab-pane fade show active product-block">
													<div class="row">
														<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 gi-product-box" v-for="(featuredProduct, ind) in this.$store.getters['home/featuredProducts']" :key="ind">
																<div class="gi-product-content">
																	<div class="gi-product-inner">
																		<div class="gi-pro-image-outer">
																			<div class="gi-pro-image">
																				<router-link :to="'/product/'+ featuredProduct.url" @click="productDetails(featuredProduct)" class="image">
																				
																					<span class="label veg">
																						<span class="dot"></span>
																					</span>
																					<img class="main-image" :src="`${$store.state.hostName}${featuredProduct.image}`" alt="Product">
																					<img class="hover-image" :src="`${$store.state.hostName}${featuredProduct.image}`" alt="Product">
																				</router-link>
																				<div class="gi-pro-actions">
																					<a class="gi-btn-group wishlist" title="Wishlist"><i class="fa fa-heart"></i></a>
																					<a href="#" class="gi-btn-group quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#gi_quickview_modal" @click="quickView(featuredProduct)" ><i class="fa fa-eye"></i></a>
					
																					<button type="button" title="Add To Cart" class="gi-btn-group add-to-cart" @click="addToCart(featuredProduct)"><i class="fa fa-shopping-cart"></i></button>
																				</div>
																			</div>
																		</div>
																		<div class="gi-pro-content">
																			<h6 class="gi-pro-stitle">{{ featuredProduct.category.name }}</h6>
																			<h5 class="gi-pro-title">
																					<router-link :to="'/product/'+ featuredProduct.url" @click="productDetails(featuredProduct)">{{ featuredProduct.name }}</router-link>
																					</h5>
																			<div class="gi-pro-rat-price">
																				<span class="gi-price">
																					<span class="new-price">৳ {{ featuredProduct.regular_price }}</span>
																					<!-- <span class="old-price">{{ featuredProduct.regular_price }}</span> -->
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
														</div>
														
													</div>
												</div>
												<!-- 1st Product tab end -->
												
											</div>
										</div>
									</div>
							</div>
							<!-- Product tab Area End -->
						</div>
					
				</div>
			</div>
		</section>
        <QuickView v-if="quickViewData"></QuickView>

		<!-- Product Section q- End -->
</template>
<script>
import QuickView from './../layouts/quickview.vue'
export default {
     components:{
        QuickView
    },
   data(){
     return {
		quickViewData: {},
		quantity: 1,
	}
   },
   async created() {
    this.$store.dispatch("home/getFeaturedProducts");
	this.$store.dispatch("home/getPromoVideo");
  },
  computed: {
		filteredCategory() {
			return this.$store.getters['home/promo'];
		},
	},
    methods: {
		addToCart(data) {
			const productData = { ...data, quantity: this.quantity };
            this.$store.dispatch('cart/addToCart', productData);
		},
		quickView(data){
			if(data){
				this.quickViewData = data;
                this.$store.dispatch('home/quickView', data);
				$('#gi_quickview_modal').modal('show');
            }
		},
		productDetails(data){
            if(data){
                this.$store.dispatch('home/productDetails', data);
            }
        }
	},
}
</script>
<style>
.gi-banner-side .gi-banner-block-side-2 {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
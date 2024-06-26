<template>
    <!-- Main container section -->
		<section class="gi-main-container">
			<div class="container mt-5">
				<div class="row">
						<div class="col-xl-12 col-lg-12 col-md-12">
							<div class="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
								<h4 class="gi-title"><span>TOP-SELLING</span> PRODUCTS</h4>
								<p>Explore Speedoz Ltd.'s top-selling products, known for their exceptional performance, durability, and innovative features.</p>
							</div>
						<div class="gi-product-tab gi-products padding-tb-40 wow fadeInUp" data-wow-duration="2s">
							<div class="gi-tab-title">
								<div class="gi-main-title">
									<div class="section-title">
										<div class="section-detail">
											<!-- <h2 class="gi-title">New <span>Arrivals</span></h2> -->
										</div>
									</div>
								</div>
								<!-- Tab Start -->
								<div class="gi-pro-tab">
									<ul class="gi-pro-tab-nav nav">
										<li v-for="(group, typeName) in this.$store.getters['home/offerProduct']" :key="typeName" class="nav-item">
											<!-- Set tab href and active class based on typeName -->
											<a :class="{ 'nav-link': true, 'active': activeTab === typeName }" 
												:data-bs-toggle="`tab-${typeName}`" :href="`#${typeName}`" @click.prevent="handleTabClick(typeName)">{{ group[0].name }}</a>
											</li>
										<!-- <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#alloffer">All</a></li>
										<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#clotheoffer">Clothes</a></li>
										<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#footwearoffer">Footwear</a></li>
										<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#accessoriesoffer">accessories</a></li> -->
									</ul>
								</div>
								<!-- Tab End -->
							</div>
							<!-- New Product -->
							
							
								<div class="row m-b-minus-24px">
									<div class="col-xl-3 col-lg-3 col-md-3 gi-banner-side" style="height: auto; margin-bottom: 9px;">
										<div class="gi-banner-block-side gi-banner-block-side-2 gi-banner-block-1 padding-tb-40 wow fadeInUp">
											<div class="banner-block-side banner-block">
												<div class="banner-content">
													<div class="banner-text">
														<span class="gi-banner-title">Our top most products check it now</span>
													</div>
													<a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Shop Now</a>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-9 col-lg-9 col-md-9">
										<div class="tab-content">
											<!-- 1st Product tab start -->
											<div v-for="(group, typeName) in this.$store.getters['home/offerProduct']" :key="typeName" 
											:id="typeName" class="tab-pane fade" 
											:class="{ 'show active': activeTab === typeName || (activeTab === '' && typeName === Object.keys(this.$store.getters['home/helmatsProduct'])[0]) }">
												<div class="row">
													<div class="col-xl-4 col-lg-4 col-sm-6 col-xs-6 gi-product-box" v-for="(product, ind) in group" :key="ind">
														<div class="gi-product-content">
															<div class="gi-product-inner">
																<div class="gi-pro-image-outer">
																	<div class="gi-pro-image">
																		<a href="product_details.html" class="image">
																			<span class="label veg">
																				<span class="dot"></span>
																			</span>
																			<img class="main-image" :src="`${$store.state.hostName}${product.product.image}`" alt="Product">
																			<img class="hover-image" :src="`${$store.state.hostName}${product.product.image}`" alt="Product">
																		</a>
																		<div class="gi-pro-actions">
																			<a class="gi-btn-group wishlist" title="Wishlist"><i class="fa fa-heart"></i></a>
																				<a href="#" class="gi-btn-group quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#gi_quickview_modal"><i class="fa fa-eye" @click="quickView(product.product)"></i></a>
				
																				<a href="javascript:void(0)" title="Add To Cart" class="gi-btn-group add-to-cart"><i class="fa fa-shopping-cart"></i></a>
																		</div>
																	</div>
																</div>
																<div class="gi-pro-content">
																	<!-- <router-link :to="'/product/'+ product.product.url" @click="productDetails(product.product)">
																		
																		<h6 class="gi-pro-stitle">{{ product.product.name }}</h6>
																	</router-link> -->
																	<h5 class="gi-pro-title">
																		<router-link :to="'/product/'+ product.product.url" @click="productDetails(product.product)">
																		
																			{{ product.product.name }}
																		</router-link>
																		<!-- <router-link :to="'/product/'+ featuredProduct.url" @click="productDetails(featuredProduct)">{{ featuredProduct.name }}</router-link> -->
																	</h5>
																	<div class="gi-pro-rat-price">
																		<!-- <span class="gi-pro-rating">
																			<i class="gicon gi-star fill"></i>
																			<i class="gicon gi-star fill"></i>
																			<i class="gicon gi-star fill"></i>
																			<i class="gicon gi-star fill"></i>
																			<i class="gicon gi-star"></i>
																		</span> -->
																		<span class="gi-price">
																			<span class="new-price">৳ {{ product.product.regular_price }}</span>
																			<!-- <span class="old-price">$87.00</span> -->
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
						</div>
						<!-- Product tab Area End -->
							<!-- Product tab Area End -->
						</div>
				</div>
			</div>
		</section>
		<!-- Product Section q- End -->
        <QuickView v-if="quickViewData"></QuickView>
</template>
<script>
import QuickView from './../layouts/quickview.vue'
export default {
     components:{
        QuickView
    },
    data() {
        return {
            quickViewData: {},
            activeTab: '', 
            helmetProducts: null,
			quantity:1,
        };
  },
  watch: {
    // Watch for changes in the store's helmetProducts
    '$store.getters["home/offerProduct"]': {
      immediate: true, // Run the handler immediately
      handler(newValue) {
        // Set helmetProducts and activeTab once the data is available
        this.helmetProducts = newValue;
        if (this.helmetProducts) {
          // Set activeTab to the first type name if available
          this.activeTab = Object.keys(this.helmetProducts)[0] || '';
        }
      }
    }
  },
    async created() {
    this.$store.dispatch("home/offerProduct");
  },
  methods: {
		handleTabClick(typeName) {
			this.activeTab = typeName;
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
                const productData = { ...data, quantity: this.quantity };
            	this.$store.dispatch('cart/addToCart', productData);
            }
        }
	},
}
</script>
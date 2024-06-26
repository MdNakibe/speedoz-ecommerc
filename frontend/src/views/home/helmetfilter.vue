<template>
    <section class="gi-main-container mt-6" v-if="this.$store.getters['home/helmatsProduct']">
			<div class="container">
				<div class="row">
						<div class="col-xl-12 col-lg-12 col-md-12">
							<!-- Product tab Area Start -->
							<div class="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
								<h4 class="gi-title"><span>FEATURED</span> HELMETS</h4>
								<p>Speedoz Ltd. provides high-quality helmets designed for maximum safety and comfort, ensuring riders are well-protected on every journey.</p>
							</div>
							<div class="gi-product-tab gi-products padding-tb-40 wow fadeInUp" data-wow-duration="2s">
								<div class="gi-tab-title">
									<!-- <div class="gi-main-title">
										<div class="section-title">
											<div class="section-detail">
												<h2 class="gi-title">New <span>Arrivals</span></h2>
											</div>
										</div>
									</div> -->
									<!-- Tab Start -->
									<div class="gi-pro-tab">
										<ul class="gi-pro-tab-nav nav">
                                             <li v-for="(group, typeName) in this.$store.getters['home/helmatsProduct']" :key="typeName" class="nav-item">
                                                <!-- Set tab href and active class based on typeName -->
                                                <a :class="{ 'nav-link': true, 'active': activeTab === typeName }" 
                                                    :data-bs-toggle="`tab-${typeName}`" :href="`#${typeName}`" @click.prevent="handleTabClick(typeName)">{{ group[0].name }}</a>
                                                </li>
											<!-- <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#all">All</a></li>
											<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#clothe">Clothes</a></li>
											<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#footwear">Footwear</a></li>
											<li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#accessories">accessories</a></li> -->
										</ul>
									</div>
									<!-- Tab End -->
								</div>
								<!-- New Product -->
								
								
									<div class="row m-b-minus-24px">
										
										<div class="col-xl-12 col-lg-12 col-md-12">
											<div class="tab-content">
												<!-- 1st Product tab start -->
												<!-- <div class="tab-pane fade show active product-block"  id="all"> -->
                                                <div v-for="(group, typeName) in this.$store.getters['home/helmatsProduct']" :key="typeName" 
                                                        :id="typeName" class="tab-pane fade" 
                                                        :class="{ 'show active': activeTab === typeName || (activeTab === '' && typeName === Object.keys(this.$store.getters['home/helmatsProduct'])[0]) }">
													<div class="row">
														<div class="col-xl-3 col-lg-4 col-sm-6 col-xs-6 gi-product-box" v-for="(product, ind) in group" :key="ind">
															
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
				
																				<a href="javascript:void(0)" title="Add To Cart" @click="addToCart(product.product)" class="gi-btn-group add-to-cart"><i class="fa fa-shopping-cart"></i></a>
																			</div>
																		</div>
																	</div>
																	<div class="gi-pro-content">
																			<h6 class="gi-pro-stitle">{{ product.name }}</h6>
																			<h5 class="gi-pro-title">
																					<router-link :to="'/product/'+ product.product.url" @click="productDetails(product.product)">{{ product.product.name }}</router-link>
																					</h5>
																			<div class="gi-pro-rat-price">
																				<span class="gi-price">
																					<span class="new-price">৳ {{ product.product.regular_price }}</span>
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
			quantity: 1,
        };
  },
  watch: {
    // Watch for changes in the store's helmetProducts
    '$store.getters["home/helmatsProduct"]': {
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
    this.$store.dispatch("home/helmatefilterProduct");
  },
  methods: {
		addToCart(data) {
				const productData = { ...data, quantity: this.quantity };
				this.$store.dispatch('cart/addToCart', productData);
		},
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
                this.$store.dispatch('home/productDetails', data);
            }
        }
	},
}
</script>
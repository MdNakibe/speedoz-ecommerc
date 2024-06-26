<template>
	  <div v-if="checkData" class="modal fade quickview-modal" id="gi_quickview_modal" tabindex="-1" role="dialog">
		
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<button type="button" class="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-5 col-sm-12 col-xs-12 mb-767">
								<div class="single-pro-img single-pro-img-no-sidebar">
									<div class="single-product-scroll">
										<div class="single-slide zoom-image-hover zoomable">
											<img class="img-responsive zoomable__img" :src="`${$store.state.hostName}${checkData.image}`" alt="">
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-7 col-sm-12 col-xs-12">
								<div class="quickview-pro-content">
									<h5 class="gi-quick-title"><a href="product_details.html">{{checkData.name}}</a>
									</h5>
									<!-- <div class="gi-quickview-rating">
										<i class="gicon gi-star fill"></i>
										<i class="gicon gi-star fill"></i>
										<i class="gicon gi-star fill"></i>
										<i class="gicon gi-star fill"></i>
										<i class="gicon gi-star"></i>
									</div> -->

									<div class="gi-quickview-desc" style="text-align: justify;">{{ checkData.sort_description }}</div>
									<div class="gi-quickview-price">
										<span class="new-price">{{ checkData.regular_price }}</span>
										<!-- <span class="old-price">{{checkData.regular_price}}</span> -->
									</div>

									<div class="gi-quickview-qty">
										 <div class="qty-plus-minus">
											<div class="gi-qtybtn" @click="decrementQuantity">-</div>
                                                <input class="qty-input" type="text" name="ms_qtybtn" v-model="quantity">
                                            <div class="gi-qtybtn" @click="incrementQuantity">+</div>
									</div>
									
										<div class="gi-quickview-cart">
											<div class="gi-single-cart" @click="addToCart(checkData)">
												<button class="btn btn-primary gi-btn-1">Add To Cart</button>
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
		
</template>
<script>
export default {
	data() {
        return {
            quantity: 1,
        };
    },
	computed: {
		checkData(){
			this.quantity = 1;
            return this.$store.getters['home/view'];
			 
		}
	},
	methods: {
		addToCart(data) {
			const productData = { ...data, quantity: this.quantity };
            this.$store.dispatch('cart/addToCart', productData);
		},
		incrementQuantity() {
            this.quantity ++;
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity --;
            }
        },
	}
}
</script>
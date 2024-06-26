<template>
<section class="gi-cart-section padding-tb-40">
        <h2 class="d-none">Cart Page</h2>
        <div class="container">
            <div class="row">
                <!-- Sidebar Area Start -->
                <div class="gi-cart-leftside col-lg-12 col-md-12 col-sm-12 m-t-991 mb-4">
                    <!-- cart content Start -->
                    <div class="gi-cart-content">
                        <div class="gi-cart-inner">
                            <div class="row">
                                    <div class="row">
                                        <div class="table-content cart-table-content">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th style="width: 60%;">Product</th>
                                                        <th style="width: 30%;">Price</th>
                                                        <th style="width: 30%;">Quantity</th>
                                                        <th style="width: 30%;">Total</th>
                                                        <th style="width: 10%;">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(data, ind) in cart" :key="ind">
                                                        <td data-label="Product" class="gi-cart-pro-name">
                                                            <img class="gi-cart-pro-img mr-4" style="width: 25%;" :src="`${$store.state.hostName}${data.image}`" alt="">
                                                                {{ data.name }}
                                                        </td>
                                                        <td data-label="Price" class="gi-cart-pro-price">
                                                            <!-- <div class="qty-plus-minus">
                                                                <div class="gi-qtybtn" @click="decrementQuantity">-</div>
                                                                                            <input class="qty-input" type="text" name="ms_qtybtn" v-model="quantity">
                                                                <div class="gi-qtybtn" @click="incrementQuantity()">+</div>
                                                            </div> -->
                                                            <span class="amount">{{ data.regular_price }}</span>
                                                        </td>
                                                        <td data-label="Price" class="gi-cart-pro-price">
                                                            <span class="amount">{{ data.quantity }}</span>
                                                        </td>
                                                        <td data-label="Price" class="gi-cart-pro-price">
                                                            <span class="amount">{{ data.quantity *  data.regular_price}}</span>
                                                        </td>
                                                        <td data-label="Remove" class="gi-cart-pro-remove text-center">
                                                            <button type="button" class="btn btn-outline-secondary btnhover1" @click="removeFromCart(data.id)"><i class="fa fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="gi-cart-update-bottom">
                                                <!-- <a href="#">Continue Shopping</a> -->
                                                <div class="d-flex">
                                                    <router-link to="/check-out" class="router-link-active router-link-exact-active text-uppercase custom_orange-btn mr-3">Check Out</router-link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <!--cart content End -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
		cart(){
			let data = this.$store.getters['cart/cart'];
            console.log(data)
            return  data; 
		}
	},
    methods: {
        // incrementQuantity(index) {
        //     if(this.productDetails.stock){
        //     if(this.productDetails.stock.length > 1){
        //       if(this.quantity >= this.current_stock){
        //         return this.$store.dispatch('notification/error', 'Stock Not Abilable');
        //       }else{
        //         this.cart[index].quantity++;
        //       }
        //     }
        //     else{
        //       if(this.quantity >= this.productDetails.stock[0].current_stock){
        //         return this.$store.dispatch('notification/error', 'Stock Not Abilable');
        //       }else{
        //         this.cart[index].quantity++;
        //       }
        //     }
        //   }
        // },
        // decrementQuantity(index) {
        //     if (this.cart[index].quantity > 1) {
        //         this.cart[index].quantity--;
        //     }
        // },
        removeFromCart(id){
			this.$store.dispatch('cart/removeToCart', id);
		},
    },
}
</script>
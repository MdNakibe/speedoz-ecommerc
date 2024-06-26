<template>
    <section class="gi-checkout-section padding-tb-40">
        <h2 class="d-none">Checkout Page</h2>
        <div class="container">
            <div class="row">
                <!-- Sidebar Area Start -->
                <div class="gi-checkout-leftside col-lg-12 col-md-12 m-t-991">
                   
                    <!-- checkout content Start -->
                    <div class="gi-checkout-content">
                        <div class="gi-checkout-inner">
                            <div class="gi-checkout-wrap m-b-40" v-if="!hasLogin">
                                <div class="gi-checkout-block gi-check-new">
                                    <h3 class="gi-checkout-title">New Customer</h3>
                                    <div class="gi-check-block-content">
                                        <div class="gi-check-subtitle">Checkout Options</div>
                                        <form action="#">
                                            <span class="gi-new-option">
                                                <span>
                                                    <input type="radio" id="Register" name="radio-group" value="register" v-model="checkout.isLogin">
                                                    <label for="Register">Login Account</label>
                                                </span>
                                                <span>
                                                    <input type="radio" id="Guest" name="radio-group" value="guest" v-model="checkout.isLogin">
                                                    <label for="Guest">Guest Account</label>
                                                </span>
                                            </span>
                                        </form>
                                        <div class="gi-new-desc">By creating an account you will be able to shop faster,
                                            be up to date on an order's status, and keep track of the orders you have
                                            previously made.
                                        </div>
                                    </div>
                                </div>
                                <div class="gi-checkout-block gi-check-login" v-if="checkout.isLogin == 'register'">
                                    <h3 class="gi-checkout-title">Returning Customer</h3>
                                    <div class="gi-check-login-form">
                                      <div>
                                        <span class="gi-check-login-wrap">
                                            <label>Phone Number</label>
                                            <input type="text" name="name" placeholder="Enter your email address" v-model="user.phone">
                                        </span>
                                        <span class="gi-check-login-wrap">
                                            <label>Password</label>
                                            <input type="password" name="password" placeholder="Enter your password" v-model="user.password">
                                        </span>
                                        <div class="gi-single-cart">
                                            <button type="button" class="btn btn-primary gi-btn-1" @click="login">Login</button>
                                        </div>
                                      </div>
                                    </div>
                                </div>

                            </div>
                            <div class="gi-checkout-wrap m-b-40 padding-bottom-3 mb-4 mt-4">
                                <div class="gi-checkout-block gi-check-bill">
                                    <h3 class="gi-checkout-title">Billing Details</h3>
                                    <div class="gi-bl-block-content">
                                        <div class="gi-check-bill-form">
                                            <form>
                                                <span class="gi-bill-wrap gi-bill-half">
                                                    <label>Name*</label>
                                                    <input type="text" name="lastname" placeholder="Enter your name" v-model="checkout.name">
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half">
                                                    <label>Phone Number</label>
                                                    <input type="text" name="firstname" placeholder="Enter your Phone Number" v-model="checkout.phone">
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half">
                                                    <label>Email</label>
                                                    <input type="text" name="lastname" placeholder="Enter your email" v-model="checkout.email">
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half mb-4">
                                                    <label>Division</label>
                                                    <model-list-select class="select_sort"
                                                        :list="$store.getters['aditiondata/area']" 
                                                        option-value="id" option-text="name" 
                                                        :placeholder="$store.getters['aditiondata/area'].length > 0 ? 'Select Division' : 'No data found'"
                                                        v-model="division" />
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half mb-4" v-if="distric.length > 0">
                                                    <label>Distric</label>
                                                    <model-list-select class="select_sort"
                                                        :list="distric" 
                                                        option-value="id" option-text="name" 
                                                        :placeholder="distric.length > 0 ? 'Select Distric' : 'No data found'"
                                                        v-model="districData" />
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half mb-4" v-if="upazila.length > 0">
                                                    <label>Upazila</label>
                                                    <model-list-select class="select_sort"
                                                        :list="upazila" 
                                                        option-value="id" option-text="name" 
                                                        :placeholder="upazila.length > 0 ? 'Select Upazila' : 'No data found'"
                                                        v-model="upazilaData" />
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half mb-4" v-if="union.length > 0">
                                                    <label>Union</label>
                                                    <model-list-select class="select_sort"
                                                        :list="union" 
                                                        option-value="id" option-text="name" 
                                                        :placeholder="union.length > 0 ? 'Select Upazila' : 'No data found'"
                                                        v-model="unionData" />
                                                </span>
                                                <span class="gi-bill-wrap gi-bill-half">
                                                    <label>Address</label>
                                                    <input type="text" name="address" placeholder="Address Line" v-model="checkout.address">
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--cart content End -->

                    <div class="gi-sidebar-wrap">
                        <!-- Sidebar Summary Block -->
                        <div class="gi-sidebar-block">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Summary<div class="gi-sidebar-res"><i class="gicon gi-angle-down"></i></div></h3>
                            </div>
                            <div class="gi-sb-block-content gi-sidebar-dropdown">
                                <div class="gi-checkout-pro">
                                    <div class="col-sm-12 mb-6" v-for="(data, ind) in cart" :key="ind">
                                        <div class="gi-product-inner">
                                            <div class="gi-pro-image-outer">
                                                <div class="gi-pro-image">
                                                    <a href="javascript:void(0)" class="image">
                                                        <img class="main-image" :src="`${$store.state.hostName}${data.image}`" alt="Product">
                                                        <img class="hover-image" :src="`${$store.state.hostName}${data.image}`" alt="Product">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="gi-pro-content">
                                                <h5 class="gi-pro-title">{{ data.name}}</h5>
                                                <span class="gi-price">
                                                    <span class="new-price">{{data.regular_price}} ৳</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gi-checkout-summary mt-4">
                                    <div>
                                        <span class="text-left">Total</span>
                                        <span class="text-right">{{ Number(sumField('regular_price', cart)).toFixed(2) }}</span>
                                    </div>
                                    <div>
                                        <span class="text-left">Delivery Charges</span>
                                        <span class="text-right">{{ checkout.dalivary_chrage }}</span>
                                    </div>
                                    <!-- <div>
                                        <form class="gi-checkout-coupan-form" name="gi-checkout-coupan-form" method="post" action="#">
                                            <input class="gi-coupan" type="text" required="" placeholder="Enter Your Coupan Code" name="gi-coupan" value="">
                                            <button class="gi-coupan-btn gi-btn-2" type="submit" name="subscribe" value="">Apply</button>
                                        </form>
                                    </div> -->
                                    
                                    <div class="gi-checkout-summary-total">
                                        <span class="text-left">Total Amount</span>
                                        <span class="text-right">{{ checkout.total + checkout.dalivary_chrage }}</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Sidebar Summary Block -->
                    </div>
                    <div class="gi-sidebar-wrap gi-checkout-pay-wrap mb-4">
                        <!-- Sidebar Payment Block -->
                        <div class="gi-sidebar-block">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Payment Method<div class="gi-sidebar-res"><i class="gicon gi-angle-down"></i></div></h3>
                            </div>
                            <div class="gi-sb-block-content gi-sidebar-dropdown">
                                <div class="gi-checkout-pay">
                                    <div class="gi-pay-desc">Please select the preferred payment method to use on this
                                        order.</div>
                                        <span class="gi-new-option">
                                            <span>
                                                <input type="radio" id="online" name="radio-group" value="online" v-model="checkout.payment">
                                                <label for="online">Online Payment</label>
                                            </span>
                                            <span>
                                                <input type="radio" id="cash" name="radio-group" value="cash" v-model="checkout.payment">
                                                <label for="cash">Cash On</label>
                                            </span>
                                        </span>
                                        <span class="gi-pay-commemt">
                                            <span class="gi-pay-opt-head">Add Comments About Your Order</span>
                                            <textarea name="your-commemt" placeholder="Comments" v-model="checkout.comment"></textarea>
                                        </span>
                                        <span class="gi-pay-agree"><input type="checkbox" value="" v-model="agree"><a href="#">I have
                                                read and agree to the <span>Terms &amp; Conditions.</span></a><span class="checked"></span></span>
                                        <div class="gi-single-cart mt-4">
                                            <button class="btn btn-primary gi-btn-1" @click="placeOrder">Place Order</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <!-- Sidebar Payment Block -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>
<script>
export default {
   
    data(){
        return {
            agree:false,
            checkout: {
                name: '',
                email: '',
                phone: '',
                address:  '',
                dalivary_chrage: 0,
                total:  null,
                division_id:null,
                distric_id:null,
                upazila_id:null,
                union_id:null,
                customer_id:null,
                comment:'',
                isLogin: 'register',
                payment: 'cash',
            },
            cartdata:[],
            user: {
                phone: '',
                password: '',
            },
            division:[],
            distric:[],
            districData:[],
            upazila:[],
            upazilaData:[],
            union:[],
            unionData:[],
        }
    },
    computed: {
		cart(){
            this.cartdata = this.$store.getters['cart/cart'];
			return this.cartdata;
		},
        hasLogin(){
            return this.$store.getters['customerLogin/GET_AUTH_TOKEN'];
        },
        info(){
            return this.$store.getters['customerLogin/GET_AUTH_INFO'];
        }
	},
    watch: {
        info: {
            immediate: true,
            handler(newInfo) {
               if(newInfo){
                    this.checkout.customer_id = newInfo.id || '';
                    this.checkout.name = newInfo.name || '';
                    this.checkout.email = newInfo.email || '';
                    this.checkout.phone = newInfo.phone || '';
                    this.checkout.address = newInfo.address || '';
               }
            }
        },
        division(data) {
            if(data == undefined) return;
                this.checkout.division_id = data.id;
            if(data.name == 'Dhaka'){
                this.checkout.dalivary_chrage = 120;
            }else{
                this.checkout.dalivary_chrage = 180;
            }
            if(this.distric.length > 0){
                this.distric = [];
                this.checkout.distric_id = null;
            }
            if(this.upazila.length > 0){
                this.upazila = [];
                this.checkout.upazila_id = null;
            }
            if(this.union.length > 0){
                this.union = [];
                this.checkout.union_id = null;
            }
            this.distric = data.distric.length > 0 ? data.distric : 0;
        },
        districData(data) {
            if(data == undefined) return;
            this.checkout.distric_id = data.id;
            if(this.upazila.length > 0){
                this.upazila = [];
                this.checkout.upazila_id = null;
            }
            if(this.union.length > 0){
                this.union = [];
                this.checkout.union_id = null;
            }
            this.upazila = data.upazilas.length > 0 ? data.upazilas : 0;
        },
        upazilaData(data) {
            if(data == undefined) return;
            this.checkout.upazila_id = data.id;
            if(this.union.length > 0){
                this.union = [];
                this.checkout.union_id = null;
            }
            this.union = data.unions.length > 0 ? data.unions : 0;
        },
        unionData(data) {
            if(data == undefined) return;
            this.checkout.union_id = data.id;
        },
    },
    
    async created() {
        this.$store.dispatch("aditiondata/getArea");
    },
    methods: {
        async placeOrder(){
           
            if(this.checkout.payment == 'online'){

            }
            if(this.cartdata.length < 0){
                return this.$store.dispatch('notification/error', 'No Product Purchece');
            }
            if(this.agree == false){
                return this.$store.dispatch('notification/error', 'Agree Trems & Condition');
            }
            if(!this.checkout.division_id){
                return this.$store.dispatch('notification/error', 'Select Divition');
            }
            if(!this.checkout.phone){
                return this.$store.dispatch('notification/error', 'Phone Number is requird');
            }
            if(!this.checkout.name){
                return this.$store.dispatch('notification/error', 'Name is requird');
            }
            if(!this.checkout.address){
                return this.$store.dispatch('notification/error', 'Address is requird');
            }
            let data = {
                customer_info: this.checkout,
                cart: this.cartdata,
            }
            console.log(data)
            // await this.$store.dispatch('aditiondata/setSsl', '');
            // await this.$store.dispatch('aditiondata/saveOrder', data);
            
            
        },
        async login() {
            let isdone = await this.$store.dispatch('customerLogin/login', this.user);  
            if(isdone){
                this.info = this.$store.getters['customerLogin/GET_AUTH_INFO'];
                
            }  
        },
        sumField(item_name, items=[]) {
            return items.reduce((a, b) => {
                let amount = 0;
                amount = a + (Number(b[item_name]) || 0);
                this.checkout.total = amount;
                return amount;
            }, 0)
        },
    },
}
</script>
<style>
.select_sort{
    height: 1.2cm;
    padding-top: 0.4cm;
}
</style>
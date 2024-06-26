<template>
    <!-- Shop section -->
 <section class="content-inner-2 section-pattren1 gi-shop padding-tb-40">
    <div class="container">
        <div class="row">
            <div class="gi-shop-rightside col-lg-12 col-md-12 margin-b-30">
                <!-- Shop Top Start -->
                
                <!-- Shop Top End -->

                <!-- Select Bar Start -->
                <!-- <div class="gi-select-bar d-flex">
                    <span class="gi-select-btn">Clothes<a class="gi-select-cancel" href="javascript:void(0)">×</a></span>
                    <span class="gi-select-btn">Fruits<a class="gi-select-cancel" href="javascript:void(0)">×</a></span>
                    <span class="gi-select-btn">Snacks<a class="gi-select-cancel" href="javascript:void(0)">×</a></span>
                    <span class="gi-select-btn">Dairy<a class="gi-select-cancel" href="javascript:void(0)">×</a></span>
                    <span class="gi-select-btn">perfume<a class="gi-select-cancel" href="javascript:void(0)">×</a></span>
                    <span class="gi-select-btn">jewelry<a class="gi-select-cancel" href="javascript:void(0)">×</a></span>
                    <span class="gi-select-btn gi-select-btn-clear"><a class="gi-select-clear" href="javascript:void(0)">Clear All</a></span>
                </div> -->
                <!-- Select Bar End -->

                <!-- Shop content Start -->
                <div class="shop-pro-content">
                    <div class="shop-pro-inner">
                        <div class="row" v-if="this.$store.getters['home/products']">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 gi-product-box pro-gl-content" v-for="(products, ind) in this.$store.getters['home/products']" :key="ind">
                                <router-link :to="'/product/'+ products.url" @click="productDetails(products)">
                                    <div class="gi-product-content">
                                        <div class="gi-product-inner">
                                            <div class="gi-pro-image-outer">
                                                <div class="gi-pro-image">
                                                    <router-link :to="'/product/'+ products.url" @click="productDetails(products)" class="image">
                                                        <!-- <span class="label veg">
                                                            <span class="dot"></span>
                                                        </span> -->
                                                        <img class="main-image" :src="`${$store.state.hostName}${products.image}`" alt="Product">
                                                        <img class="hover-image" :src="`${$store.state.hostName}${products.image}`" alt="Product">
                                                    </router-link>
                                                    <span class="flags">
                                                        <!-- <span class="sale">Sale</span> -->
                                                    </span>
                                                    <div class="gi-pro-actions">
                                                        <a class="gi-btn-group wishlist" title="Wishlist"><i class="fa fa-heart"></i></a>
                                                        <a href="#" class="gi-btn-group quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#gi_quickview_modal"><i class="fa fa-eye" @click="quickView(products)"></i></a>
                                                        <a href="javascript:void(0)" title="Add To Cart" class="gi-btn-group add-to-cart"><i class="fa fa-shopping-cart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="gi-pro-content">
                                                <!-- <a href="shop-left-sidebar-col-3.html">
                                                    <h6 class="gi-pro-stitle">Dried Fruits</h6>
                                                </a> -->
                                                <h5 class="gi-pro-title">
                                                    <router-link :to="'/product/'+ products.url" @click="productDetails(products)">{{ products.name }}</router-link>
                                                </h5>
                                                <!-- <p class="gi-info"> product Contrary to popular belief, Lorem Ipsum is not simply
                                                    random text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old.</p> -->
                                                <div class="gi-pro-rat-price">
                                                    <!-- <span class="gi-pro-rating">
                                                        <i class="gicon gi-star fill"></i>
                                                        <i class="gicon gi-star fill"></i>
                                                        <i class="gicon gi-star fill"></i>
                                                        <i class="gicon gi-star"></i>
                                                        <i class="gicon gi-star"></i>
                                                    </span> -->
                                                    <span class="gi-price">
                                                        <span class="new-price">{{ products.regular_price }}</span>
                                                        <!-- <span class="old-price">$85.00</span> -->
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            
                        </div>
                    </div>
                    <!-- Pagination Start -->
                    <!-- <div class="gi-pro-pagination">
                        <span>Showing 1-12 of 21 item(s)</span>
                        <ul class="gi-pro-pagination-inner">
                            <li><a class="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><span>...</span></li>
                            <li><a href="#">8</a></li>
                            <li><a class="next" href="#">Next <i class="gicon gi-angle-right"></i></a></li>
                        </ul>
                    </div> -->
                    <!-- Pagination End -->
                </div>
                <!--Shop content End -->

            </div>
            <!-- Sidebar Area Start -->
            <div class="filter-sidebar-overlay"></div>
            <div class="gi-shop-sidebar gi-filter-sidebar col-lg-3 col-md-12" style="margin-top: 2.8cm;">
                <div class="sidebar-filter-title">
                    <h5>Filters</h5>
                    <a class="filter-close" href="javascript:void(0)">×</a>
                </div>
                <div id="shop_sidebar">
                    <div class="gi-sidebar-wrap">
                        <!-- Sidebar Category Block -->
                        <div class="gi-sidebar-block">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Category</h3>
                            </div>
                            <div class="gi-sb-block-content">
                                <ul>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" checked="">
                                            <a href="javascript:void(0)">
                                                <span><i class="fi-rr-cupcake"></i>Dairy &amp; Bakery</span>
                                            </a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox">
                                            <a href="javascript:void(0)">
                                                <span><i class="fi fi-rs-apple-whole"></i>Fruits &amp; Vegetable</span>
                                            </a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox">
                                            <a href="javascript:void(0)">
                                                <span><i class="fi fi-rr-popcorn"></i>Snack &amp; Spice</span>
                                            </a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox">
                                            <a href="javascript:void(0)">
                                                <span><i class="fi fi-rr-drink-alt"></i>Juice &amp; Drinks</span>
                                            </a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Sidebar Weight Block -->
                        <div class="gi-sidebar-block">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Weight</h3>
                            </div>
                            <div class="gi-sb-block-content">
                                <ul>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="" checked="">
                                            <a href="#">500gm Pack</a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <a href="#">1kg Pack</a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <a href="#">2kg Pack</a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <a href="#">5kg Pack</a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <a href="#">10kg Pack</a>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Sidebar Color item -->
                        <div class="gi-sidebar-block color-block gi-sidebar-block-clr">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Color</h3>
                            </div>
                            <div class="gi-sb-block-content">
                                <ul>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#c4d6f9;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#ff748b;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#000000;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li class="active">
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#2bff4a;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#ff7c5e;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#f155ff;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#ffef00;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#c89fff;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#7bfffa;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#56ffc1;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#ffdb9f;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#9f9f9f;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="gi-sidebar-block-item">
                                            <input type="checkbox" value="">
                                            <span class="gi-clr-block" style="background-color:#6556ff;"></span>
                                            <span class="checked"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Sidebar Price Block -->
                        <div class="gi-sidebar-block">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Price</h3>
                            </div>
                            <div class="gi-sb-block-content gi-price-range-slider es-price-slider">
                                <div class="gi-price-filter">
                                    <div class="gi-price-input">
                                        <label class="filter__label">
                                            From<input type="text" class="filter__input">
                                        </label>
                                        <span class="gi-price-divider"></span>
                                        <label class="filter__label">
                                            To<input type="text" class="filter__input">
                                        </label>
                                    </div>
                                    <div id="gi-sliderPrice" class="filter__slider-price" data-min="0" data-max="250" data-step="10"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Sidebar tags -->
                        <div class="gi-sidebar-block">
                            <div class="gi-sb-title">
                                <h3 class="gi-sidebar-title">Tags</h3>
                            </div>
                            <div class="gi-tag-block gi-sb-block-content">
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Clothes</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Fruits</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Snacks</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Dairy</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Seafood</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Fastfood</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Toys</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">perfume</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">jewelry</a>
                                <a href="shop-left-sidebar-col-3.html" class="gi-btn-2">Bags</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- <offerproduct /> -->
<QuickView v-if="quickViewData"/>
<!-- Shop section End -->
	
</template>

<script>
import QuickView from './../layouts/quickview.vue';

export default {
  components:{
	QuickView,
  },
  data(){
     return {
		quickViewData: {},
        quantity:1,
	}
   },
  methods: {
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
        },
        addToCart(data) {
			const productData = { ...data, quantity: this.quantity };
            this.$store.dispatch('cart/addToCart', productData);
        },
	},
}
</script>
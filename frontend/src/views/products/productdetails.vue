<template>
<section class="gi-single-product padding-tb-40">
  <div class="container">
    <div class="row">
      <div class="gi-pro-rightside gi-common-rightside col-md-12" v-if="productDetails"> 
        <!-- Single product content Start -->
        <div class="single-pro-block">
          <div class="container container-space">
            <div class="row">
              <div class="col-md-6">
                <div v-if="mergedImages">
                  <img class="img-fluid" :src="`${$store.state.hostName}${bannerImage ? bannerImage : mergedImages[0]}`" alt="" />
                  <div class="product-thumbnails">
                      <ul>
                      <li v-for="(lopimage, index) in mergedImages" :class="[activeClass == index ? 'thumbnail-active': '']" :key="index">
                          <img @click="currentThumnail(lopimage, index)" :src="`${$store.state.hostName}${lopimage}`" alt="" /></li>
                      </ul>
                  </div>
                </div>
                <div v-else>
                  <img class="img-fluid" :src="`${$store.state.hostName}${productDetails.image}`" alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="single-pro-desc single-pro-desc-no-sidebar m-t-991">
                <div class="single-pro-content">
                  <h5 class="gi-single-title">{{ productDetails.name }}</h5>
                  

                  <div class="gi-single-price-stoke">
                    <div class="gi-single-price">
                      <div class="final-price">M.R.P. : {{ productDetails.regular_price }}</div>
                      <!-- <div class="mrp">M.R.P. : <span>$2,999.00</span></div> -->
                    </div>
                    <!-- <div class="gi-single-stoke">
                      <span class="gi-single-sku">SKU#: WH12</span>
                      <span class="gi-single-ps-title">IN STOCK</span>
                    </div> -->
                  </div>
                  <div class="gi-single-desc">{{ productDetails.sort_description }}</div>

                  <!-- <div class="gi-single-list">
                    <ul>
                      <li><strong>Closure :</strong> Hook &amp; Loop</li>
                      <li><strong>Sole :</strong> Polyvinyl Chloride</li>
                      <li><strong>Width :</strong> Medium</li>
                      <li><strong>Outer Material :</strong> A-Grade Standard Quality</li>
                    </ul>
                  </div> -->

                  <div class="gi-pro-variation" v-if="productDetails.stock">
                    <div class="gi-pro-variation-inner gi-pro-variation-size" v-if="productDetails.stock.length > 1">
                      <span>Size</span>
                      <div class="gi-pro-variation-content">
                        <model-list-select class="select_sort"
                              :list="productDetails.stock" 
                              option-value="id" :name="size" option-text="size" 
                              :placeholder="productDetails.stock ? 'Select Size' : 'No data found'"
                               v-model="stock"/>
                      </div>
                    </div>
                  </div>
                  <div class="gi-single-qty gi-quickview-qty">
                   <div class="qty-plus-minus">
                    <div class="gi-qtybtn" @click="decrementQuantity">-</div>
                                                <input class="qty-input" type="text" name="ms_qtybtn" v-model="quantity">
                                            <div class="gi-qtybtn" @click="incrementQuantity">+</div></div>
										
										<div class="gi-single-cart">
                                                <button class="btn btn-primary gi-btn-1" @click="addToCart(productDetails)">Add To Cart</button>
                                            </div>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <!--Single product content End -->
        <!-- Add More and get discount content Start -->
        <!-- <div class="single-add-more m-tb-40">
          <div class="gi-add-more-slider owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div class="owl-stage" style="transform: translate3d(-1140px, 0px, 0px); transition: all 0s ease 0s; width: 3800px;">
                <div class="owl-item cloned" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/2_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Dates Value Pouch</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$56.00</span>
                        <span class="old-price">$60.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/5_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Graps Mix Snack</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$28.00</span>
                        <span class="old-price">$35.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/9_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Roasted Almonds Pack</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$16.00</span>
                        <span class="old-price">$23.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/8_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Honey Spiced Nuts</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$32.00</span>
                        <span class="old-price">$45.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/2_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Dates Value Pouch</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$56.00</span>
                        <span class="old-price">$60.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item active" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/5_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Graps Mix Snack</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$28.00</span>
                        <span class="old-price">$35.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/9_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Roasted Almonds Pack</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$16.00</span>
                        <span class="old-price">$23.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/8_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Honey Spiced Nuts</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$32.00</span>
                        <span class="old-price">$45.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/2_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Dates Value Pouch</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$56.00</span>
                        <span class="old-price">$60.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 356px; margin-right: 24px;">
                  <div class="add-more-item">
                    <a href="javascript:void(0)" class="gi-btn-2">+</a>
                    <div class="add-more-img">
                      <img src="assets/img/product-images/5_1.jpg" alt="product" />
                    </div>
                    <div class="add-more-info">
                      <h5>Graps Mix Snack</h5>
                      <span class="gi-pro-rating">
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star fill"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                        <i class="gicon gi-star"></i>
                      </span>
                      <span class="gi-price">
                        <span class="new-price">$28.00</span>
                        <span class="old-price">$35.00</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-nav disabled">
              <button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>
            </div>
            <div class="owl-dots disabled"></div>
          </div>
        </div> -->
        <!-- Single product tab start -->
        <div class="gi-single-pro-tab mb-5">
          <div class="gi-single-pro-tab-wrapper">
            <div class="gi-single-pro-tab-nav">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="details-tab" data-bs-toggle="tab" data-bs-target="#gi-spt-nav-details" type="button" role="tab" aria-controls="gi-spt-nav-details" aria-selected="true">Detail</button>
                </li>
                <!-- <li class="nav-item" role="presentation">
                  <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#gi-spt-nav-info" type="button" role="tab" aria-controls="gi-spt-nav-info" aria-selected="false" tabindex="-1">Specifications</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="vendor-tab" data-bs-toggle="tab" data-bs-target="#gi-spt-nav-vendor" type="button" role="tab" aria-controls="gi-spt-nav-vendor" aria-selected="false" tabindex="-1">Vendor</button>
                </li> -->
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#gi-spt-nav-review" type="button" role="tab" aria-controls="gi-spt-nav-review" aria-selected="false" tabindex="-1"> Reviews</button>
                </li>
              </ul>
            </div>
            <div class="tab-content gi-single-pro-tab-content">
              <div id="gi-spt-nav-details" class="tab-pane fade show active" role="tabpanel" aria-labelledby="details-tab" >
                <div class="custom-table" v-html="this.$store.getters['home/productsdetails'].description"></div>
              </div>
              
              <div id="gi-spt-nav-review" class="tab-pane fade" role="tabpanel" aria-labelledby="review-tab">
                <div class="row">
                  <div class="gi-t-review-wrapper">
                    <div class="gi-t-review-item">
                      <div class="gi-t-review-avtar">
                        <img src="assets/img/user/1.jpg" alt="user" />
                      </div>
                      <div class="gi-t-review-content">
                        <div class="gi-t-review-top">
                          <div class="gi-t-review-name">Mariya Lykra</div>
                          <div class="gi-t-review-rating">
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star-o"></i>
                          </div>
                        </div>
                        <div class="gi-t-review-bottom">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="gi-t-review-item">
                      <div class="gi-t-review-avtar">
                        <img src="assets/img/user/2.jpg" alt="user" />
                      </div>
                      <div class="gi-t-review-content">
                        <div class="gi-t-review-top">
                          <div class="gi-t-review-name">Moris Willson</div>
                          <div class="gi-t-review-rating">
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star-o"></i>
                            <i class="gicon gi-star-o"></i>
                          </div>
                        </div>
                        <div class="gi-t-review-bottom">
                          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gi-ratting-content">
                    <h3>Add a Review</h3>
                    <div class="gi-ratting-form">
                      <form action="#">
                        <div class="gi-ratting-star">
                          <span>Your rating:</span>
                          <div class="gi-t-review-rating">
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star fill"></i>
                            <i class="gicon gi-star-o"></i>
                            <i class="gicon gi-star-o"></i>
                            <i class="gicon gi-star-o"></i>
                          </div>
                        </div>
                        <div class="gi-ratting-input">
                          <input name="your-name" placeholder="Name" type="text" />
                        </div>
                        <div class="gi-ratting-input">
                          <input name="your-email" placeholder="Email*" type="email" required="" />
                        </div>
                        <div class="gi-ratting-input form-submit">
                          <textarea name="your-commemt" placeholder="Enter Your Comment"></textarea>
                          <button class="gi-btn-2" type="submit" value="Submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- product details description area end -->
      </div>
    </div>
  </div>
</section>
<offerproduct />
</template>

<script>
import offerproduct from './../home/offerproduct.vue';
export default {
  components:{
    offerproduct,
  },
  data() {
    return {
      descriptionData: this.$store.getters['home/productsdetails'] ? this.$store.getters['home/productsdetails'].description : '',
    }
  },
  watch: {
    stock(data){
      if(data == undefined) return;
        this.current_stock = data.current_stock
    }
  },
    computed: {
        productDetails() {
            let data = this.$store.getters['home/productsdetails'];
            this.descriptionData = data.description;
            return data;
        },
        mergedImages() {
          if(this.productDetails && this.productDetails.related_image){
            const relatedImages = JSON.parse(this.productDetails.related_image) || [];
           return [this.productDetails.image, ...relatedImages];
          }
      }
    },
    data() {
       return{
         bannerImage:null,
         quantity:1,
         current_stock:null,
         stock:[],
       }
    },
  methods: {
    addToCart(data) {
			const productData = { ...data, quantity: this.quantity };
      this.$store.dispatch('cart/addToCart', productData);
		},
    currentThumnail: function (image, index) {
      this.bannerImage = image;
      this.activeClass = index;
    },
    incrementQuantity() {
          if(this.productDetails.stock){
            if(this.productDetails.stock.length > 1){
              if(this.quantity >= this.current_stock){
                return this.$store.dispatch('notification/error', 'Stock Not Abilable');
              }else{
                this.quantity ++;
              }
            }
            else{
              if(this.quantity >= this.productDetails.stock[0].current_stock){
                return this.$store.dispatch('notification/error', 'Stock Not Abilable');
              }else{
                this.quantity ++;
              }
            }
          }
    },
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity --;
        }
    },
    
  }
}
</script>
<style>

.container-space {
  margin-top: 2rem;
}
.product-thumbnails {
  display: flex;
  margin-top: 2rem;
}
.product-thumbnails > ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.product-thumbnails > li {
  margin-right: 10px;
}
.product-thumbnails > ul > li > img {
  width: 100px;
  cursor: pointer;
}
.thumbnail-active {
  border: 2px solid #000;
}
@media (max-width: 960px) {
    .table-responsive {
        overflow-x: auto;
    }
    .table-responsive table {
        width: 100%;
    }
}
</style>
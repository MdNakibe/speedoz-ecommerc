<template>
    
	<div class="page-content bg-white">
		<!-- Carasol start  -->
		
		<Slider />
		
		  <!-- Carasol End  -->
		<!-- Product Section - Start -->
		
		<featuredProduct />

		<promoVideo />
 		 <!-- Main container section -->
		<helmetfilter />
		<!-- Product Section q- End -->
		<blog />

		
		
		<offerproduct />
		

		<partner />

		<QuickView v-if="quickViewData" :quickViewDataProp="quickViewData"></QuickView>
	</div>
	
</template>

<script>
import Slider from './slider.vue';
import featuredProduct from './featuredProduct';
import offerproduct from './offerproduct';
import blog from './blog';
import helmetfilter from './helmetfilter';
import partner from './partner';
import promoVideo from './promoVideo';
import QuickView from './../layouts/quickview.vue'
export default {
  components:{
    Slider,
    blog,
    helmetfilter,
    offerproduct,
    partner,
    promoVideo,
    featuredProduct,
	QuickView
  },
  data() {
    return {
        popupVisible: false,
		quickViewData: {},
		load:false,
	}
  },
  
  async created() {
        this.$store.dispatch("product/getProduct")
    },
	mounted() {
			const cssLink = document.createElement('link');
			cssLink.href = '/assets/css/swiper-bundle.min.css'; // Path relative to the public folder
			cssLink.rel = 'stylesheet';


			const script = document.createElement('script');
			script.src = '/assets/js/swiper-bundle.min.js';
			script.src = '/assets/js/dz.carousel.js';
			
			// Path relative to the public folder
			script.async = true;
			
  			var swiper5 = new Swiper('.clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 5,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
		var swiper = new Swiper('.blog-slider-full', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3, // Call the function to determine slides per view
			spaceBetween: 30,
			loop: true,
			autoplay: {
			delay: 3000,
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			},
			}
		});
	},
	methods: {
		quickView(data){
			 this.quickViewData = data; // Set the quickViewData
      		$('#gi_quickview_modal').modal('show');
		}
	},
}
</script>
<template>
    <!-- Header -->
	<header class="site-header mo-left header style-1">
		<!-- Main Header -->
		<div class="sticky-header main-bar-wraper navbar-expand-lg">
			<div class="main-bar clearfix ">
				<div class="container-fluid clearfix">
					<!-- Website Logo -->
					<div class="logo-header mostion logo-dark">
						<router-link to="/"><img src="/assets/images/logo.png" alt="Logo"></router-link >
					</div>
					
					<!-- Nav Toggle Button -->
					<button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
					
					<!-- Extra Nav -->
					<div class="extra-nav">
						<div class="extra-cell">
							<router-link to="/my-account" class="btn btn-outline-secondary btnhover1">
								<i class="fa-solid fa-user"></i>
							</router-link>
						</div>
						<div class="extra-cell">
							<div class="cart-container">
								<router-link to="/cart" class="btn btn-outline-secondary btnhover1 view-cart">
									<i class="fa fa-shopping-cart"></i> {{ cart.length }}
								</router-link>
								<div class="cart-popup">
									<p v-if="cart.length == 0" class="empty">No products in the cart.</p>    
									<table v-else class="table-content">
										<thead>
											<tr>
												<th style="width: 60%;">Product</th>
												<th style="width: 25%;">Price</th>
												<th style="width: 15%;">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(data, ind) in cart" :key="ind">
												<td data-label="Product" class="gi-cart-pro-name">
													<img class="gi-cart-pro-img mr-4" style="width: 25%;" :src="`${$store.state.hostName}${data.image}`" alt="">
														{{ data.name }}
												</td>
												<td data-label="Price" class="gi-cart-pro-price">
													<span class="amount">{{ data.regular_price }}</span>
												</td>
												<td data-label="Remove" class="gi-cart-pro-remove">
													<button type="button" class="btn btn-outline-secondary btnhover1" @click="removeFromCart(data.id)"><i class="fa fa-trash"></i></button>
												</td>
											</tr>
										</tbody>
										<div class="gi-single-cart mt-4">
											<router-link to="/cart" class="btn btn-primary gi-btn-1" style="border-radius:25px;">View Cart</router-link>
											<router-link to="/check-out" class="btn btn-primary gi-btn-1" style="border-radius:25px; margin-right: 17px;">Check out</router-link>

										</div>
									</table>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Header Nav -->
					<div class="header-nav navbar-collapse collapse" id="navbarNavDropdown">
						<div class="logo-header logo-dark">
							<a href="index.html"><img src="/assets/images/logo.png" alt=""></a>
							
						</div>
						<ul class="nav navbar-nav navbar navbar-left" v-for="menu in $store.getters['menu/menus']" :key="menu.id">	
							<li v-if="menu.child.length === 0"><router-link :to="'/'+ menu.url">{{ menu.name }}</router-link></li>
							<li v-else class="sub-menu-down">
							<router-link :to="'/'+ menu.url" @click="getProduct(menu.id, 1)">{{ menu.name }}</router-link>
								<ul class="sub-menu">
									<li v-for="submenu in menu.child" :key="submenu.id">
										<router-link :to="'/'+ menu.url + '/'+submenu.url" @click="getProduct(submenu.id, 2)">{{ submenu.name }} <i v-if="submenu.child.length !== 0" class="fa fa-angle-right"></i> </router-link>
										<ul class="sub-menu" v-if="submenu.child.length !== 0">
											<li v-for="childmenu in submenu.child" :key="childmenu.id">
											<router-link :to="'/'+ menu.url + '/'+  submenu.url + '/' +  childmenu.url" @click="getProduct(childmenu.id, 3)"> {{ childmenu.name }} </router-link>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- Main Header End -->
	</header>
	<!-- Header End -->
</template>

<script>
export default {
	data(){
		return{
			count: 0,
		}
	},
	async created() {
        this.$store.dispatch("menu/getMenus");
		 this.$store.dispatch("home/getBrand");
    },
	computed: {
		cart(){
			let data = this.$store.getters['cart/cart'];
            return  data;
		}
	},
	watch: {
		'$route'(to, from) {
			if (to.path.includes('/product/')) {
				let productSlug = to.path.split('/product/')[1];
				this.getUrlProduct(productSlug)
			}else{
				let lastSlug = to.path.split('/').pop();

				this.getUrlcategoryProduct(lastSlug)
			}
			
		}
	},
	methods: {
		removeFromCart(id){
			this.$store.dispatch('cart/removeToCart', id);
		},
		async getUrlProduct(url){
			await this.$store.dispatch('home/getUrlproduct', {product_url: url});
		},
		async getUrlcategoryProduct(url){
			
			await this.$store.dispatch('home/getUrlCategory', {category_url: url});
		},

		async getProduct(id, type){
			let data = {
				id: id,
				type: type,
			}
		await this.$store.dispatch('home/getCategoryWaysProduct', data);
		}
	},
}
</script>

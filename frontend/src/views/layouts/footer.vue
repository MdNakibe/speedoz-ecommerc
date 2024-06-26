<template>
    <!-- Footer -->
    <footer class="site-footer style-1" id="footer">
		<div class="footer-top">
            <div class="container-fluid">
				<div class="row" style="padding-left:1cm; padding-right:1cm">
					
					<div class="col-xl-3 col-lg-4 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.4s">
						<div class="widget widget_services">
							<h5 class="footer-title">Important Link</h5>
							<ul>
								<li><router-link class="atage" to="/returns-refund">• Return & Refund Policy</router-link></li>
								<li> <router-link class="atage" to="/terms-condition">• Terms and Conditions</router-link></li>
								<li><router-link class="atage" to="/shipping-policy">• Shipping Policy</router-link></li>
								<li><router-link class="atage" to="/warrenty-policy">• Warranty Policy</router-link></li>
								<li><router-link class="atage" to="/privacy-policy">• Privacy Policy</router-link></li>
								<li><router-link class="atage" to="/my-account">• My Account</router-link></li>
								<li><router-link class="atage" to="/careers">• Careers</router-link></li><br>
								<li>
									Working Time: <b>10:00 AM to 6:00 PM</b> <br>
									<span style="font-size:13px">(Except Friday and Goverment Holiday)</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-xl-3 col-lg-4 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.6s">
						<div class="widget widget_services">
							<h5 class="footer-title">Our Product</h5>
							<ul>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/QJmotorbd"> • QJ Motor</a></li>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/GPXGenericBangladesh"> • GPX Motorcycle</a></li>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/GPXGenericBangladesh"> • Generic Motorcycle</a></li>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/originehelmetsbd"> • Origine Helmets</a></li>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/originehelmetsbd"> • Just1 Helmets</a></li>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/torqhelmets"> • Torq Helmets</a></li>
								<li><a class="atage" target="_blank" href="https://www.facebook.com/MThelmetsBD/"> • MT Helmets</a></li>
							</ul>
						</div>
					</div>
					<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
						<div class="widget widget_getintuch">
							<h5 class="footer-title">Get in Touch with Us</h5>
							<ul>
								<li>
									<i class="fas fa-map-marker-alt"></i>
									<a class="atage" target="_blank" href="https://maps.app.goo.gl/Sk4ad6pmzJ9ZqWqb6">
										 Pacific Center (Ground Floor) 14, Mohakhali C/A, Bir Uttam A.K. Khandakar Sarak, Dhaka 1212.</a>
								</li>
								<li>
									<i class="fa-solid fa-phone"></i>
									<a class="atage" @click="callNumber('tel:01990-400600')" target="_blank">01990-400600</a>
								</li>
								<li>
									<i class="fa fa-envelope"></i> 
									<a class="atage" @click.prevent="redirectToGmail">
										info@speedoz.com.bd</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-xl-3 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
						<div class="widget widget_about">
							<!-- <div class="footer-logo logo-white">
								<a href="index.html"><img src="images/logo-white.png" alt=""></a> 
							</div> -->
							<h5 class="footer-title">Sign Up to Newsletter </h5>
							<input type="email" maxlength="50" required placeholder="Enter your email address" v-model="email">
        						<button class="bt" @click="saveEmail"><i class="fa-solid fa-paper-plane"></i></button>
							<p>Be the first to learn about the latest products and exclusive deals.</p>
							
							<div class="dz-social-icon style-1">
								<ul>
									<li><a target="_blank" class="social-icon fab fa-facebook-f" href="https://www.facebook.com/speedozbd"></a></li>
									<li><a target="_blank" class="social-icon fab fa-instagram" href="https://www.instagram.com/speedozltd/"></a></li>
									<li><a target="_blank" class="social-icon fab fa-youtube" href="https://www.youtube.com/@SpeedozLimited"></a></li>
									<li><a target="_blank" class="social-icon fab fa-tiktok" href="https://www.tiktok.com/@speedozlimited"></a></li>
									<li><a target="_blank" class="social-icon fab fa-linkedin-in" href="https://www.linkedin.com/company/speedozltd/"></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
            </div><br>
			<div class="banner">
				<img src="/assets/images/sslcommerce.png">
			</div>
			<!-- <div class="shape-1 move-2"></div> -->
			
		</div>
        <!-- Footer Bottom Part -->
        
        <div class="footer-bottom">
            <div class="container">
				<div class="text-center"> 
					<!-- <span class="copyright-text">Copyright © 2024 <a href="https://www.linkedin.com/in/nakibul-islam-72b034246/" target="_blank">Naibul Islam Emran</a>. All rights reserved.</span>  -->
					<span class="copyright-text">© 2024 Speedoz Ltd | All Rights Reserved. (Trade License No- TRAD/DNCC/041870/2022 | DBID No- Applied)</span> 
				</div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
</template>
<script>
export default {
	data() {
		return {
			email:'',
		}
	},
	methods: {
		callNumber(number) {
			console.log(number)
			window.location.href = number;
		},
		async saveEmail() {
            if(!this.email){
                return this.$store.dispatch('notification/error', 'Email is required');
            }
		    let isSuccess = await this.$store.dispatch('aditiondata/storeEmail', {email: this.email});
            if(isSuccess) {
                this.email= '';
            }
        },
    redirectToGmail() {
      const email = 'info@speedoz.com.bd';
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      window.open(gmailUrl, '_blank');
    }
  }
}
</script>
<style>
	#footer input[type="email"] {
  display: inline-block;
    width: 100%;
    padding: 16px 14px;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 49px;
    margin-top: 18px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06);
}
#footer input,
input::-webkit-input-placeholder {
  font-size: 16px;
  line-height: 3;
}

#footer .bt {
 margin-left: -45px;
    font-size: 16px;
    display: inline-block;
    font-weight: 600;
    padding: 5px 11px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #ff0a0a;
    color: #fff8f8;
}
.atage:hover{
	border-bottom: 1px solid white;
	width: fit-content;
}
.social-icon{
	border: 1px solid;
}
.banner{
	border: 2px solid white;
    border-radius: 10px;
    width: 96%;
    margin-left: 2%;
    padding: 10px;
}
</style>
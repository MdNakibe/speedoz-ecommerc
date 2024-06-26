<template>
    <section class="gi-login padding-tb-40">
        <div class="container">
           <div class="row">
                <div class="col-md-6">
                    <div class="section-title-2">
                        <h2 class="gi-title">Login<span></span></h2>
                        <!-- <p>Get access to your Orders, Wishlist and Recommendations.</p> -->
                    </div>
                    <div class="gi-login-content mb-4">
                        <div class="gi-login-box">
                            <div class="gi-login-wrapper">
                                <div class="gi-login-container">
                                    <div class="gi-login-form">
                                        <span class="gi-login-wrap">
                                            <label>Phone*</label>
                                            <input type="text" name="name" placeholder="Enter your phone..." v-model="user.phone">
                                        </span>
                                        <span class="gi-login-wrap">
                                            <label>Password*</label>
                                            <input type="password" name="password" placeholder="Enter your password" v-model="user.password">
                                        </span>
                                        <!-- <span class="gi-login-wrap gi-login-fp">
                                            <label><a href="#">Forgot Password?</a></label>
                                        </span> -->
                                        <span class="gi-login-wrap gi-login-btn">
                                            <!-- <span><a href="register.html" class="">Create Account?</a></span> -->
                                            <span></span>
                                            <div class="gi-single-cart">
                                                <button class="btn btn-primary gi-btn-1" @click="login">Login</button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="section-title-2">
                        <h2 class="gi-title">Register<span></span></h2>
                        <!-- <p>Get access to your Orders, Wishlist and Recommendations.</p> -->
                    </div>
                    <div class="gi-login-content mb-4">
                        <div class="gi-login-box">
                            <div class="gi-login-wrapper">
                                <div class="gi-login-container">
                                    <div class="gi-login-form">
                                        <span class="gi-login-wrap">
                                            <label>Full Name*</label>
                                            <input type="text" name="name" placeholder="Enter your Name..." v-model="rege.name">
                                        </span>
                                        <span class="gi-login-wrap">
                                            <label>Email</label>
                                            <input type="text" name="name" placeholder="Enter your Email..." v-model="rege.email">
                                        </span>
                                        <span class="gi-login-wrap">
                                            <label>Phone*</label>
                                            <input type="text" name="name" placeholder="Enter your phone..." v-model="rege.phone">
                                        </span>
                                        <span class="gi-login-wrap">
                                            <label>Password*</label>
                                            <input type="password" name="password" placeholder="Enter your password..." v-model="rege.password">
                                        </span>
                                        <!-- <span class="gi-login-wrap gi-login-fp">
                                            <label><a href="#">Forgot Password?</a></label>
                                        </span> -->
                                        <span class="gi-login-wrap gi-login-btn">
                                            <!-- <span><a href="register.html" class="">Create Account?</a></span> -->
                                            <span></span>
                                            <div class="gi-single-cart">
                                                <button class="btn btn-primary gi-btn-1" @click="register">Register</button>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </section>
</template>
<script>
export default {

    data() {
        return {
          loading:false,
            user: {
                phone: '',
                password: '',
            },
            rege: {
                name: '',
                email: '',
                phone: '',
                password: '',
            },
            isSuccess: '',
            error: null,
        }
    },
    methods: {
        async login() {
        //   this.loading = true;
           let isSuccess = await this.$store.dispatch('customerLogin/login', this.user);
          if(isSuccess){
            this.$router.push('/my-account');
          }else{
            // this.loading = false;
          }
               
        },
        async register() {
        //   this.loading = true;
           let isSuccess = await this.$store.dispatch('customerLogin/register', this.rege);
          if(isSuccess){
            this.$router.push('/my-account');
          }else{
            // this.loading = false;
          }
               
        }
    }
}
</script>
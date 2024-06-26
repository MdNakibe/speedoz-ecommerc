<template>
    <div class="account-content">
    <div class="login-wrapper">
      <div class="login-content">
        <div class="login-userset">
          <div class="login-logo">
            <img src="/assets/img/logo.png" alt="img" />
          </div>
          <div class="login-userheading">
            <h3>Sign In</h3>
            <h4>Please login to your account</h4>
          </div>
          <div class="form-login">
            <label>User Name</label>
            <div class="form-addons">
              <input type="text" v-model="user.name" placeholder="Enter your User name" />
              <img src="/assets/img/icons/users1.svg" alt="img" />
            </div>
          </div>
          <div class="form-login">
            <label>Password</label>
            <div class="pass-group">
              <input type="password" v-model="user.password" class="pass-input" placeholder="Enter your password" />
              <span class="fas toggle-password fa-eye-slash"></span>
            </div>
          </div>
          <!-- <div class="form-login">
            <div class="alreadyuser">
              <h4><a href="forgetpassword.html" class="hover-a">Forgot Password?</a></h4>
            </div>
          </div> -->
          <div class="form-login">
          <v-btn
                  color="#ff9f43"
                  :loading="loading"
                  @click="login"
                >
                  Log in

                  <template v-if="loading">
                    <v-progress-linear indeterminate></v-progress-linear>
                  </template>
              </v-btn>
          <!-- <button type="submit" class="btn btn-login" @click="login">
            <template v-if="loading">
                    <v-progress-linear indeterminate></v-progress-linear>
            </template>
          Sign In</button> -->
          </div>
          <!-- <div class="signinform text-center">
            <h4>Don’t have an account? <a href="signup.html" class="hover-a">Sign Up</a></h4>
          </div> -->
        </div>
      </div>
      <!-- <div class="login-img">
        <img src="/assets/img/login.jpg" alt="img" />
      </div> -->
    </div>
  </div>
</template>
<script>
export default {

    data() {
        return {
          loading:false,
            user: {
                name: '',
                password: '',
            },
            isSuccess: '',
            error: null,
        }
    },
    methods: {
        async login() {
          this.loading = true;
           let isSuccess = await this.$store.dispatch('user/login', this.user);
          if(isSuccess){
            window.location.reload();
            location.href = '/'
              this.$router.push({ name: 'dashboard' })
          }else{
            this.loading = false;
          }
               
        }
    }
}
</script>
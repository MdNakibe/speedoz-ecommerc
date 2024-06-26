<template>
    <section class="gi-contact padding-tb-40">
        <div class="container">
            <div class="section-title-2">
                <h2 class="gi-title">CONTACT <span>US</span></h2>
                <!-- <p>Please select a topic below related to you inquiry. If you don't fint what you need, fill out our
                    contact form.</p> -->
            </div>
            <div class="row gi-contact-detail m-tb-minus-12 mb-4">
                <div class="col-xs-12 col-sm-6 col-lg-4 p-tp-12">
                    <div class="gi-box">
                        <div class="detail">
                            <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                            <div class="info">
                                <h3 class="title">E-Mails</h3>
                                <p @click.prevent="redirectToGmail('info@speedoz.com.bd')">
                                    Information: info@speedoz.com.bd 
                                </p>
                                <p @click.prevent="redirectToGmail('mkt@speedoz.com.bd')">
                                    Marketing: mkt@speedoz.com.bd 
                                </p>
                                <p @click.prevent="redirectToGmail('sales@speedoz.com.bd')">
                                    Sales: sales@speedoz.com.bd 
                                </p>
                                <p @click.prevent="redirectToGmail('service@speedoz.com.bd')">
                                    Service: service@speedoz.com.bd 
                                </p>
                                <!-- <p>
                                    <i class="fa fa-globe" aria-hidden="true"></i> &nbsp; www.yourdomain.com
                                </p> -->
                            </div>
                        </div>
                        <div class="space"></div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-lg-4 p-tp-12">
                    <div class="gi-box">
                        <div class="detail">
                            <div class="icon"><i class="fa fa-mobile" aria-hidden="true"></i></div>
                            <div class="info">
                                <h3 class="title">Contacts</h3>
                                <p>
                                    Information: <a class="atage" style="color: white;" @click="callNumber('tel:01990-400600')" target="_blank">01990-400600</a>
                                </p>
                                <p>
                                    Marketing: <a class="atage" style="color: white;" @click="callNumber('tel:01324-418713')" target="_blank">01324-418713</a>
                                </p>
                                <p>
                                    Sales: <a class="atage" style="color: white;" @click="callNumber('tel:01324-418715')" target="_blank">01324-418715</a>
                                    
                                </p>
                                <p>
                                    Service: <a class="atage" style="color: white;" @click="callNumber('tel:01324-418723')" target="_blank">01324-418723</a>
                                </p>
                                <p>
                                    <!-- <i class="fa fa-mobile" aria-hidden="true"></i> &nbsp; (+91)-987654XXXX -->
                                </p>
                            </div>
                        </div>
                        <div class="space"></div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-lg-4 p-tp-12 m-auto">
                    <div class="gi-box">
                        <div class="detail">
                            <div class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></div>
                            <div class="info">
                                <h3 class="title">Address</h3>
                                <p>
                                    <b>Corporate Office:</b> 14, Pacific Center (Ground Floor) , Bir Uttam A.K. Khandakar Sarak, Mohakhali C/A, Dhaka 1212, Bangladesh.
                                </p>
                                <br>
                            </div>
                        </div>
                        <div class="space"></div>
                    </div>
                </div>
            </div>
            <div class="row p-t-80 mb-4">
                <div class="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0723993646657!2d90.39718762533687!3d23.780436078649892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76c7cff3d19%3A0xa801e0be00217aec!2sSPEEDOZ%20Limited!5e0!3m2!1sen!2sbd!4v1715424640844!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="fname" v-model="contact.name" placeholder="Full Name">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="umail" v-model="contact.email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="phone" v-model="contact.phone" placeholder="Phone">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" v-model="contact.message"></textarea>
                        </div>
                        <div class="d-flex"><button type="button" @click="saveConact" class="router-link-active router-link-exact-active text-uppercase custom_orange-btn mr-3">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
    return {
      contact: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    callNumber(number) {
			console.log(number)
			window.location.href = number;
		},
    redirectToGmail(emailaddress) {
      const email = emailaddress;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      window.open(gmailUrl, '_blank');
    },
    async saveConact() {
            if(!this.contact.name){
                return this.$store.dispatch('notification/error', 'Name is required');
            }
            if(!this.contact.phone){
                return this.$store.dispatch('notification/error', 'Phone Number is required');
            }
            if(!this.contact.message){
                return this.$store.dispatch('notification/error', 'Message Number is required');
            }
		    let isSuccess = await this.$store.dispatch('aditiondata/storContact', this.contact);
            if(isSuccess) {
                this.contact.name= '';
                this.contact.phone= '';
                this.contact.email= '';
                this.contact.message= '';
            }
        },
  },
}
</script>
<style>
.atage:hover{
	border-bottom: 1px solid white;
	width: fit-content;
}
</style>
<template>
    <section class="gi-blog padding-tb-40">
        <div class="container">
            <div class="row" v-if="newsDetails">
                <div class="gi-blogs-rightside col-md-12">

                    <!-- Blog content Start -->
                    <div class="gi-blogs-content">
                        <div class="gi-blogs-inner">
                            <div class="gi-single-blog-item">
                                <div class="single-blog-info">
                                    <figure class="blog-img"><a href="#"><img :src="`${$store.state.hostName}${newsDetails.image}`" alt="blog imag"></a>
                                    </figure>
                                    <div class="single-blog-detail" v-html="newsDetails.description">

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Comments Start -->
                        <!-- <div class="gi-blog-comments m-t-80">
                            <div class="gi-blog-cmt-preview">
                                <div class="gi-blog-comment-wrapper">
                                    <h4 class="gi-blog-dgi-title">Comments : 05</h4>
                                    <div class="gi-single-comment-wrapper mt-35">
                                        <div class="gi-blog-user-img">
                                            <img src="assets/img/user/1.jpg" alt="blog image">
                                        </div>
                                        <div class="gi-blog-comment-content">
                                            <h5>John Deo</h5>
                                            <span>October 14, 2018 </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim
                                                ad minim veniam. </p>
                                            <div class="gi-blog-details-btn">
                                                <a href="javascript:void(0)">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gi-single-comment-wrapper sub-cmt">
                                        <div class="gi-blog-user-img">
                                            <img src="assets/img/user/2.jpg" alt="blog image">
                                        </div>
                                        <div class="gi-blog-comment-content">
                                            <h5>Jenifer lowes</h5>
                                            <span>October 14, 2018 </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolor magna aliqua. labore et
                                                dolor magna aliqua.</p>
                                            <div class="gi-blog-details-btn">
                                                <a href="javascript:void(0)">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gi-blog-cmt-form">
                                <div class="gi-blog-reply-wrapper mt-50">
                                    <h4 class="gi-blog-dgi-title">Leave A Reply</h4>
                                    <form class="gi-blog-form" action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="gi-leave-form">
                                                    <input type="text" placeholder="Full Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="gi-leave-form">
                                                    <input type="email" placeholder="Email Address ">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="gi-text-leave">
                                                    <textarea placeholder="Message"></textarea>
                                                    <a href="#" class="gi-btn-2">Submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> -->
                        <!-- Comments End -->
                    </div>
                    <!--Blog content End -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        newsDetails() {
            return this.$store.getters['aditiondata/newsDetails'];
        },
    }
}
</script>
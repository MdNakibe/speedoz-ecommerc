<template>
    <section class="gi-blog padding-tb-40">
        <div class="container">
            <div class="section-title-2">
                <h2 class="gi-title"><span> </span>News</h2>
            </div>
            <div class="row" v-if="this.$store.getters['aditiondata/news']">
                <div class="gi-blogs-rightside col-lg-12 col-md-12 mb-4">

                    <!-- Blog content Start -->
                    <div class="gi-blogs-content">
                        <div class="gi-blogs-inner">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 mb-6 gi-blog-block" v-for="(news, ind) in displayedPosts" :key="ind">
                                    <div class="gi-blog-item">
                                        <div class="blog-info">
                                            <a href="#"><img :src="`${$store.state.hostName}${news.image}`" alt="news imag" style="width: 60%;height: 60%;"></a>
                                            <div class="detail">
                                                <!-- <label>June 30,2022 - <a href="#">Organic</a></label> -->
                                                <h3><a href="#">{{ news.title }}</a></h3>
                                                <p class="text-length">{{ news.sort_description }}</p>
                                                <div class="more-info">
                                                    <button type="button" class="btn" @click="newsDetails(news)">Read More</button>
                                                    <!-- <a href="blog-detail-left-sidebar.html" @click="newsDetails(news)">Read More<i class="gicon gi-angle-double-right"></i></a> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Pagination Start -->
                        <div class="gi-pro-pagination" v-if="this.$store.getters['aditiondata/news']">
                            <span></span>
                            <ul class="gi-pro-pagination-inner">
                                
                                <li><a class="next" href="#" @click.prevent="prevPage" :class="{ disabled: page === 1 }">Previous <i class="gicon gi-angle-right"></i></a></li>
                                <li v-for="pageNumber in pages.slice(page - 1, page + 4)" :key="pageNumber">
                                <a href="#" @click.prevent="setPage(pageNumber)" :class="{ active: pageNumber === page }">{{ pageNumber }}</a>
                                </li>
                                <li v-if="page + 4 < pages.length"><span>...</span></li>
                                <li v-if="page + 4 < pages.length"><a href="#" @click.prevent="setPage(pages.length)">{{ pages.length }}</a></li>
                                <li><a class="next" href="#" @click.prevent="nextPage" :class="{ disabled: page === pages.length }">Next <i class="gicon gi-angle-right"></i></a></li>
                            </ul>
                            <!-- <span>Showing 1-6 of 20 items</span> -->
                            
                        </div>
                        <!-- Pagination End -->
                    </div>
                    <!--Blog content End -->
                </div>

                <!-- Sidebar Area Start -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            data:null,
            page: 1,
			perPage: 5,
			pages: [],	
        }
    },
	async created() {
        this.$store.dispatch("aditiondata/getNewsData",{type: 2});
    },
    computed: {
        posts () {
      return this.$store.getters['aditiondata/news'];
    },
    displayedPosts () {
      return this.paginate(this.posts);
    },
    pages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      return Array.from({ length: numberOfPages }, (v, i) => i + 1);
    }
	},
    methods: {paginate (posts) {
      let from = (this.page - 1) * this.perPage;
      let to = this.page * this.perPage;
      return posts.slice(from, to);
    },
    setPage (pageNumber) {
      this.page = pageNumber;
    },
    prevPage () {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage () {
      if (this.page < this.pages.length) {
        this.page++;
      }
    },
        newsDetails(data){
            console.log(data)
            if(data){
                this.$store.dispatch('aditiondata/newsDetails', data);
                this.$router.push('/news/' + data.slug);
                this.data = null;
            }
        }
    },
}
</script>
<style>
.more-info .btn{
    border-radius: 25px;
    background: black;
    color: white;
}
.more-info .btn:hover{
    border-radius: 25px;
    background: black;
    color: red;
}
</style>
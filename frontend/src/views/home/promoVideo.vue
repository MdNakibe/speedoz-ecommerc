<template>
    <div v-if="filteredCategory" class="mt-5">
		<div class="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
			<h4 class="gi-title"><span>LATEST</span> VIDEO</h4>
			<p>Check out our latest motorcycle video to see our top-of-the-line models in action and learn about their impressive features.</p>
		</div>
        <section class="content-inner-2 section-pattren1">
			<img class="image" :src="`${$store.state.hostName}${filteredCategory.image}`" alt="Your Image">
			<a href="#" class="gi-btn-group quickview" data-link-action="quickview" title="Play Video" data-bs-toggle="modal" data-bs-target="#video"><i class="fi-rr-eye play-btn"></i></a>
			 
		</section>
		<div class="modal fade quickview-modal" id="video" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<button type="button" class="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
					<div class="modal-body" style="padding:0px">
						<iframe width="100%" height="400" :src="filteredCategory.url" 
						title="YouTube video player" frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	 async created() {
        this.$store.dispatch("home/getPromoVideo")
	},
	computed: {
		filteredCategory() {
			return this.$store.getters['home/promo'];
		},
	},
}
</script>
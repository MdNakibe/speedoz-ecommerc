<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Promotional Video</h4>
        </div>
        <div class="page-btn">
          <button
            type="button"
            class="btn btn-added"
            @click="dialog = true"
          >
            <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add Protional Video
          </button>
        </div>
        <v-dialog
        v-model="dialog"
        scrollable
        width="800"
      >
    <v-card>
      <div class="modal-header">
                <h5 class="modal-title">Add Promotional Video</h5>
                <button
                  @click="dialog = false"
                  class="close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body row">
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label>Product Url</label>
                    <input type="text" v-model="sliderData.url" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label>Image Uploade</label>
                    <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file" />
                    <div class="border p-2 mt-3" v-if="preview">
                      <p>Preview Here:</p>
                      <div class="row">
                          <div class="col-lg-4 col-sm-4 col-4">
                            <img :src="preview" class="img-fluid" />
                        <p class="mb-0">file name: {{ image.name }}</p>
                        <p class="mb-0">size: {{ image.size/1024 }}KB</p>
                          </div>
                          <button class="btn btn-cancel" @click="reset">Clear All</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button @click="saveCategory" class="btn btn-submit me-2">Submit</button>
                <button @click="dialog = false" class="btn btn-cancel">
                  Close
                </button>
              </div>
    </v-card>
      </v-dialog>
      </div>
      <div class="card">
        <div class="card-body">
        <div class="search-set">
          </div>
          <div class="table-responsive">
            <table class="table table-border">
              <thead>
                <tr>
                  <th>Url</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="filteredCategory">
                <tr>
                  <td>{{ filteredCategory.url }}</td>
                  <td><img style="display:block;width:200px;" :src="`${$store.state.hostName}${filteredCategory.image}`" alt=""></td>
                  <td>
                    <v-icon small @click="editCategory(filteredCategory)" color="primary">mdi-circle-edit-outline</v-icon>
                    <!-- <v-icon small @click="catagoryDelete(item.id)" color="danger">mdi-delete-circle-outline</v-icon> -->
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="5" class="text-center">No Data Found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      dialog: false,
      searchTerm: "",
      sliderData: {
        main_text: "",
        id: null,
        url: "",
      },
        preview: null,
        image: null,
    };
  },
  watch: {
    pageSize(pageSize){
      this.handlePageSizeChange();
    }
  },
  async created() {
        this.$store.dispatch("home/getPromoVideo")
  },
  computed: {
    filteredCategory() {
      return this.$store.getters['home/promo'];
    },
  },
  methods:{
    
    reset: function() {
        this.image = null;
        this.preview = null;
    },
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
        handlePageChange(newPage) {
            this.page = newPage;
        },
        handlePageSizeChange() {
            const newTotalPages = Math.ceil(this.filteredCategory.length / this.pageSize);
            if (this.page > newTotalPages) {
                this.page = newTotalPages || 1;
            }
        },
        async saveCategory() {
            let data = {
                slider: this.sliderData,
                image: this.image,
            }
		    let isSuccess = await this.$store.dispatch('home/savePromotioanlVideo', data);
            if(isSuccess) {
                this.sliderData.main_text= '';
                this.sliderData.id= null;
                this.dialog = false;
            }
        },
        editCategory(item){
            this.dialog = true;
            this.sliderData.id= item.id;
            this.sliderData.url= item.url;
            this.preview = this.$store.state.hostName  + item.image;
            this.image = item.image;
        },
        async statusUpdate(id,code){
            let data = {
                id: id,
                code: code,
            }
            await this.$store.dispatch('category/statusUpdate', data);
        },
    },
};
</script>

<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Slider List</h4>
        </div>
        <div class="page-btn">
          <button
            type="button"
            class="btn btn-added"
            @click="dialog = true"
          >
            <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add New Slider
          </button>
        </div>
        <v-dialog
        v-model="dialog"
        scrollable
        width="800"
      >
    <v-card>
      <div class="modal-header">
                <h5 class="modal-title">Add Category</h5>
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
                    <label>Heading Text</label>
                    <input type="text" v-model="sliderData.main_text" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label>Shop Url</label>
                    <input type="text" v-model="sliderData.url" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea name="" id="" cols="30" v-model="sliderData.description" rows="10"></textarea>
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
          <div class="search-path">
            <label>
                <select v-model="pageSize"
                @input="handlePageSizeChange" aria-controls="DataTables_Table_0" class="custom-select custom-select-sm form-control form-control-sm">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </label>
          </div>
            <div class="search-input ml-3">
              <div id="DataTables_Table_0_filter" class="dataTables_filter">
                <label> <input type="text" v-model="searchTerm" class="form-control form-control-sm" placeholder="Search..." /></label>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-border">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Heading Text</th>
                  <th>Url</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="paginatedCategorys.length > 0">
                <tr v-for="(item, ind) in paginatedCategorys" :key="ind">
                  <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                  <td>{{ item.main_text }}</td>
                  <td>{{ item.url }}</td>
                  <td>{{ truncateDescription(item.description) }}</td>
                  <td><img style="display:block;width:200px;" :src="`${$store.state.hostName}${item.image}`" alt=""></td>
                  <td>
                    <v-icon small @click="editCategory(item)" color="primary">mdi-circle-edit-outline</v-icon>
                    <v-icon small @click="catagoryDelete(item.id)" color="danger">mdi-delete-circle-outline</v-icon>
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
      <v-pagination
             v-model="page"
            :length="totalPages"
            :total-visible="7"
            @change="handlePageChange"
            class="page-link"
            rounded="circle"
          ></v-pagination>
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
        description: null,
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
        this.$store.dispatch("home/getSlider")
  },
  computed: {
    filteredCategory() {
      const category = this.$store.getters['home/sliders'];
            if (this.searchTerm === '') {
                return category;
            }else{
                return category.filter(category => this.categoryGlobalFilter(category, this.searchTerm));
            }
    },
    totalPages() {
      return Math.ceil(this.filteredCategory.length / this.pageSize);
    },
    paginatedCategorys() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredCategory.slice(start, end);
    },
  },
  methods:{
    truncateDescription(description) {
            if (typeof description === 'string') {
                const words = description.split(' ');
                if (words.length > 20) {
                return words.slice(0, 8).join(' ') + '...'; 
                } else {
                return description;
                }
            } else {
                return description;
            }
        },
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
		    let isSuccess = await this.$store.dispatch('home/saveSlider', data);
            if(isSuccess) {
                this.sliderData.main_text= '';
                this.sliderData.id= null;
                this.sliderData.description= '';
                this.dialog = false;
            }
        },
        editCategory(item){
            this.dialog = true;
            this.sliderData.id= item.id;
            this.sliderData.main_text= item.main_text;
            this.sliderData.description= item.description;
            this.preview = this.$store.state.hostName  + item.image;
            this.image = item.image;
        },

        async catagoryDelete(id){
            let data = {
                id: id,
            }
            await this.$store.dispatch('home/deleteSlider', data);
        }
    },
};
</script>

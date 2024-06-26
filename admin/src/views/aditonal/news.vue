<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>News List</h4>
        </div>
        <div class="page-btn">
          <button
            type="button"
            class="btn btn-added"
            @click="dialog = true"
          >
            <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add New News
          </button>
        </div>
        <v-dialog
        v-model="dialog"
        scrollable
        width="1200"
      >
    <v-card>
      <div class="modal-header">
                <h5 class="modal-title">Add News</h5>
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
                    <label>News Title</label>
                    <input type="text" v-model="newsData.title" />
                  </div>
                </div>
                <div class="col-lg-8 col-sm-8 col-12">
                  <div class="form-group">
                    <label>Sort Description</label>
                    <textarea v-model="newsData.sort_description"></textarea>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-4 col-12">
                  <div class="form-group">
                    <label>Publish Date</label>
                    <input type="date" v-model="newsData.publish_date" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label>Description</label>
                    <froala v-model:value="description" id="edit" :tag="'textarea'" :config="config" ></froala>
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
                <button @click="saveNews" class="btn btn-submit me-2">Submit</button>
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
                <label><input type="text" v-model="searchTerm" class="form-control form-control-sm" placeholder="Search..." /></label>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-border">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Title</th>
                  <th>Url</th>
                  <th>Sort Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="paginatedCategorys.length > 0">
                <tr v-for="(item, ind) in paginatedCategorys" :key="ind">
                  <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.slug }}</td>
                  <td>{{ truncateDescription(item.sort_description) }}</td>
                  <td><img style="display:block;width:200px;" :src="`${$store.state.hostName}${item.image}`" alt=""></td>
                  <td>
                    <v-icon small @click="editCategory(item)" color="primary">mdi-circle-edit-outline</v-icon>
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
      newsData: {
        title: "",
        id: null,
        old_image: null,
        publish_date: new Date().toISOString().substr(0, 10),
        sort_description: "",
      },
        preview: null,
        image: null,
        description: null,
        config: {
          events: {
            'contentChanged': function () {
              this.description = this.html.get();
            }
          }
        },
    };
  },
  watch: {
    pageSize(pageSize){
      this.handlePageSizeChange();
    }
  },
  async created() {
        this.$store.dispatch("aditonal/getNews")
  },
  computed: {
    filteredCategory() {
      const category = this.$store.getters['aditonal/news'];
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
      if(this.newsData.id){
        this.newsData.old_image = this.image;
      }
        this.image = null;
        this.preview = null;
        document.getElementById('my-file').value = null;
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
        async saveNews() {
          let tempDiv = document.createElement('div');
          tempDiv.innerHTML = this.description;

          // Find the <p> element with data-f-id="pbf" and remove it
          let elementToRemove = tempDiv.querySelector('p[data-f-id="pbf"]');
          if (elementToRemove) {
            elementToRemove.remove();
          }

          // Update the content with the modified HTML
          this.description = tempDiv.innerHTML;
            let data = {
                news: this.newsData,
                image: this.image,
                description: this.description,
            }
		    let isSuccess = await this.$store.dispatch('aditonal/saveNews', data);
          if(isSuccess) {
              this.newsData.title = '';
              this.newsData.id = null;
              this.newsData.sort_description = '';
              this.description = '';
              this.image = null;
              this.preview = null;
              document.getElementById('my-file').value = null;
              this.dialog = false;
          }
        },
        editCategory(item){
            this.dialog = true;
            this.newsData.id= item.id;
            this.newsData.title= item.title;
            this.description= item.description;
            this.newsData.publish_date= item.publish_date;
            this.newsData.sort_description= item.sort_description;
            this.preview = this.$store.state.hostName  + item.image;
            this.image = item.image;
        },

        // async catagoryDelete(id){
        //     let data = {
        //         id: id,
        //     }
        //     await this.$store.dispatch('home/deleteSlider', data);
        // }
    },
};
</script>
<style>
  .fr-view {
    word-wrap: break-word;
    height: 300px;
}
</style>
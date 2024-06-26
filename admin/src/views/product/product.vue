<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Product List</h4>
        </div>
        <div class="page-btn">
          <router-link to="/product-add">
            <button
            type="button"
            class="btn btn-added"
          >
            <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add New Procuct
          </button>
          </router-link>
        </div>
        <v-dialog
        v-model="dialog"
        scrollable
        width="1200"
      >
      <v-card>
           <div class="modal-header">
                <h5 class="modal-title">View Product</h5>
                <button
                  @click="dialog = false"
                  class="close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body row" v-if="viewData">
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="col-lg-4 col-sm-4 col-4" style="float: right">
                      <v-btn color="indigo-darken-3" 
                      style="float: right"
                      @click="addFeatured(viewData.id)">
                        Add Featured Product
                      </v-btn>
                  </div>
                </div>
                  <div class="col-lg-6 col-sm-6 col-12">
                        <div class="form-group">
                          <h3>Product Name</h3>
                          <p>{{ viewData.name }}</p>
                        </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-12">
                        <div class="form-group">
                          <h3>Meta title</h3>
                          <p>{{ viewData.name }}</p>
                        </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-12">
                        <div class="form-group">
                          <h3>Image</h3>
                          <img style="display:block;width:200px;" :src="`${$store.state.hostName}${viewData.image}`" alt="">
                        </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-12">
                        <div class="form-group">
                          <h3>Description</h3>
                          <div class="custom-table" v-html="viewData.description"></div>
                        </div>
                  </div>
              </div>
              <div class="modal-footer">
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
                  <th>Name</th>
                  <!-- <th>Description</th> -->
                  <th>Regular Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="paginatedCategorys.length > 0">
                <tr v-for="(item, ind) in paginatedCategorys" :key="ind">
                  <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                  <td>{{ item.name }}</td>
                  <!-- <td>{{ item.description }}</td> -->
                  <td>{{ item.regular_price }}</td>

                  <td><img style="display:block;width:100px;" :src="`${$store.state.hostName}${item.image}`" alt=""></td>
                  <td>
                    <v-icon small @click="viewProduct(item)" color="info">mdi-eye</v-icon>
                    <v-icon small @click="editProduct(item)"  color="green">mdi-circle-edit-outline</v-icon>
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
      viewData: null,
      editdata:{},
    };
  },
  watch: {
    pageSize(pageSize){
      this.handlePageSizeChange();
    }
  },
  async created() {
        this.$store.dispatch("product/getProduct")
    },
  computed: {
    filteredCategory() {
      const category = this.$store.getters['product/products'];
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
    async addFeatured(id){
      console.log(id)
      await this.$store.dispatch('product/savefeatured', {product_id: id});
    },
    editProduct(data){
      if(data){
        this.$store.dispatch('product/productEdit', data);
        this.$router.push('/product-edit');
      }
    },
      viewProduct(item){
        this.dialog = true;
        this.viewData = item;
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
    },
};
</script>
<style>
    .custom-table table{
        border-collapse: collapse;
        width: 100%;
    }
    .custom-table th, .custom-table td {
          border: 0.1rem solid #ddd;
          line-height: 26px;
          margin: 0;
          overflow: visible;
          padding: 0.5em;
    }
    .custom-table th {
        background-color: #f2f2f2;
    }
</style>
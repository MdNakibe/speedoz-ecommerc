<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Child Category List</h4>
        </div>
        <div class="page-btn">
          <button
            type="button"
            class="btn btn-added"
            @click="dialog = true"
          >
            <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add New Child Category
          </button>
        </div>
        <v-dialog
        v-model="dialog"
        scrollable
      >
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
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
                    <label>Root Category </label>
                    <model-list-select 
                          :list="$store.getters['category/subcategories']" 
                          option-value="id" option-text="name" 
                          :placeholder="$store.getters['category/subcategories'].length > 0 ? 'Select Parent Category' : 'No data found'"
                          v-model="rootcategory" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label>Child Category Name</label>
                    <input type="text" v-model="categoryData.name" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button @click="saveCategory" class="btn btn-submit me-2">Submit</button>
                <button @click="dialog = false" class="btn btn-cancel">
                  Close
                </button>
              </div>
            </div>
          </div>
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
                  <th>Parent Name</th>
                  <th>Sub Name</th>
                  <th>Child Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="paginatedCategorys.length > 0">
                <tr v-for="(item, ind) in paginatedCategorys" :key="ind">
                  <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                  <td>{{ item.parent.parent.name }}</td>
                  <td>{{ item.parent.name }}</td>
                  <td>{{ item.name }}</td>
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
      categoryData: {
        name: "",
        id: null,
        parent_id: null,
        type: 3,
      },
      rootcategory:{
            id: null,
        },
    };
  },
  watch: {
    pageSize(pageSize){
      this.handlePageSizeChange();
    },
    rootcategory(data) {
            if(data == undefined) return;
            this.categoryData.parent_id = data.id;
        },
  },
  async created() {
        this.$store.dispatch("category/getSubCategories")
        this.$store.dispatch("category/getChildCategories")
    },
  computed: {
    filteredCategory() {
      const category = this.$store.getters['category/childcategories'];
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
            if(!this.categoryData.parent_id){
                return this.$store.dispatch('notification/error', 'Select Root Category');
            }
            if(!this.categoryData.name){
                return this.$store.dispatch('notification/error', 'Category Name is required');
            }
		    let isSuccess = await this.$store.dispatch('category/saveCategory', this.categoryData);
            if(isSuccess) {
                this.categoryData.name= '';
                this.categoryData.id= null;
                this.dialog = false;
            }
        },
        editCategory(item){
            this.dialog = true;
            this.categoryData.id= item.id;
            this.categoryData.parent_id= item.parent.id;
            this.rootcategory.id= item.parent.id;
            this.categoryData.name= item.name;
        },
        async statusUpdate(id,code){
            let data = {
                id: id,
                code: code,
            }
            await this.$store.dispatch('category/statusUpdate', data);
        },
        async catagoryDelete(id){
            let data = {
                id: id,
                type:3,
            }
            await this.$store.dispatch('category/catagoryDelete', data);
        }
    },
};
</script>

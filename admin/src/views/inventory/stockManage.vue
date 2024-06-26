<template>
    <div class="page-wrapper">
      <div class="content">
        <div class="page-header">
          <div class="page-title">
            <h4>Product Stock List</h4>
          </div>
          <div class="page-btn">
            <button
              type="button"
              class="btn btn-added"
              @click="add"
            >
              <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add Product Stock
            </button>
          </div>
          <v-dialog
          v-model="dialog"
         scrollable
        width="800"
        >
        <v-card>
          <div class="modal-header">
            <h5 class="modal-title">Add Stock Product</h5>
            <button
              @click="dialog = false"
              class="close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body row">
            <div class="col-lg-6 col-sm-6 col-6">
              <div class="form-group">
                <div class="custom-switch-inner">
                  <!-- <p class="mb-0"> Danger </p> -->
                  <label>Has Variant </label>
                  <input type="checkbox" class="custom-control-input bg-danger" id="customSwitch-33" v-model="stockData.hasVariant">
                  <label class="custom-control-label" for="customSwitch-33" data-on-label="Yes" data-off-label="No">
                  </label>
               </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 col-12">
              <div class="form-group">
                <label>Product </label>
                <model-list-select 
                      :list="$store.getters['product/products']" 
                      option-value="id" option-text="name" 
                      :placeholder="$store.getters['product/products'].length > 0 ? 'Select Product' : 'No data found'"
                      v-model="product" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-6">
              <div class="form-group">
                <label>Quantity </label>
              <input type="number" v-model="stockData.current_stock" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-6" v-if="stockData.hasVariant == 1">
              <div class="form-group">
                <label>Select Size </label>
                <select class="form-control form-control-sm mb-3" v-model="stockData.size">
                  <option selected="">Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
               </select>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-6 mt-7" v-if="stockData.hasVariant == 1">
              <div class="form-group">
                <button @click="addVariant" class="btn btn-submit me-2">Add Variant</button>
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 col-12" v-if="stockData.hasVariant == 1">
              <div class="form-group">
                <div class="card"  v-if="cart.length > 1 ">
                  <div class="card-header">
                    <h5 class="card-title">Product Variant Information</h5>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th class="text-center">Quantity</th>
                            <th class="text-center">Size</th>
                            <th class="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(cart, ind) in cart" :key="ind">
                              <td class="text-center">{{ cart.current_stock }}</td>
                              <td class="text-center">{{ cart.size }}</td>
                              <td class="text-center">
                                <v-icon small @click="deleteCart(ind)" color="danger">mdi-delete-circle-outline</v-icon>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button @click="saveVariant" class="btn btn-submit me-2">Submit</button>
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
                    <th>Product Name</th>
                    <th>Product image</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="paginatedCategorys.length > 0">
                  <tr v-for="(item, ind) in paginatedCategorys" :key="ind">
                    <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                    <td>{{ item.name }}</td>
                    <td><img style="display:block;width:200px;" :src="`${$store.state.hostName}${item.image}`" alt=""></td>
                   <td>
                    <tr v-for="(pro, ind) in item.stock" :key="ind">
                      <td>
                        {{ pro.current_stock }} {{ item.hasVariant ? pro.size : '' }}
                      </td>
                     </tr>
                   </td>
                    <td>
                      <v-icon small @click="editCategory(item)" color="primary">mdi-circle-edit-outline</v-icon>
                      <!-- <v-icon small @click="helmatDelete(item.id)" color="danger">mdi-delete-circle-outline</v-icon> -->
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
        items: ['S', 'M', 'L', 'XL'],
        page: 1,
        pageSize: 10,
        dialog: false,
        searchTerm: "",
        stockData: {
            hasVariant:false,
            size:null,
            id: null,
            product_id: null,
            current_stock:null,
        },
        cart: [],
        editCartIndex: null,
        product:{
              id: null,
          },
        typedata:{},
      };
    },
    watch: {
      pageSize(pageSize){
        this.handlePageSizeChange();
      },
      product(data) {
              if(data == undefined) return;
              this.stockData.product_id = data.id;
        },
      typedata(data) {
              if(data == undefined) return;
              this.stockData.type_name = data.name;
        },
    },
    async created() {
          this.$store.dispatch("product/getProduct")
          this.$store.dispatch("product/getManageStock")
      },
    computed: {
      filteredCategory() {
        const category = this.$store.getters['product/stockmanage'];
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
      add(){
        this.cart = null,
        this.dialog = true;
      },
      deleteCart(ind) {
            this.cart.splice(ind, 1); 
        },
        addVariant(){
          let product = {
            current_stock: this.stockData.current_stock,
            size: this.stockData.size,
          }
          if(this.editCartIndex != null) {
                let checkIfExist = this.cart.findIndex(p => (p.size == product.size));
                if (checkIfExist > -1) {
                    this.$store.dispatch("notification/error", "Size already existed in Variant");
                    return;
                }
				      this.cart[this.editCartIndex] = product;
            } else {
                let cartIndex = this.cart.findIndex(p => p.size == this.product.size)
                if(cartIndex > -1) {
                    return this.$store.dispatch('notification/error', 'Size already existed in Variant');
                }
                this.cart.push(product);
                this.stockData.current_stock = null;
                this.stockData.size = null;
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
          async saveVariant() {
              if(!this.stockData.product_id){
                  return this.$store.dispatch('notification/error', 'Select Product');
              }
              // if(!this.stockData.hasVariant || !this.stockData.current_stock){
              //     return this.$store.dispatch('notification/error', 'Quantity must not be empty');
              // }
              if(this.stockData.hasVariant && this.cart.length == 0){
                  return this.$store.dispatch('notification/error', 'No variant added');
              }
              let data = {
                product: this.stockData,
                cart: this.cart,
            }
            // console.log(data);
              let isSuccess = await this.$store.dispatch('product/saveVariant', data);
              
              if(isSuccess) {
                  this.stockData.name= '';
                  this.stockData.id= null;
                  this.dialog = false;
              }
          },
          editCategory(item){
              this.cart = null;
              this.stockData.current_stock = null;
              this.dialog = true;
              this.stockData.product_id= item.id;
              this.product = item.id;
              this.stockData.hasVariant = item.hasVariant == 1 ? true : false;
              if(item.stock.length > 1){
                this.cart = item.stock;
              }else{
                this.stockData.current_stock = item.stock[0].current_stock;
              }
              console.log(this.stockData.current_stock);
              // this.product = item;
          },
          
          async helmatDelete(id){
              let data = {
                  id: id,
              }
              await this.$store.dispatch('product/deleteHemateProduct', data);
          }
      },
  };
  </script>
  
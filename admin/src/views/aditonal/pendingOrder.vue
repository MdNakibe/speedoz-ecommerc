<template>
    <div class="page-wrapper">
      <div class="content">
        <div class="page-header">
          <div class="page-title">
            <h4>Pendding Order List</h4>
          </div>
          
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
                    <th>Customer Name</th>
                    <th>Total Amount</th>
                    <th>Address</th>
                    <th>Payment</th>
                    <th>Dalivary Chrage</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="paginatedCategorys.length > 0">
                  <tr v-for="(item, ind) in paginatedCategorys" :key="ind">
                    <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.total_amount }}</td>
                    <td>{{ truncateDescription(item.address) }}</td>
                    <td>{{ item.payment_type }}</td>
                    <td>{{ item.dalivary_chrage }}</td>
                    <td>
                      <v-icon small @click="approved(item.id,'Approved')" color="primary">mdi-checkbox-marked-circle</v-icon>
                      <v-icon small @click="approved(item.id,'Cencele')" color="danger">mdi-cancel</v-icon>
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
      };
    },
    watch: {
      pageSize(pageSize){
        this.handlePageSizeChange();
      }
    },
    async created() {
          this.$store.dispatch("aditonal/getOrder", {status: 'Pending'})
      },
    computed: {
      filteredCategory() {
        const category = this.$store.getters['aditonal/order'];
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
                if (words.length > 10) {
                return words.slice(0, 8).join(' ') + '...'; 
                } else {
                return description;
                }
            } else {
                return description;
            }
        },
          async approved(id, status){
            let data = {
              id: id,
              status: status,
            }
            await this.$store.dispatch('aditonal/updateOrder', data);

            this.$store.dispatch("aditonal/getOrder", {status: 'Pending'})
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
  
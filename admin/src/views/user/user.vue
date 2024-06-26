<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>User List</h4>
        </div>
        <div class="page-btn">
          <button
            type="button"
            class="btn btn-added"
            @click="dialog = true"
          >
            <img src="/assets/img/icons/plus.svg" alt="img" class="me-1" />Add New User
          </button>
        </div>
        
        <v-dialog
        v-model="dialog"
         scrollable
         width="800"
      >
        <v-card>
          <div class="modal-header">
                <h5 class="modal-title">Add User</h5>
                <v-icon icon="mdi-close-circle" @click="dialog = false"></v-icon>
              </div>
              <div class="modal-body row">
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" v-model="user.profile_name" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label>User Name</label>
                    <input type="text" v-model="user.name" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="user.email" />
                  </div>
                </div>
                <div v-if="!user.id" class="col-lg-6 col-sm-6 col-6">
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="user.password" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <v-btn
                    color="blue-darken-4"
                    :loading="userload"
                    @click="saveUser"
                  >
                    Save

                    <template v-if="userload">
                      <v-progress-linear indeterminate></v-progress-linear>
                    </template>
                  </v-btn>
                  <v-btn
                    color="red-darken-4"
                   @click="dialog = false"
                  >
                    Close
                  </v-btn>
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
            <!-- <div class="search-input ml-3">
              <div id="DataTables_Table_0_filter" class="dataTables_filter">
                <label> <input type="text" v-model="searchTerm" class="form-control form-control-sm" placeholder="Search..." /></label>
              </div>
            </div> -->
          </div>
          <div class="table-responsive">
            <table class="table table-border">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, ind) in this.$store.getters['usermanagment/users']" :key="ind">
                  <td>{{ ind + 1 + (page - 1) * pageSize }}</td>
                  <td>{{ item.profile_name }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                   <v-tooltip text="Edit" location="top">
                          <template v-slot:activator="{ props }">
                              <v-icon v-bind="props" small @click="editUser(item)"  color="primary">mdi-circle-edit-outline</v-icon>
                          </template>
                    </v-tooltip>
                   <v-tooltip text="Permission" location="top">
                          <template v-slot:activator="{ props }">
                              <v-icon v-bind="props" small v-if="userType == 'admin'" @click="permissionModal(item)" color="green">mdi-account-key</v-icon>
                          </template>
                    </v-tooltip>
                    <!-- <v-icon small @click="unitDelete(item.id)" color="danger">mdi-delete-circle-outline</v-icon> -->
                  </td>
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
    <Permission :permission="permission" ref="permissionDialog"></Permission>
  </div>
  
</template>

<script>
import Permission from '../../components/Permission.vue'
export default {
  components:{
    Permission
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      dialog: false,
      permissiondailog: false,
      userload:false,
      searchTerm: "",
      isSelected: false,
      permission:null,
      userType:null,
      menuItems:[],
      user: {
            id: null,
            profile_name: '',
            name: '',
            email: '',
            password: null,
        },
    };
  },
  watch: {
    pageSize(pageSize){
      this.handlePageSizeChange();
    }
  },
  async created() {
        this.userType = this.$store.getters['user/GET_AUTH_INFO'].type;
        this.$store.dispatch("usermanagment/getUsers");
        this.menuItems = this.$store.getters["menu/menuItems"];
    },
  computed: {
    filteredUser() {
      const user = this.$store.getters['usermanagment/users'];
        return user;
    },
    totalPages() {
      return Math.ceil(this.filteredUser.length / this.pageSize);
    },
    paginatedCategorys() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredUser.slice(start, end);
    },
  },
  methods:{
    permissionModal(data){
      this.permission = data,
      this.$refs.permissionDialog.dialog = true
    },
        handlePageChange(newPage) {
            this.page = newPage;
        },
        handlePageSizeChange() {
            const newTotalPages = Math.ceil(this.filteredUser.length / this.pageSize);
            if (this.page > newTotalPages) {
                this.page = newTotalPages || 1;
            }
        },
        async saveUser() {
          this.userload = true;
            let isSuccess = await this.$store.dispatch('usermanagment/saveUser', this.user);
            if (isSuccess) {
              this.userload = false;
                this.dialog = false
                this.user.name = '';
                this.user.profile_name = '';
                this.user.email = '';
                this.user.password = '';
                this.user.id = null;
            }
            this.userload = false;
        },
        editUser(item) {
            this.dialog = true;
            this.user.id = item.id;
            this.user.name = item.name;
            this.user.profile_name = item.profile_name;
            this.user.email = item.email;
        },
    },
};
</script>

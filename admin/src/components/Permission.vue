<!-- TreeViewItem.vue -->
<template>
<v-dialog
        v-model="dialog"
         scrollable
         width="900"
        >
          <v-card>
            <div class="modal-header">
                  <h5 class="modal-title">Add Permission</h5>
                  <v-icon icon="mdi-close-circle" @click="dialog = false"></v-icon>
                </div>
             <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-3">
                      <div class="input-checkset">
                        <ul>
                          <li>
                            <v-btn
                              color="blue-darken-4"
                              @click="submitCheckedItems"
                            >
                              Save

                              <!-- <template v-if="userload">
                                <v-progress-linear indeterminate></v-progress-linear>
                              </template> -->
                            </v-btn>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="productdetails product-respon">
                        <ul>
                          <li v-for="(menuItem, index) in menuItems" :key="index">
                            <h4>{{ menuItem.label }}</h4>
                            <div class="input-checkset">
                              <ul v-if="menuItem.submenu">
                                <li v-for="(subItem, subIndex) in menuItem.submenuItems" :key="subIndex" class="mt-3">
                                  <label class="inputcheck" v-if="subItem.isRouterLink">
                                    {{ subItem.label }}
                                    <input type="checkbox" v-model="subItem.checked" :value="subItem.link" />
                                    <span class="checkmark"></span>
                                  </label>
                                </li>
                              </ul>
                              <ul v-else>
                                <li>
                                  <label class="inputcheck">
                                    {{ menuItem.label }}
                                    <input type="checkbox" v-model="menuItem.checked" :value="menuItem.link" />
                                    <span class="checkmark"></span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </v-card>
        </v-dialog>
  

</template>

<script>
export default {
  data() {
    return {
      menuItems:[],
      checkData:[],
      dialog:false,
      userId:null,
    };
  },
  props: ["permission"],
  async created() {
    this.menuItems = this.$store.getters["menu/menuItems"];
  },
  watch: {
    permission(permission) {
      this.checkData = null;
      this.userId = permission.id;
      this.menuItems.forEach(menuItem => {
        menuItem.checked = false;
        if (menuItem.submenu) {
          menuItem.submenuItems.forEach(subItem => {
            subItem.checked = false;
          });
        }
      });
      this.checkData = permission.permission;
      if(this.checkData){
        this.menuItems.forEach(menuItem => {
          if (this.checkData.includes(menuItem.link)) {
            menuItem.checked = true;
          }
          if (menuItem.submenu) {
            menuItem.submenuItems.forEach(subItem => {
              if (this.checkData.includes(subItem.link)) {
                subItem.checked = true;
              }
            });
          }
        });
      }else{
        this.checkData = null;
      }
    },
  },
  methods: {
    async submitCheckedItems() {
      // Collect checked items
      const checkedItems = [];
      this.menuItems.forEach((menuItem) => {
      if (menuItem.checked) {
        checkedItems.push({ link: menuItem.link }); // Push an object with index name and link value for menu items
      }
      if (menuItem.submenu) {
        menuItem.submenuItems.forEach((subItem) => {
          if (subItem.checked) {
            checkedItems.push({link: subItem.link }); // Push an object with index name and link value for submenu items
          }
        });
      }
      });
      if(checkedItems.length == 0){
        this.$store.dispatch("notification/error", "No Menu Has Selected");
                return;
      }
      let data = {
        permission: checkedItems,
        user_id: this.permission.id,
      }
      let isSuccess = await this.$store.dispatch('usermanagment/savePermission', data);
      if (isSuccess) {
        this.$store.dispatch("usermanagment/getUsers");
        this.checkData = null;
        this.dialog = false
      }
    },
    
  },
}
</script>

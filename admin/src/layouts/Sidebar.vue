<template>

      <div class="sidebar" id="sidebar">
          <div class="sidebar-inner slimscroll" style="overflow: hidden; width: 100%; height: 179px;">
            <div id="sidebar-menu" class="sidebar-menu">
              <ul>
                <li v-for="(menuItem, index) in filteredMenuItems" :key="index" :class="{ submenu: menuItem.submenu}">
                  <router-link v-if="menuItem.isRouterLink" :to="menuItem.link" :class="{ active: isActive(menuItem)}">
                    <img :src="menuItem.icon" alt="img" /><span>{{ menuItem.label }}</span>
                  </router-link>
                 <a v-else href="javascript:void(0);" :class="{ 'active': isActive(menuItem), 'subdrop': isActive(menuItem)}">
                    <img :src="menuItem.icon" alt="img" /><span>{{ menuItem.label }}</span>
                    <span class="menu-arrow" v-if="menuItem.submenu"></span>
                  </a>

                  <ul v-if="menuItem.submenu" :style="{ display: isActive(menuItem) ? 'block' : 'none' }">
                    <li v-for="(subItem, subIndex) in menuItem.submenuItems" :key="subIndex" :class="{ active: isActive(subItem) }">
                      <router-link :to="subItem.link" v-if="subItem.isRouterLink" :class="{ active: isActive(subItem) }">{{ subItem.label }}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems:[],
    };
  },
 computed: {
    filteredMenuItems() {
      // Get permission data from the store
      const user_data = this.$store.getters['user/GET_AUTH_INFO'];
      const permission = user_data.permission;
      const type = user_data.type;
      // Filter out menu items that are not included in the permission data
      if(type == 'admin'){
        return this.menuItems;
      }else{
        return this.menuItems.filter(item => {
        if (item.submenu) {
          // If the item has submenu items, filter them as well
          item.submenuItems = item.submenuItems.filter(subItem => permission.includes(subItem.link));
          return item.submenuItems.length > 0; // Return true if submenu items exist after filtering
        } else {
          return permission.includes(item.link); // Return true if the item's link is in the permission data
        }
      });
      }
    }
  },
  async created() {
    this.menuItems = this.$store.getters["menu/menuItems"];
    
  },
  methods: {
      isActive(item) {
        if (item.isRouterLink) {
          // Check if the current route exactly matches the item's link or starts with the base path
          return (
            this.$route.path === item.link ||
            this.$route.path.startsWith(item.link + '/') || // Consider a partial match
            this.$route.path.startsWith(item.link + '?') // Consider a partial match with query parameters
          );
        }

        return (
          (item.submenuItems && item.submenuItems.some(subItem => this.isActive(subItem))) ||
          this.$route.path === item.link ||
          (item.link !== '/' && this.$route.path.startsWith(item.link)) // Check for a partial match on submenu items
        );
      },
  },
};
</script>
<template>
   <div>
    <div class="gi-main-container">
      <div class="tab-pane fade show active" id="my-orders" role="tabpanel">
        <table id="my-orders-table" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Pament Type</th>
              <!-- <th class="action">Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in this.$store.getters['aditiondata/customerOrder']" :key="order.id">
              <td data-bs-toggle="modal" data-bs-target="#order_info" @click="viewInfo(order)">{{ order.number }} </td>
              <td>{{ order.total_amount }}</td>
              <td>{{ order.status }}</td>
              <td>{{ order.payment_type }}</td>
              <!-- <td>{{ order.status }}</td>
              <td>{{ order.total }}</td> -->
              <!-- <td class="action"><a href="#" class="view-order">View Order</a></td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal fade quickview-modal" id="order_info" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div v-if="info" class="modal-body">
            <div class="row">
              <table id="my-orders-table" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                <thead>
                  <tr>
                    <th>product Name</th>
                    <th>Price</th>
                    <!-- <th class="action">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, ind) in info.info" :key="ind">
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.price }}</td>
                    <!-- <td>{{ order.payment_type }}</td> -->
                    <!-- <td>{{ order.status }}</td>
                    <td>{{ order.total }}</td> -->
                    <!-- <td class="action"><a href="#" class="view-order">View Order</a></td> -->
                  </tr>
                </tbody>
              </table>
            </div>
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
        info:null,
      }
    },
    async created() {
          this.$store.dispatch("aditiondata/getCustomerOrder")
      },
    methods: {
      viewInfo(item){
        if(this.info){
          this.info = null;
        }
        this.info = item;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Add New Product</h4>
        </div>
        <div class="page-btn">
          <button type="button" class="btn btn-added">
            Back
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
         <form enctype="multipart/form-data">
           <div class="row">
           <div class="page-header">
              <div class="page-btn">
               <v-btn
                  color="#ff9f43"
                  :loading="loading"
                  @click="saveProduct"
                >
                  Save

                  <template v-if="loading">
                    <v-progress-linear indeterminate></v-progress-linear>
                  </template>
              </v-btn>
              </div>
          </div>
            <div class="col-lg-3 col-sm-12 col-12">
              <div class="form-group">
                <label>Parent Category</label>
                <model-list-select 
                          :list="$store.getters['category/categoryproduct']" 
                          option-value="id" option-text="name" 
                          :placeholder="$store.getters['category/categoryproduct'].length > 0 ? 'Select Parent Category' : 'No data found'"
                          v-model="parentcategory" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-12" v-if="subcategory.length > 0">
              <div class="form-group">
                <label>Sub Category</label>
                <model-list-select 
                          :list="subcategory" 
                          option-value="id" option-text="name" 
                          :placeholder="subcategory.length > 0 ? 'Select Parent Category' : 'No data found'"
                          v-model="subcategoryData" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-12" v-if="chilcategory.length > 0">
              <div class="form-group">
                <label>Child Category</label>
                <model-list-select 
                          :list="chilcategory" 
                          option-value="id" option-text="name" 
                          :placeholder="chilcategory.length > 0 ? 'Select Parent Category' : 'No data found'"
                          v-model="chilcategoryData" />
              </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-12">
              <div class="form-group">
                <label>Brand</label>
               <model-list-select 
                          :list="$store.getters['category/brands']" 
                          option-value="id" option-text="name" 
                          :placeholder="$store.getters['category/brands'].length > 0 ? 'Select Brand' : 'No data found'"
                          v-model="brand" />
              </div>
            </div>
            <div class="col-lg-8 col-sm-12 col-12">
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Entery Your Product Name" v-model="productData.name" />
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-4">
              <div class="form-group">
                <label>Regular Price</label>
                <input type="number" placeholder="Entery Your regular price" v-model="productData.regular_price" />
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 col-4">
              <div class="form-group">
                <label>Sort Description</label>
                <textarea cols="30" rows="10" placeholder="Entery Your sort description" v-model="productData.sort_description" ></textarea>
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 col-12">
              <div class="form-group">
                <label>Product Description</label>
                 <froala v-model:value="description" id="edit" :tag="'textarea'" :config="config" ></froala>
                <!-- <textarea name="" id="" cols="30" rows="10" v-model="productData.description"></textarea> -->
              </div>
            </div>
            <div class="col-lg-4 col-sm-4 col-12">
              <div class="form-group">
                <label>Main Image Uploade (Single)</label>
                <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file" />
                <div class="border p-2 mt-3" v-if="preview">
                  <p>Preview Here:</p>
                  <div class="row">
                      <div class="col-lg-12 col-sm-12 col-12">
                        <img :src="preview" class="img-fluid" />
                    <p class="mb-0">Name {{ image.name }}</p>
                      </div>
                      <div class="col-lg-4 col-sm-12 col-12">
                        <button class="btn btn-cancel" @click="reset">Clear</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-sm-8 col-8">
              <div class="form-group">
                <label>Related Image Uploade (Multipul)</label>
                <input type="file" accept="image/*" multiple="multiple" @change="previewMultiImage" class="form-control-file" id="my-file-multi">
                <div class="border p-2 mt-3" v-if="preview_list.length">
                  <p>Preview Here:</p>
                  <div class="row">
                      <div v-for="item, index in preview_list" :key="index" class="col-lg-6 col-sm-16 col-6">
                        <img :src="item" class="img-fluid" />
                        <p class="mb-0">file name: {{ image_list[index].name }}</p>
                        <p>size: {{ image_list[index].size/1024 }}KB</p>
                      </div>
                      <div class="col-lg-4 col-sm-12 col-12">
                        <button class="btn btn-cancel" @click="resetMulti">Clear All</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
         </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading:false,
        preview: null,
        image: null,
        preview_list: [],
        image_list: [],
        productData: {
          name: "",
          meta_title: "",
          category_id:null,
          subcategory_id:null,
          chilcategory_id:null,
          brand_id:null,
          id: null,
          regular_price: null,
          sort_description: null,
        },
        description: "",
        imagedata: null,
        config: {
          events: {
            'contentChanged': function () {
              this.description = this.html.get();
            }
          }
        },
        parentcategory:[],
        subcategoryData:[],
        subcategory:[],
        chilcategory:[],
        chilcategoryData:[],
        brand:[],
      };
    },
    watch: {
      parentcategory(data) {
        if(data == undefined) return;
        this.productData.category_id = data.id;
        if(this.subcategory.length > 0){
          this.subcategory = [];
          this.productData.subcategory_id = null;
        }
        if(this.chilcategory.length > 0){
          this.chilcategory = [];
          this.productData.chilcategory_id = null;
        }
        this.subcategory = data.child.length > 0 ? data.child : 0;
      },
      subcategoryData(data) {
        if(data == undefined) return;
        this.productData.subcategory_id = data.id;
        if(this.chilcategory.length > 0){
          this.chilcategory = [];
          this.productData.chilcategory_id = null;
        }
        this.chilcategory = data.child.length > 0 ? data.child : 0;
      },
      chilcategoryData(data) {
        if(data == undefined) return;
        this.productData.chilcategory_id = data.id;
      },
      brand(data) {
        if(data == undefined) return;
        this.productData.brand_id = data.id;
      },
  },
    async created() {
        this.$store.dispatch("category/getCategoriesProduct");
        this.$store.dispatch("category/getBrand")
    },
    methods: {
      async saveProduct(){
        this.loading = true;
        if(!this.productData.name){
          this.loading = false;
                return this.$store.dispatch('notification/error', 'Product Name is required');
        }
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
          product: this.productData,
          image: this.image,
          multiimage: this.image_list,
          description: this.description,
        }
      // console.log(this.description)
      let isSuccess = await this.$store.dispatch('product/saveProduct', data);
       if(isSuccess) {
        this.loading = false;
                this.$router.push('/product-list');
            }
    
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
      previewMultiImage: function(event) {
        var input = event.target;
        var count = input.files.length;
        var index = 0;
        if (input.files) {
          while(count --) {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.preview_list.push(e.target.result);
            }
            this.image_list.push(input.files[index]);
            reader.readAsDataURL(input.files[index]);
            index ++;
          }
        }
      },
      reset: function() {
        document.getElementById('my-file').value = null;
        this.image = null;
        this.preview = null;
      },
      resetMulti: function() {
         document.getElementById('my-file-multi').value = null;
         this.image_list = [];
        this.preview_list = [];
      },
    }
  }
</script>
<style>
  .fr-view {
    word-wrap: break-word;
    height: 400px;
}
</style>
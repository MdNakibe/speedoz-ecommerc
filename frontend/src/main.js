import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Vue3Toastify from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

// import 'froala-editor/js/third_party/embedly.min';
// import 'froala-editor/js/third_party/font_awesome.min';
// import 'froala-editor/js/third_party/spell_checker.min';
// import 'froala-editor/js/third_party/image_tui.min';


// import VueFroala from 'vue-froala-wysiwyg';

import { ModelListSelect  } from "vue-search-select";
import { ModelSelect  } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
const app = createApp(App);


app.use(store);

app.use(router);
window.axios = axios;

app.component('model-list-select', ModelListSelect);
app.component('model-select', ModelSelect);

app.use(Vue3Toastify,{autoclose:3000});
app.mount('#app');

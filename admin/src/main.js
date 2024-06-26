import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import helper from "./composable/helper";
import script from "./assets/script";
import Vue3Toastify from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
import axios from 'axios';
import { ModelListSelect  } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
import VueFroala from 'vue-froala-wysiwyg';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(VueFroala);
app.use(store);
app.use(router);
app.use(vuetify);
window.axios = axios;
app.mixin(helper);
app.mixin(script);

app.component('model-list-select', ModelListSelect);
app.use(Vue3Toastify,{autoclose:3000});
app.mount('#app');

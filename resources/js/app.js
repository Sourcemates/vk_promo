import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './views/App';
Vue.use(VueRouter);
Vue.use(BootstrapVue);
// const router = new VueRouter({
//     mode: 'history',
// });
const app = new Vue({
    el: '#app',
    components: {App},
});

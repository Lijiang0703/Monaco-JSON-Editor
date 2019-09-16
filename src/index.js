import Vue from 'vue';
import store from './store/index';
import Main from './components/main';

new Vue({
    el: '#editor',
    store,
    render: (h)=>h(Main)
})
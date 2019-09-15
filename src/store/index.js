import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import middle from './modules/middlele';
import panel from './modules/panel';
import op from './modules/op';

Vue.arguments(Vuex);
const store = new Vuex.Store({
    modules:{
        op,
        app,
        middle,
        panel
    }
})

export default store;
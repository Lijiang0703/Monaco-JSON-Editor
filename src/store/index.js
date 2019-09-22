import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import middle from './modules/middle';
import panel from './modules/panel';
import op from './modules/op';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        op,
        app: app,
        middle: middle,
        panel: panel
    },
    actions: {
        //集中管理actions
        updateAppData: ({ state, commit, dispatch }, data)=>{
            dispatch('app/updateData', data);
        }
    }
})

export default store;
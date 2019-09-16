// panel 数据管理
import Util from '../../util/util';
const panel = {
    namespaced: true,
    state: {
        data: []
    },
    getters: {

    },
    actions: {
        initData({commit}, data){
            const { appData, middleData } = data;
            const result = Util.positiveFormat(middleData, appData);
            commit('init', result);
        },
        updateData(){

        },
        change({state, commit}, data){
            //纪录op，同时更新app json数据

        }
    },
    mutations: {
        init(state, data){
            state.data = data;
        }
    }
}

export default panel;
// panel 数据管理
import Util from '../../util/util';
import jsonConvert from '../../util/jsonConvert';

const panel = {
    namespaced: true,
    state: {
        data: []
    },
    getters: {

    },
    actions: {
        initData({commit, rootState}, data){
            const appData = rootState.app.appData || {};
            const middleData = rootState.middle.mapJson || [];
            
            commit('init', {
                middleData,
                appData
            });
        },
        updateData({state, commit, rootState}, data = {}){
            const app = data.appData || rootState.app.appData || {};
            const middle = data.middleData || rootState.middle.mapJson || [];
            
            commit('init', {
                middleData: middle,
                appData: app
            });
        },
        change({state, commit, dispatch, rootState}, data){
            //纪录op，同时更新app json数据
            const { index, val } = data; //先处理简单的
            const formatData = {
                ...data,
                middleData: rootState.middle.mapJson || [],
                appData: rootState.app.appData || {}
            }
            const reverseData = Util.reverseFormat(formatData);
            const newData = Util.panelDataChange(data, state.data);
            dispatch('updateAppData', reverseData, {root: true});
            commit('dataChange', newData);
        }
    },
    mutations: {
        init(state, {middleData, appData}){
            const formatData = Util.positiveFormat(middleData, appData);
            const data = jsonConvert(formatData);
            state.data = data;
        },
        dataChange(state, data){
            state.data = data;
        }
    }
}

export default panel;
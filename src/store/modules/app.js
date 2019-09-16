// 应用数据管理
const app = {
    namespaced: true,
    state: {
        appData: {
            title1:{
                type: 'colorpicker',
                value: '#fff'
            },
            title2:{
                type: 'colorpicker',
                value: '#fff'
            },
            title:{
                type: 'colorpicker',
                value: '#fff'
            }
        }
    },
    getters: {

    },
    actions: {
        initData({state,commit}, data){
            commit('init', data);
        },
        updateData({state, commit}, data){
            
        }
    },
    mutations: {
        init(state, data){
            state.appData = data;
        }
    }
}

export default app;
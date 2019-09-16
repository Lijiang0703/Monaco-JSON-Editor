// 应用数据管理
const app = {
    namespaced: true,
    state: {
        appData: {}
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
// 数据处理中间层
const trans = {
    namespaced: true,
    state: {
        mapJson: [
            {
                type: 'button'
            },
            {
                type: 'checkbox'
            },
            {
                type: 'colorpicker',
                value: '${title.value}'
            }
        ]
    },
    getters: {

    },
    actions: {
        updateData({state, commit}, data){
            commit('init', data);
        }
    },
    mutations: {
        init(state, data){
            state.mapJson = data;
        }
    }
}

export default trans;


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

        }
    },
    mutations: {
        
    }
}

export default trans;


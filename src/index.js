import Vue from 'vue';
import store from './store/index';
import Main from './components/main';

new Vue({
    el: '#editor',
    store,
    render: (h)=> {
        return h(Main,{ 
            props:{
                idata: {
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
                    ],
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
                }
            }
        })
    }
})

export {
    store,
    Main
}
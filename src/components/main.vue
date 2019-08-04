<template>
    <div class="monaco">
        <Editor @updateValue="update"></Editor>
        <Preview :data="value"></Preview>
    </div>    
</template>
<script>
import Editor from './editor';
import Preview from './preview';
export default {
    data(){
        return {
            // value: [{}]
            value: [{
                type: 'button'
            },
            {
                type: 'checkbox'
            },
            {
                type: 'colorpicker',
                value: '#fff'
            }]
        }
    },
    methods:{
        update: function(value){
            // this.value = value; //格式问题
        }
    },
    components: {
        Editor,
        Preview
    }
}
</script>
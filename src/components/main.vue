<template>
    <div class="monaco">
        <Editor @updateValue="update" :value="value"></Editor>
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
            value: [
                {
                    type: 'button'
                },
                {
                    type: 'checkbox'
                },
                {
                    type: 'colorpicker',
                    value: '#fff'
                }
            ]
        }
    },
    methods:{
        update: function(value){
            console.log('updated')
            this.value = value;
        }
    },
    components: {
        Editor,
        Preview
    }
}
</script>
<template>
    <div class="monaco">
        <Editor @updateValue="update" :value="value" class="e_editor"></Editor>
        <Preview :data="value" class="e_preview"></Preview>
        <div>
            <ul>
                <li><span>command + s :保存</span></li>
            </ul>
        </div>
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
<style>
.monaco{
    width: 80%;
    margin: auto;
    /* height: 100%; */
    display: flex;
}
.e_editor{
    width: 50%;
    /* height: 100%; */
}
.e_preview{
    width: 50%;
    background: rgb(96, 96, 96);
}
</style>
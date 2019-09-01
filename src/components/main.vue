<template>
    <div class="monaco">
        <!-- <div class="title">
            <ul>
                <li>应用json</li>
                <li>panel json</li>
                <li>预览</li>
            </ul>
        </div> -->
        <Editor 
            @updateValue="updateJson"
            :value="appJson"
            class="e_editor"
            id="app_editor"
            language="javascript"></Editor>
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
import Util from '../util/util'
export default {
    data(){
        return {
            // value: [{}]
            appJson: {
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
            },
            value: [
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
        }
    },
    created : function(){
        this.value = this.formatJson();
    },
    methods:{
        update: function(value){
            console.log('updated')
            this.value = value;
        },
        updateJson: function(vaule){
            console.log(value);
            this.appJson = vaule;
        },
        formatJson: function(){
            // value值是处理得到的
            const value = Util.positiveFormat(this.value, this.appJson);
            return value;
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
    width: 90%;
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
.title{
    position: absolute;
    top: 0;
}
</style>
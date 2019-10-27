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
            @updateValue="updateAppJson"
            :value="appJson"
            class="e_editor"
            id="app_editor"
            ></Editor>
        <Editor @updateValue="update" :value="value" class="e_editor"></Editor>
        <Preview :data="json" class="e_preview"></Preview>
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
    props:{
        idata: {
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            json: []
        }
    },
    computed:{
        appJson: {
            get: function(){
                return this.$store.state.app.appData || [];
            },
            set: function(){

            }
        },
        value: {
            get: function(){
                return this.$store.state.middle.mapJson || {};
            },
            set: function(){

            }
        }
    },
    created : function(){
        // this.json = this.formatJson(); 
        // this.updateJson();
        // debugger
        const props = this.idata;
        const { mapJson, appData } = props;
        this.$store.dispatch('app/initData', appData);
        this.$store.dispatch('middle/initData', mapJson);
        this.$store.dispatch('panel/initData');
        // this.$store.dispatch('app/initData', this.appJson);
    },
    methods:{
        update: function(value){
            console.log('updated')
            // this.value = value;
            // this.updateJson();
            this.$store.dispatch('middle/updateData', value);
            this.$store.dispatch('panel/updateData', {
                middleData: value
            });
        },
        updateAppJson: function(value){
            console.log(value);
            // this.appJson = value;
            // this.updateJson();
            this.$store.dispatch('app/updateData', value);
            this.$store.dispatch('panel/updateData', {
                appData: value
            });
        },
        updateJson: function(){
            // this.json = this.formatJson();
            // this.$store.dispatch('panel/updateData');
        },
        formatJson: function(){
            // value值是处理得到的
            // const value = Util.positiveFormat(this.value, this.appJson);
            // return value;
        },
        // panelChange: function(val,oldVal,index){
        //     this.$store.dispatch('panel/change',{val,oldVal,index})
        // }
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
    height: 100%;
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
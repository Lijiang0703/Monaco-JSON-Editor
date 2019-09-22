<template>
    <div>
        <div :id="id" class="editor"></div>
    </div>
</template>
<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/editor/contrib/format/formatActions';
export default {
    props:{
        value:{
            type: [Array,Object],
            default: []
        },
        id:{
            type: String,
            default: 'monaco-editor'
        },
        language:{
            type: String,
            default: 'json'
        }
    },
    data(){
        return {
            monacoInstance: null
        }
    },
    mounted: function(){
        this.initEditor();
    },
    methods:{
        updateValue: function(value){
            console.log(value);
            this.$emit('updateValue',value);
        },
        initEditor: function(){
            const self = this;
            const value = this.value;
            const monacoInstance = monaco.editor.create(document.getElementById(this.id),{
                value:`${JSON.stringify(value)}`,
                language: this.language
            });
            monacoInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function(){
                console.log('saved')
                const value = monacoInstance.getValue();
                if(value) {
                    self.updateValue(JSON.parse(value));
                }
            });
            setTimeout(()=>{
                monacoInstance.getAction('editor.action.formatDocument').run();
            },1000)
            this.monacoInstance = monacoInstance;
        }
    },
    beforeDestroy: function(){
        this.monacoInstance.dispose();
    },
    watch: {
        value: function(data){
            console.log(1)
            // this.initEditor();
            this.monacoInstance.setValue(`${JSON.stringify(data)}`);
            this.monacoInstance.getAction('editor.action.formatDocument').run();
        }
    }
}
</script>
<style>
.editor{
    height: 500px;
    border: 1px solid #ccc;
}
</style>
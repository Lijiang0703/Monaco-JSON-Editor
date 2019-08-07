<template>
    <div id="monaco-editor"></div>    
</template>
<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';


    export default {
        props:{
            value:{
                type: Array,
                default: []
            }
        },
        data(){
            return {
                monacoInstance: null
            }
        },
        mounted: function(){
            const value = this.value;
            const monacoInstance = monaco.editor.create(document.getElementById("monaco-editor"),{
                value:`${JSON.stringify(value)}`,
                language: "json"
            });
            const self = this;
            this.monacoInstance = monacoInstance;
            monacoInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function(){
                console.log('saved')
                const value = monacoInstance.getValue();
                self.updateValue(JSON.parse(value));
            })
        },
        methods:{
            updateValue: function(value){
                console.log(value);
                this.$emit('updateValue',value);
            }
        },
        beforeDestroy: function(){
            this.monacoInstance.dispose();
        }
    }
</script>
<style>
#monaco-editor{
    height: 200px;
}
</style>
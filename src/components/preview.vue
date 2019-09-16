<template>
    <div id="preview">
        <ElementJson :elementJson="json" @change="onChange"></ElementJson>
    </div>
</template>
<script>
// import jsonConvert from "element-widget/src/util/jsonconvert";
// import ElementJson from "element-widget/src/main";
import ElementJson from "../elementComponents/main";
import config from '../elementComponents/index';

export default {
    props:{
        data: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            // json: []
        }
    },
    created: function(){
        // console.log(this.data)
        // this.json = jsonConvert(this.data)
    },
    computed: {
        json: function(){
            // return jsonConvert(this.data)
            return this.$store.state.panel.data;
        }
    },
    methods:{
        onChange: function(val,oldVal,index,isChildren,subIndex,key) {
            console.log(val,oldVal,index);
            // this.$emit('change', val, oldVal, index);
            this.$store.dispatch('panel/change', {
                key,
                val,
                index,
                subIndex,
                isChildren
            })
        }
    },
    components: {
        ElementJson
    }
}
</script>
<style>
#preview{
    padding: 10px;
}
</style>

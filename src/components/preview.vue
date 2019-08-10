<template>
    <div id="preview">
        <ElementJson :elementJson="json"></ElementJson>
    </div>
</template>
<script>
import jsonConvert from "element-widget/src/util/jsonconvert";
import ElementJson from "element-widget/src/main";

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
        console.log(this.data)
        // this.json = jsonConvert(this.data)
    },
    computed: {
        json: function(){
            return jsonConvert(this.data)
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

<template>
    <div>
        <el-row>
            <Label
                :title="title"
            ></Label>
            <el-select 
                v-model="c_value"
                @change="onChange"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.name || item.title || item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-row>
        <slot name="Select"></slot>
    </div>
</template>

<script>
import Label from './label';
export default {
    name: "Select",
    props:{
        value:{
            type:  [Number,String],
            default: '请选择'
        },
        title:{
            type: String
        },
        options:{
            type: Array,
            default: function(){
                return []
            }
        }
    },
    data(){
        return {
            // c_value: this.value
        }
    },
    computed:{
        c_value: {
            get: function(){
                return this.value
            },
            set: function(val){
                // this.value = val;
                this.$emit('change', val, this.c_value);
            }
        },
    },
    methods:{
        onChange:function(){

        }
    },
    watch:{
        c_value: function(val, oldVal){
            // this.$emit('change', val, oldVal);
        }
    },
    components: {
        Label
    }
}
</script>

<style>

</style>
<template>
    <el-row>
        <el-checkbox
            class="el-form-title"
            v-model="c_value"
        >{{title}}</el-checkbox>
    </el-row>
</template>

<script>
export default {
    props:{
        value:{
            type:  Boolean,
            default: false
        },
        title:{
            type: String,
            default: '单选框'
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
    watch:{
        c_value: function(val, oldVal){
            // this.$emit('change', val, oldVal);
        }
    }
}
</script>

<style>

</style>
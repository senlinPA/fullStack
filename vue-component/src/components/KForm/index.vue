<template>
  <div class>
    <slot></slot>
  </div>
</template>

<script>
//import引入的组件需要注入到对象中才能使用
export default {
    name:'KForm',
    componentName:'KForm',
    components: {},
    props:{
        model: {
            type: Object,
            required: true,
        },
        rules:{
            type:Object
        }
    },
    provide(){
        return{
            form: this
        }
    },
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        validate(cd){
            const tasks = this.$children.filter(item=>{item.prop}).map(item=>{item.validate});
            Promise.all(tasks)
            .then(()=> cd(true))
            .catch(()=> cd(false));
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {}
};
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类
</style>
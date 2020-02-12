<template>
  <div class>
      <label v-if="label">{{ label }}</label>
      <slot></slot>
      <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
//import引入的组件需要注入到对象中才能使用
import Schema from 'async-validator'
export default {
    name:"KFormItem",
    componentName:'KFormItem',
    components: {},
    inject:['form'],//注入
    props:{
        label:{
            type: String,
            default:''
        },
        prop:{
            type: String,
            required: true
        }
    },
    data() {
        //这里存放数据
        return {
            error:''
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        validate(){
            //获取校验值
            const value = this.form.model[this.prop];
            //获取校验规则
            const rules = this.form.rules[this.prop];
            //校验描述对象
            const descriport = {[this.prop]:rules};
            //创建校验器
            const schema = new Schema(descriport);
            return schema.validate({[this.prop] : value},errors=>{
                if(errors){
                    //将错误信息显示
                    console.log(errors);
                    this.error = errors[0].message;
                }else{
                    //校验通过
                    this.error = '';
                }
            });

        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.$on('validate',()=>{
            this.validate();
        });
    }
};
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类
.error{
    margin: 0;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: red;
}
</style>
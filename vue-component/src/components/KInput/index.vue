<template>
  <div class>
      <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
//import引入的组件需要注入到对象中才能使用
import emtter from '../mixins/emiter'
export default {
  name:"KInput",
  componentName:'KInput',
  components: {},
  inheritAttrs: false,
  mixins:[emtter],
  props:{
    type:{
        type: String,
        default: 'text'
    },
    value:{
        type: String,
        default:''
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
      onInput(e){
          this.$emit('input', e.target.value);
          this.dispatch('KFormItem','validate');
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
input{
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding-left: 8px;
    outline: none;
    &:hover,&:focus{
        border: 1px solid #166BCE;
    }
}
</style>
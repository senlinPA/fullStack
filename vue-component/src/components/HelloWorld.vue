<template>
  <div class="hello">

    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="name">
        <KInput v-model='model.name' placeholder='请输入用户名'></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="pass">
          <KInput type='password' v-model='model.pass' placeholder='请输入密码'></KInput>
      </KFormItem>
    </KForm>
    <button @click="submit">提交</button>
    
  </div>
</template>

<script>
import KInput from './KInput'
import KFormItem from './KFormItem'
import KForm from './KForm'
export default {
  name: 'HelloWorld',
  components:{
    KInput,
    KFormItem,
    KForm
  },
  props: {
    msg: String
  },
  data(){
    return{
      model:{
        name:'',
        pass:''
      },
      rules:{
        name:[
           { required: true, message: '用户名不能为空！', trigger: 'blur' },
        ],
        pass:[
           { required: true, message: '密码不能为空！', trigger: 'blur' },
        ]  
      }
    }
  },
  methods:{
    submit(){
      this.$refs.loginForm.validate((valid)=>{
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

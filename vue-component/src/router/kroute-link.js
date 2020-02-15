export default {
   props:{
       to:{
        type: String,
        required: true
       }
   },
   render(h){
       //<a href="'#'+this.to">{{this.$slots.default}}</a>
       return h('a',{
           attrs:{
               href:'#'+this.to
           }
       },[this.$slots.default])
   }
}
import Vue from 'vue'
import Router from './kvue-router'

Vue.use(Router);


export default new Router({
    routes:[{
        path:'/',
        name:'首页',
        component: resolve => require(['@/components/HelloWorld'],resolve),
    },{
        path:'/home',
        name:'主页',
        component: resolve => require(['@/components/index'],resolve),
    },{
        path:'/info',
        name:'信息页',
        component: resolve => require(['@/components/info'],resolve),
    }]
});
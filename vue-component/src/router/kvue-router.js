//接收Vue实例， vueRouter 要使用
let Vue;

class VueRouter {
    constructor(options){
        this.$options = options;
        
        //配置相应式的属性current
        Vue.util.defineReactive(this,'current','/');

        //定义响应式的属性current
        let initail = window.location.hash.slice(1);
        Vue.util.defineReactive(this,'current',initail);

        //监听浏览器窗口hashchange事件
        window.addEventListener('hashchange',this.onHashChange.bind(this));
        window.addEventListener('load',this.onHashChange.bind(this));

    }
    onHashChange(){
        this.current = window.location.hash.slice(1);
        this.routerMap = {};
        this.$options.routes.forEach(route=>{
            this.routerMap[route.path] = route;
        });
    }
}
VueRouter.install = function(_vue){
    Vue = _vue;
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router;
            };
        }
    });
}


export default VueRouter
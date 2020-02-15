export default {
    render(h){
        const {routerMap,current} = this.$router;
        const component = routerMap && routerMap[current]?routerMap[current].component:null;
        return h(component);
    }
}
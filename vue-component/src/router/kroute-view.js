export default {
    render(h){
        const {routerMap,current} = this.$router;
        const component = routerMap[current].component || null;
        return h(component);
    }
}
const store = new Vuex.Store({
    state: {
        component: 'Greeting',
        list: []
    },
    mutations: {
        add (state, payload) {
            if(state.list.length) state.list = [];
            state.list.push(payload)
        },
        update (state, payload) {
            state.list = {title: payload.title, comment: payload.comment}
        },
        changeComponent(state, payload) {
            state.component = payload
        }
    }
});

export default store;

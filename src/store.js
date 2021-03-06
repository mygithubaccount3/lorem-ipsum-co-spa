const store = new Vuex.Store({
    state: {
        component: 'Greeting',
        list: [],
        comment: {}
    },
    mutations: {
        add (state, payload) {
            if(state.list.length) state.list = [];
            state.list.push(payload)
        },
        update (state, payload) {
            const index = state.list[0].findIndex(item => item.id === payload.id);
            state.list[0][index].body = payload.body;
            state.list[0][index].title = payload.title;
        },
        changeComponent(state, payload) {
            state.component = payload;
            window.scrollTo(0, 0);
        },
        getComment(state, payload) {
            state.comment = payload
        }
    }
});

export default store;

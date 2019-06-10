const store = new Vuex.Store({
    state: [],
    mutations: {
        add (state, payload) {
            state.length > 1 ? state.pop() : state.push(payload)
        },
        update (state, payload) {
            state[0] = {title: payload.title, comment: payload.comment}
        }
    }
});

export default store;

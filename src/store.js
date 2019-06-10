export const store = new Vuex.Store({
    state: [],
    mutations: {
        add (state, payload) {
            state.push(payload)
        },
        update (state, payload) {
            state[0] = {title: payload.title, comment: payload.comment}
        }
    }
});

store.commit('add', {title: sessionStorage.title, comment: sessionStorage.comment});

import { createStore } from 'vuex'

export default createStore({
    state: {
        singUpData: {},
        url: "",
    },
    getters: {

    },
    mutations: {},
    actions: {
        CheckSingUp({ state }) {
            var x = new FormData()
            x.append("name", state.singUpData.name)
            x.append("email", state.singUpData.email)
            x.append("number", state.singUpData.number)
            x.append("Password", state.singUpData.Password)
            this.axios.post(state.url, x)
                .then(() => {

                    this.singUpData = {}

                })
        }
    },
    modules: {}
})
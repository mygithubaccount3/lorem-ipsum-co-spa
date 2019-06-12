import './css/main.css'
import './scss/main.scss'
import './css/overline-from-center.css'
import './css/hollow.css'
import './css/icon-back.css'
import './css/glow.css'
import './css/bob.css'
import './css/bounce-in.css'

import App from './App.vue'
import store from './store'

const vm = new Vue({
    store,
    render: h => h(App)
}).$mount("#app");

export default vm

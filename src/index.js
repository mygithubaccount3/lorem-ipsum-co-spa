import './css/main.css'
import './scss/main.scss'
import './css/overline-from-center.css'
import './css/hollow.css'
import './css/icon-back.css'
import './css/glow.css'
import './css/bob.css'
import './css/bounce-in.css'

import App from './App.vue'
import router from './router'
import store from './store'
import Greeting from 'greeting'

export default new Vue({
    store,
    router: router,
    render: h => h(App)
}).$mount("#app");

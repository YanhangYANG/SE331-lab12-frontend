import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "tailwindcss/tailwind.css"
import '@/services/AxiosInterceptorSetup'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser} from "@fortawesome/free-solid-svg-icons";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

library.add(faUserSecret,faUser,faRightToBracket,faUserPlus)


const app = createApp(App)


app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')

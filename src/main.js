import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faEye } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faUserPlus, faPlus  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faCalendarDays, faEye, faMagnifyingGlass, faUserPlus, faPlus, faFacebookF, faTwitter, faInstagram)

createApp(App)
.component('bootstrap', bootstrap)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPython, faJs, faVuejs, faHtml5, faCss3Alt, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import './styles.css';

library.add(faPython, faJs, faVuejs, faHtml5, faCss3Alt, faFigma, faBrain, faRobot);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');



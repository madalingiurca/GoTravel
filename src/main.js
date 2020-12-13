import {Router} from '@vaadin/router';
import "./index-component";
import "./destination-main"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'main-component'},
  {path: '/destinations', component: 'destinations-main'},
]);
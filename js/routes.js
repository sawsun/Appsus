import home from './pages/home.js'
import email from './pages/email.js'
import keep from './pages/keep.js'
// import about from './pages/email.js'
// import car from './pages/car/car.js'
// import carDetails from './pages/car/car-details.js'
// import carEdit from './pages/car/car-edit.js'


const routes = [
    {path: '/', component: home},
    // {path: '/about', component: about},
    {path: '/email', component: email},
    {path: '/keep', component: keep}
    // {path: '/car/edit/:carId?', component: carEdit},
    // {path: '/car/:carId', component: carDetails},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;
import home from './pages/home.js'
import email from './pages/email/misterEmail.js'
import memo from './pages/memos/memos.js'
import memoEdit from './pages/memos/memo-edit.js';

const routes = [
    {path: '/', component: home},
    // {path: '/about', component: about},
    {path: '/email', component: email},
    {path: '/memos', component: memo},
    {path: '/memo/edit/:memoId?', component: memoEdit},
    // {path: '/car/:carId', component: carDetails},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;
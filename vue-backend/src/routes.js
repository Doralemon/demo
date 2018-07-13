const Login = resolve => require(['./login/login.vue'], resolve);
const Home = resolve => require(['./contain/Home.vue'], resolve);
const NotFound = resolve => require(['./contain/404.vue'], resolve);
const GoodList = resolve => require(['./contain/goods/GoodList.vue'], resolve);
const Statical = resolve => require(['./contain/statical/statical.vue'], resolve);
let routes = [{
        path: '/',
        redirect: '/home',
        name: '',
        hidden: true
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/goods/list',
        iconCls: 'el-icon-message', //图标样式class
        name: 'goods',
        component: GoodList,
    },
    {
        path: '/statical',
        name: 'statical',
        iconCls: 'el-icon-message', //图标样式class
        component: Statical

    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];
export default routes;
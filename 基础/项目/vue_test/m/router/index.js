//创建路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import MyHome from '../pages/MyHome'
import News from '../pages/News'
import Message from '../pages/Message'
//创建并暴露一个路由器
export default new VueRouter({
    routes: [{
        name:'about',
        //:参数名占位符
        path: '/about/:id',
        component: About,
        //若布尔值为真，就会把该路由有组件收到的params参数，以props形式传给组件
        // props:true
        // 将路由的query参数,以props形式传给组件
        props($route){
            return {id:$route.query.id}
        }
    },
    {
        path:'/MyHome',
        component:MyHome,
        children:[
            {
                //路由器名字
                name:'News',
                path:'News',
                component:News,
            },
            {
                path:'Message',
                component:Message
            }
        ]
    }
    ]

})


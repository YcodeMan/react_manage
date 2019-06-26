/**
 * 路由配置
 */
import AsyncComponent from "@utils/asyncComponent";

const RouterConfig = [

    {
        pathname: '/login',
        title: '登录',
        component: AsyncComponent(() => import('@views/Login')),
    },
    {
        pathname: '/error',
        title: 'Error',
        component: AsyncComponent(() => import('@views/Error'))
    },
    {
        pathname: '/users',
        title: '用户信息',
        component: AsyncComponent(() => import('@views/User')),
        children: [
            {
                pathname: '/users/:id',
                title: '用户',
                component: AsyncComponent(() => import('@views/User'))
            }
        ]
    }
]


export default RouterConfig
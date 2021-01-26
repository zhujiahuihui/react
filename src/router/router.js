import Home from '../view/home'
import About from '../view/about'
const routers=[
    {
        redireact:'/home'

    },
    {
        path:'/home',
        name:'home',
       component:Home,
       children:[]
    
    }, {
        path:'/about',
        name:'about',
       component:About,
       children:[]
    
    }
]
export default routers
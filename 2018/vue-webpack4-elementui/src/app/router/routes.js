const StartView = ()=>import('@app/modules/main/StartView');

let beforeEnter = (to,from,next)=>{
    if((!from.name)){
        next({path:'/'});
        return;
    }
    next();
};

export const routes = [
    {
        path: '/',
        redirect: '/start'
    },
    {
        path: '/start',
        name: 'start',
        component: StartView,
        children: []
    },
];
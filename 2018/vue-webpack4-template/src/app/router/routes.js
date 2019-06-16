

let beforeEnter = (to,from,next)=>{
    if((!from.name)){
        next({path:'/'});
        return;
    }
    next();
};

export const routes = [
    

];
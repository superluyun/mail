import router from '../router'
import store from '../store'
import Storage from '../utils/storage'

const wlist = ["/login","/"]
router.beforeEach((to ,from ,next)=>{
    if(Storage.get('token')){
        if(to.path==='/login'){
            next({path:"/"})
        }else{
            if(!store.getters.userInfo){
                store.dispatch("getUserInfo");
                next();
            }
        } 
    } else {
        if(wlist.indexOf(to.path) !== -1){
            next();
        }else{
            // next(`/login?redirect=${to.path}`)
            next();
        }
    }
})
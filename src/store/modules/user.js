
const state = {
    userInfo:{

    },
    token:''
}



const mutations = {
    changeData(state,data){
        state[data.key] = data.val
    }
}

const actions = {

}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}

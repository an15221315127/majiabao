import {getDictSimpleList, getIndexList} from "@/api/modules/home";


const state ={
    movieList:[],
    navList:[]
}

const mutations = {
    changeList(state,list){
        state.movieList = list;
    },
    changeNavList(state,navList){
        state.navList = navList;
    }
}

const actions = {
    getList({commit,state},typeList){
        if (state.movieList.length == typeList.length) return;
        for (let i in typeList){
            let type = typeList[i];
            getIndexList({channelId:type,
                page:1,
                appProductCode:1,
                appChannelId:1}).then(res=>{
                const arr = [...state.movieList,[...res.indexInfos]];
                commit('changeList',arr)
            })
        }
    },
    getNavList({commit,state,dispatch}){
        if (state.navList.length > 0) return;
        getDictSimpleList({
            typeCode:'channel_type'
        }).then(res=>{
            commit('changeNavList',res.dicts)
            var typeList = [];
            for (let i in res.dicts){
                typeList.push(res.dicts[i].paramValue)
            }
            dispatch('getList',typeList);
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}

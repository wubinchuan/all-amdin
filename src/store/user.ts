import { defineStore } from "pinia";

const useUser=defineStore("user",{
    state:()=>({
        couter:10
    }),
    getters:{
        getcouterdouble(state){
            return state.couter*2
        }
    },
    actions:{
        updatecouter(number:number){
            this.couter=number 
        }
    }
})
export default useUser
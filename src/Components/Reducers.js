import { Fetching_Error, Fetching_Loading, Fetching_Todos } from "./Action"

const presentstate = {

    loading : false,
    todos: [],
    error : ''

}




const reducerfun = (state=presentstate,action) =>{
    switch(action.type){
        case  Fetching_Loading:
            return {...state,loading:true}

            case Fetching_Todos:
                return {
                    loading:false,
                    todos: action.payload,
                    error: ''
                
                }

                case Fetching_Error : 
                return {
                    loading : false,
                    todos: [],
                    error : action.payload
                }
        

        
        default :
        return state
    }
}

export default reducerfun
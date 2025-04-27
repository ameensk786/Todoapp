import axios from "axios"

export  const Fetching_Loading = 'Fetchloading'
export const Fetching_Todos = 'Fetchingtodos'

export const Fetching_Error = 'FetchingError'

export const  Fetchingloading = ()=>{
    return {
        type:Fetching_Loading,
    }
}

export const  FetchingTods = (data)=>{
    return {
        type: Fetching_Todos,
        payload: data
    }
}

export const Fetchingerror = (data)=>{
    return {
        type: Fetching_Error,
        payload:data
    }
}

const fetching = ()=>{

    return async (dispatch)=>{
        dispatch(Fetchingloading())

        try{
            const response = await axios('https://jsonplaceholder.typicode.com/posts');
            dispatch(FetchingTods(response.data))
        }
        catch(err){
            dispatch(Fetchingerror(err))

        }


    }



}

export default fetching
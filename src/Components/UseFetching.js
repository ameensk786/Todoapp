import { useState } from "react"

const useDocumentTitle = ()=>{

    const[data,setData]=useState('hello')


    const handleClicking = ()=>{
        setData('shaik')
    }

    return {data,handleClicking}


}

export default useDocumentTitle
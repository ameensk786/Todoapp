import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetching from './Components/Action'
import { FaSearch } from 'react-icons/fa'

function App() {

const[value,setValue]=useState('')
const[data,setData]=useState('')

  const {loading,todos,error} = useSelector((data)=>data)

  const dispatch = useDispatch()


  useEffect(()=>{
  

    dispatch(fetching(dispatch))

  },[dispatch])



if(loading){
  <p className='text-center'>Loading.....</p>
}
if(!error === ''){
  console.log(error)

}

useEffect(()=>{


  const timer = setTimeout(()=>{

    setData(value)

  },1000)

  return ()=>{
    clearTimeout(timer)

  } 

},[value])

const rel = todos.map((item)=>{
        return item.title
})

const felterteditems = rel.filter((item)=>{
  return item.toLowerCase().includes(data)
})


const onlyten = felterteditems.slice(0,20)

  return (
    <div>

      <div className='input-element-filter'>


      <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <FaSearch className='item-search'/>


      </div>

    {onlyten.map((item,index)=>{
      return(
        <div key={index}>
        <p>{item}</p>
        </div>
      )
    })}
    
    </div>
  )
}

export default App

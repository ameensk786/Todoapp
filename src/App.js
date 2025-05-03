import React, { useEffect, useMemo, useState } from 'react'
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

const felterteditems = useMemo(()=>{
 return  rel.filter((item)=>{
    return item.toLowerCase().includes(data)
  })

},[rel])

const [currentPage, setCurrentPage] = useState(1); // current page number

const itemperPage = 10

const lastitem = currentPage * itemperPage;

const firstitem = lastitem - itemperPage;

const currentitem = felterteditems.slice(firstitem,lastitem)



const totalpages = Math.ceil(felterteditems.length / itemperPage)
const pageNumbers = Array.from({ length: totalpages }, (_, i) => i + 1);



  return (
    <div>

      <div className='input-element-filter'>


      <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <FaSearch className='item-search'/>


      </div>

    {currentitem.map((item,index)=>{
      return(
        <div key={index}>
        <p>{item}</p>
        </div>
      )
    })}
    {pageNumbers.map((item)=>{
      return(
        <button onClick={()=>{setCurrentPage(item)}}>{item}</button>
      )
    })}
    
    </div>
  )
}

export default App

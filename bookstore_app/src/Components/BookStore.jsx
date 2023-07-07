import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContext'
import style from './Css/BookStore.module.css'
export const BookStore = () => {
  let [data,setData]=useState([])
  let {state,setState,handelAuth,name}=useContext(AuthContext)
  useEffect(()=>{
    getchBook()
  },[])
  console.log(state,setState,handelAuth,name)
  function getchBook(){
   axios.get(`http://127.0.0.1:5000/book`)
   .then((res)=>{
    setData(res.data)
   }).catch((err)=>{
    console.log(err)
   })
  }

  console.log(data)

  return (
    <div className={style.mainDiv}>
      <input type="text" placeholder='Search for your favorite' />
      <button style={{padding:"10px 30px", borderRadius:"30px",border:"none",cursor:"pointer"}} >Search</button>
      <div className={style.MainBookList}>      
      {data?.map((item)=>(
       <div className={style.ChildBookList}>
        <p className={style.rating}><span style={{color:"black"}}>Rating-</span>{item.customers_rating}</p>
       <img width={"70%"}  height="300px" src={item.images} alt={item.title} />
        <h4 style={{color:"aquamarine"}}>{item.title}</h4>
        <div 
        style={item.title.length<50?{marginTop:"30px"}:{marginTop:"20px"}}
        >
          <h5>
          Author-{item.author}
          </h5>
          <br />
         <h3 style={{color:"aquamarine"}}> Price-{item.price} </h3>
        </div>

        <div style={{color:"gray"}}>
         {item.description}
         <button 
         style={{padding:"10px 20px",borderRadius:"20px", border:"none",fontWeight:"600"}}
         >BUY ME</button>
         </div>

       </div>
      ))}
     </div>

    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContext'
import style from './Css/BookStore.module.css'
import { useNavigate } from 'react-router-dom'
export const BookStore = () => {
  let [data,setData]=useState([])
  let [loading,setLoading]=useState(false)
  let [field,setfield]=useState("")
  let [query,setquery]=useState("")
  useEffect(()=>{
    setTimeout(()=>{
      handelSearch()
    },2000)
   
  },[query,field])


  // console.log(state,setState,handelAuth,name)
  // function getchBook(){
  //  axios.get(`http://127.0.0.1:5000/book`)
  //  .then((res)=>{
  //   setData(res.data)
  //  }).catch((err)=>{
  //   console.log(err)
  //  })
  // }
  const handelSearch=()=>{
    console.log(query)
    setLoading(true)
    axios.get(`http://127.0.0.1:5000/book/filter?query=${query}&field=${field}`).then((res)=>{
      setData(res.data)
      console.log(res.data)  
    }).catch((err)=>{
        console.log(err)
      })
  }
  console.log(field)


  return (
    <div className={style.mainDiv}>
      <input className={style.input} type="text" placeholder='Search for your favorite' value={query} onChange={(e)=>setquery(e.target.value)} />
      <select
      onChange={(e)=>{ 
        setfield(e.target.value)
      }}
      name="" id=""  style={{padding:"10px 30px", borderRadius:"30px",border:"none",cursor:"pointer"}} className={style.button1} >
        <option value="">Filter By Choice</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="customers_rating">Customer</option>
      </select> 

      <div className={style.MainBookList}>   
      {data.length>0?data?.map((item)=>(
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
         style={{padding:"10px 20px",borderRadius:"20px", border:"none",fontWeight:"600",cursor:"pointer"}}
         >BUY ME</button>
         </div>

       </div>
      )):"No Books Available"}
     
     </div>

    </div>
  )
}







// {data?.map((item)=>(
//   <div className={style.ChildBookList}>
//    <p className={style.rating}><span style={{color:"black"}}>Rating-</span>{item.customers_rating}</p>
//   <img width={"70%"}  height="300px" src={item.images} alt={item.title} />
//    <h4 style={{color:"aquamarine"}}>{item.title}</h4>
//    <div 
//    style={item.title.length<50?{marginTop:"30px"}:{marginTop:"20px"}}
//    >
//      <h5>
//      Author-{item.author}
//      </h5>
//      <br />
//     <h3 style={{color:"aquamarine"}}> Price-{item.price} </h3>
//    </div>

//    <div style={{color:"gray"}}>
//     {item.description}
//     <button 
//     style={{padding:"10px 20px",borderRadius:"20px", border:"none",fontWeight:"600"}}
//     >BUY ME</button>
//     </div>

//   </div>
//  ))}
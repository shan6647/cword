import React, { useEffect, useState } from 'react'
import './Blog.css'
import Navbar from './Navbar'
import { toast } from 'react-toastify'
import ApiUrl from './ApiUrl'
import axios from 'axios'
function Blog() {
  const [userData,setUserData]=useState([])
  // const sendData = (vlaues) => {
  //   const params = new FormData()

  //   params.append("title", vlaues.title.value)
  //   params.append('image', vlaues.image.files[0])
  //   params.append('detail',vlaues.detail.value)

  //   axios
  //   .post(`${ApiUrl}/Blog/create`,params)
  //   .then((res) => {
  //     console.log(res.data);
  //     if(res.data.status === 'success') {

  //       toast("brand created")

  //     }
  //   })}
  useEffect(()=>{
    axios.get(`${ApiUrl}/Blog/getall`) .then((res)=>{
      setUserData(res.data.data,)
    }).catch((err)=>{
      console.log(err);
      toast.error('something went wrong')
    })
  },[1])

  console.log(userData,'-------------------------------');
  
  return (
   


    <>
     <Navbar/>
    <div className='yb'>
      <div style={{width:'50%'}}>
       {userData?.map((item,index)=>{
return(
<div className='yu'>
<h1> {item?.title}</h1>
<h3>{item?.detail}
</h3>
<img  src={`http://localhost:8000/${item.image}`} style={{height:'100vh',width:'100%'}}/>
</div>)
 }) }
</div>
    </div>
    
    </>

  )
}

export default Blog
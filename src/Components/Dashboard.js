import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ApiUrl from './ApiUrl'
function Dashboard() {
//   const navigate=useNavigate()

// const sendData=(values)=>{
//   const params={
//     title: values.title.value,
//     detail: values.detail.value,
//     image: values.image.value,
//   }
//   console.log(params,'hhhhhhhh')
//   axios.post(`${ApiUrl}/Blog/create`,params).then((res)=>{
//     if(res.data.status=== 'ok')
//       toast.success(created)
//     navigate('/Blog')
//     {

//       console.log('----------ok------------')


//     }
//   })
// }
const [userData,setUserData]=useState([])
useEffect(()=>{
  axios.get(`${ApiUrl}/blog/getall`) .then((res)=>{
      
      setUserData(res.data.data,)
  }).catch((err)=>{
      console.log(err);
      toast.error('Something went wrong')
  })
},[1])


  return (



    
<>
<div >
<div >
<div className='llll container'>
  
  <div  style={{marginTop:'20px',display:'flex'}}>
  <i style={{fontSize:'40px',marginRight:'10px',marginTop:'5px'}} class="fa-duotone fa-solid fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>
  

  

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div style={{display:'flex'}} class="offcanvas-header">
    <div class="offcanvas-title" id="offcanvasScrollingLabel" style={{width:'20%'}}><img style={{width:'100%'}} src={require('../Assets/logo-CjmiVqZs.png')} /></div>
    <h5 style={{color:'blue'}}>VENUS<br/>Dashboard</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p style={{marginLeft:'10px'}}>Dashboard</p>
    <p style={{marginLeft:'10px'}}>Activity</p>
    <p className='mmn'><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Authentication
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">signin</a></li>
    <li><a class="dropdown-item" href="#">signout</a></li>
   
  </ul>
</div></p>
<p style={{marginLeft:'10px'}}>Schudule</p>
  </div>
</div>


  <input style={{padding:'10px',width:'200%',borderRadius:'10px'}}   type='search'placeholder='search'/>
  </div>

  <div className='nnn' style={{width:'15%'}}>
    
    <div class="dropdown">
  <button class=" x" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img style={{width:'80%',height:'4vh'}} src={require('../Assets/download (2).png')}/>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button"><img style={{width:'30%',height:'4vh'}} src={require('../Assets/images.jpg')}/></button></li>
    <li><button class="dropdown-item" type="button"><img style={{width:'30%',height:'4vh'}} src={require('../Assets/iraq.png')}/></button></li>
    <li><button class="dropdown-item" type="button"><img style={{width:'30%',height:'4vh'}} src={require('../Assets/istockphoto-652750800-612x612.jpg')}/></button></li>
    <li><button class="dropdown-item" type="button"><img style={{width:'30%',height:'4vh'}} src={require('../Assets/download (2).png')}/></button></li>
    <li><button class="dropdown-item" type="button"><img style={{width:'30%',height:'4vh'}} src={require('../Assets/download (3).png')}/></button></li>
  </ul>
</div>
    <p><i style={{fontSize:'29px'}} class="fa-solid fa-bell"></i></p>
    <img style={{width:'25%',height:'8vh',borderRadius:'100%'}} src={require('../Assets/profile-pic (1).png')}/>
  </div>
</div>
</div>


</div>
<div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='dba'>
                    <p style={{marginLeft:'18px',marginTop:'10px',fontSize:'25px'}}><span style={{opacity:'0.5',fontSize:'15px'}}>spend this mountb</span> <br/> <b>$682.5</b> </p>
                   <img style={{marginRight:'18px'}} src={require('../Assets/download.png')} /> 
                </div>             
           
            </div>
            <div className='col-md-6'>
            <div className='dba'>
                <div className='mmm'>
              <p>  <i style={{fontSize:'50px',marginTop:'25px',marginLeft:'10px'}} class="fa-duotone fa-solid fa-user"></i></p>
                    <p style={{marginLeft:'18px',marginTop:'10px',fontSize:'25px'}}><span style={{opacity:'0.5',fontSize:'15px'}}>New client</span> <br/><b>321</b>  </p>
               
                </div>
                <img style={{marginRight:'18px'}} src={require('../Assets/download (1).png')} /> 
                </div> 
            </div>
        </div>
    </div>
</div>
<div>
<div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='dba'>
                <div className='mmm'>
                  <p><i style={{fontSize:'40px',marginTop:'10px',marginLeft:'10px',borderRadius:'100px',color:'blue',backgroundColor:'#F4F7FE',padding:'20px'}} class="fa-solid fa-chart-simple"></i></p>
             <p style={{marginLeft:'18px',marginTop:'10px',fontSize:'25px'}}><span style={{opacity:'0.5',fontSize:'15px'}}>New client</span> <br/><b>321</b>  </p>
               
                </div>
               
                </div>             
           
            </div>
            <div className='col-md-6'>
            <div style={{backgroundColor:'#675AFF'}} className='dba'>
                <div className='mmm'>
              
                    <p style={{marginLeft:'18px',marginTop:'10px',fontSize:'25px',color:'white'}}><span style={{opacity:'0.5',fontSize:'15px'}}>Activity</span> <br/><b>$540.50</b>  </p>
               
                </div>
                <img src={require('../Assets/download (4).png')} />
                </div> 
            </div>
        </div>
    </div>
</div>
</div>
<div className='container vbb'>
<div className='nm'>
  <img style={{width:'25%',marginTop:'20px',borderRadius:'100%',backgroundColor:'#F4F7FE'}} src={require('../Assets/avatar-B1Kuiyxc.png')} />
  
</div>
<h3 style={{textAlign:'center'}}>Carless Robbie</h3>
<p style={{textAlign:'center',opacity:'0.5'}}><i class="fa-solid fa-location-dot"> new York USA</i></p>
<div style={{display:'flex',justifyContent:'space-between'}}>
<p>Projects<br/><span style={{marginLeft:'15px'}}>28</span></p>
<p>Followers<br/><span style={{marginLeft:'15px'}}>643</span> </p>
<p>Following<br/><span style={{marginLeft:'15px'}}>76</span> </p>
</div>
</div>
<div className='container'>
<div className='tbb'>
<table class="table">
  <thead>

    <tr>
      <th scope="col">title</th>
      <th scope="col">detail</th>
      <th scope="col">image</th>
      

      
    </tr>
  </thead>
  <tbody>
  {userData?.map((item,index)=>{
  return(

  
    <tr>
      <th scope="row">1</th>
      <td>{item?.title} </td>
      <td>{item.detail}</td>
      <td>{item.image}</td>
    </tr>
    )
})}
    
  </tbody>
</table>
</div>
</div>
</>
  )
}

export default Dashboard
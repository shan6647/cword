import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'
function Services() {
  return (
   <>
   <div >
<h3 style={{color:'#D66E22',textAlign:'center'}}> <b>Our Services</b> </h3>
<p style={{textAlign:'center'}}>Transforming businesses through cutting-edge IT solutions for a digital future.</p>
   </div>
  <div className='aa'>
  <Link to='/Softwaredevelopment'><p>  <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Software<br/> developer</p></Link>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Website<br/> developer</p>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Application<br/> developer</p>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Access control<br/> system</p>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  CCtv<br/> developer</p>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Software<br/> developer</p>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Software<br/> developer</p>
  <p> <img style={{width:'50%'}} src={require('../Assets/ww (1).19187bed19d69ed0e694.png')}></img><br/>
  Software<br/> developer</p>
  </div>


  
   </>
  )
}

export default Services
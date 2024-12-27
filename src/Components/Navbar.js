import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    {/* <div className='mb-5'> */}
    <nav  class="navbar navbar-expand-lg bg-body-tertiary " >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#"> <img style={{width:'30%'}} src={require('../Assets/sirwaseem60.c58a0dcf21dc92c70987.png')}></img> </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <div style={{backgroundColor:'white'}}>
        
        <button style={{backgroundColor:'white',border:'0'}}> Home</button>
        <button style={{backgroundColor:'white',border:'0'}}>
        <div style={{backgroundColor:'white'}} class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Services
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Web Developer</a></li>
    <li><a class="dropdown-item" href="#">Software Developer</a></li>
    <li><a class="dropdown-item" href="#">Graphic Designer</a></li>
  </ul>
</div> </button>
        <button style={{backgroundColor:'white',border:'0'}}>About us</button>
        <button style={{backgroundColor:'white',border:'0'}}>Conact Us</button>
       <button style={{backgroundColor:'white',border:'0'}}>Blog</button>
        </div>
      </form>
    </div>
  </div>
</nav>



{/* </div> */}
    </>
  )
}

export default Navbar
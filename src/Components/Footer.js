import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
    <div className='ee'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div>
                <h5 style={{marginTop:'40px',color:'#D66E22'}}>Company</h5>
                <h6>Home</h6>
                <h6>About us</h6>
                
              </div>
            
            </div>
<div className='col-md-3'>
<h5 style={{marginTop:'40px',color:'#D66E22'}}>Services</h5>
                <h6 style={{fontStyle:'inherit'}}>Software Development</h6>
                <h6>Web Development</h6>
                <h6>Application Development</h6>
                <h6>Graphic Designing</h6>
                <h6>Digital Marketing</h6>
</div>
<div className='col-md-3'>
<h5 style={{marginTop:'40px',color:'#D66E22'}}>Contact us</h5>
                <h6>048-378022</h6>
                <h6>0311-4565744</h6>
                <h6>0300-0000011</h6>

</div>
<div className='col-md-3'>
  <div>
  <h5 style={{marginTop:'40px',color:'#D66E22'}}>Address</h5>
                <h6>Sahiwal</h6>
                <h6>Silanawali</h6>
                <h6>Sargodha</h6>
  </div>

</div>
          </div>

        </div>
    </div>
    </>
  )
}

export default Footer
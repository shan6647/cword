import React from 'react'
import './Quote.css'
import axios from 'axios';
import ApiUrl from './ApiUrl';
import { toast } from 'react-toastify';
function Quote() {
  const sendData=(values)=>{
    const params={
      name: values.name.value,
      phone: values.phone.value,
      Email: values.Email.value,
      Address: values.Address.value,
      Message: values.Message.value,
    }

    axios.post(`${ApiUrl}/foam/create`,params).then((res)=>{
      if(res.data.status=== 'ok'){
  toast.success('foam create sucessfully')
console.log(',,,,,,,,,,,,,,,,,ok,,,,,,,,,,,,');

}
    })
  }
  return (
    <>
    <form className='bbbb mt-5' style={{height:'55vh',marginLeft:'20px',marginRight:'20px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
    onSubmit={(e)=>{
      e.preventDefault();
      sendData(e.target);
          }}>
    <h3 style={{color:'#D66E22',textAlign:'center'}}> <b>Get Quote</b></h3>
    <p style={{textAlign:'center'}}>For inquiries or assistance, contact us.</p>
    
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div>
          <p>Name<br/>
   <input name='name' required style={{width:'90%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}  type='text'></input>
   </p>
          </div>

        </div>
<div className='col-md-6'>
<div>
<p>Phone<br/>
   <input name='phone' required style={{width:'90%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} type='text'></input>
   </p>
</div>
</div>
      </div>

    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div>
          <p>Email<br/>
   <input name='Email' required style={{width:'90%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} type='text'></input>
   </p>
          </div>

        </div>
<div className='col-md-6'>
<div>
<p>Address<br/>
   <input name='Address' required style={{width:'90%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} type='text'></input>
   </p>
</div>
</div>
      </div>

    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          {/* <div>
          <p>Select service<br/>
   <input name='SelectServices'  style={{width:'90%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} type='text' >
  </input>
   </p>
          </div> */}

{/* <select style={{width:'90%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
  <option>usman</option>
  <option>usman</option>
  <option>usman</option>
</select> */}
        </div>

<div>
<p>Message<br/>
   <input name='Message' style={{width:'45%',border:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} type='text'></input>
   </p>
</div>

      </div>

    </div>
    <div className='cc'>
      <input type='submit'/>
    {/* <button type='submit' style={{width:'10%',backgroundColor:'#D66E22',borderRadius:'100px'}} className='dd'>Send</button> */}
   </div>
    </form>
    </>
  )
}

export default Quote
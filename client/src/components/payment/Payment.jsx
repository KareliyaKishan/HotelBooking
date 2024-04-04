import React from 'react'
import "./payment.css";
import Navbar from '../navbar/Navbar';
import Header2 from '../header/Header2';
import atm from "./atm.png"
import { useNavigate } from "react-router-dom";


const Payment = () => {

  const navigate = useNavigate();

const home = () => {
  navigate("/home");
}

  return (
    <div>
      <Navbar/>
      <Header2/>


            <h1 style={{ textAlign: 'center' }}>Make A Payment using Card</h1>
      <div className='card'>
            <div className="images">
                <img src={atm} alt="" style={{ width: '100%' }} />
            </div>
            <div style={{ height: '50px' }}></div>
            <div className="payment">
                <div className="card" style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                    <img src="/final/Images/ATM.png" alt="" />
                    <div className="mb-3">
                        <h2>Payment Details</h2>
                        <label htmlFor="formGroupExampleInput" className="form-label" style={{ display: 'flex', margin: '8px' }}>Account Holder Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Here" style={{ display: 'flex' }} />
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label" style={{ display: 'flex', margin: '8px' }}>Enter a CVV Number</label>
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Here" style={{ display: 'flex' }} />
                            
                            <div className="button">
                            <button onClick={()=>{ alert('Payment successfully'); }} className='paybtn' style={{ backgroundColor: 'rgb(108, 108, 234)', border: '1px solid blue', color: 'aliceblue', borderRadius: '2px', marginTop: '8px' }}>Payment</button>
                            <button onClick={home} className='paybtn' style={{ backgroundColor: 'rgb(108, 108, 234)', border: '1px solid blue', color: 'aliceblue', borderRadius: '2px' }}>Cancel</button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Payment
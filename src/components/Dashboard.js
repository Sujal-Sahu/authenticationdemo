import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Dashboard() {
  const nav=useNavigate();
  useEffect(()=>{
         const token=JSON.parse(localStorage.getItem('token'));
         if(!token){
               nav("/");
         }
  },[])
  const [demodate,setdemodate]=useState("07/2022");
  return (
    <div>
      <div className="center"><h3>Farm Registration</h3></div>
      <div className="flex-style">
           <h4>Farm Coordinates</h4>
           <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success su" type="submit">Search</button>
      </form>
      </div>
      <section class="map">
        <iframe class="map1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.7000118634795!2d73.70528678369507!3d24.61734174674744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5ab69358023%3A0xcc826fad6f884522!2sSuryodaya%20Colony%2C%20Pulla%20Bhuwana%2C%20Arihant%20Nagar%2C%20Bhuwana%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1629017393872!5m2!1sen!2sin"
            width="1100" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </section>
    <div className='dashboardflex1'>
        <div>
            <h3>Soil Health Information</h3>
            <div className='dashboardflex2'>
            <p>Soil Health Date</p>
            <input className='dashboardinput' type="text" value={demodate} onChange={(event)=>{event.preventDefault();setdemodate(event.target.value)}}/>
            </div>
            <div className='dashboardflex2'>
            <p>Soil Moisture</p>
            <input className='dashboardinput' type="text" placeholder="Moisture"/>
            </div>
            <div className='dashboardflex2'>
            <p>Soil Organic Carbon</p>
            <input className='dashboardinput' type="text" placeholder="Organic carbon"/>
            </div>
            <div className='dashboardflex2'>
            <p>Nytrogen</p>
            <input className='dashboardinput' type="text" placeholder="Nitrogen"/>
            </div>
            <div className='dashboardflex2'>
            <p>Phosphorus</p>
            <input className='dashboardinput' type="text" placeholder="Phosphorus"/>
            </div>
            <div className='dashboardflex2'>
            <p>Potassium</p>
            <input className='dashboardinput' type="text" placeholder="Potassium"/>
            </div>
            <hr/>
        </div>
        <div>
            <h3>Crop Yield Information</h3>
            <div className='dashboardflex2'>
            <p>Crop Type</p>
            <input className='dashboardinput' type="text" placeholder="Crop Type"/>
            </div>
            <div className='dashboardflex2'>
            <p>Crop Cycle Start</p>
            <input className='dashboardinput' type="text"  value={demodate} onChange={(event)=>{event.preventDefault();setdemodate(event.target.value)}}/>
            </div>
            <div className='dashboardflex2'>
            <p>Crop Cycle End</p>
            <input className='dashboardinput' type="text"  value={demodate} onChange={(event)=>{event.preventDefault();setdemodate(event.target.value)}}/>
            </div>
            <div className='dashboardflex2'>
            <p>Crop Cycle Yield</p>
            <input className='dashboardinput' type="text" placeholder="Yield"/>
            </div>
            <hr/>
        </div>
    </div>
    <input class="btn btn-primary" type="submit" value="Register Farm"></input>
    </div>
  )
}

export default Dashboard
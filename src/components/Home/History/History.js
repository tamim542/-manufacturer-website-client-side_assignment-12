import React, { useEffect, useState } from 'react';
import useManufactures from '../../../Hooks/useManufactures';
import './History.css';

const History = () => {
    
const [equipment,setEquipment]=useState([])
const [manufacture, setManufacture]=useManufactures();
    
useEffect(()=>{
    fetch('http://localhost:5000/productsCount')
    .then(res=>res.json())
    .then(data=>setEquipment(data))
  },[])
    return (
        <div>
             {/* -------extrea one section------ */}
      <br></br>
      <h3 style={{ fontWeight: 'bold', textAlign: 'center' }}><span style={{ color: 'green' }} className='text-2xl'>History of Industry</span> </h3>
      <br></br>
      <div className='extra-section1'>
        <div className='brand-div'>
        <h1 style={{color:'white',padding:'7px'}}>Total Tools: {equipment.count}</h1>
        <div className='brand-name'>
         {
           manufacture.map(manufactures=><div style={{color:'white', padding:'7px'}}>{manufactures.name} </div>)
         }
        </div>
        </div>
        <div className='brand-div img-banner'>
          <img  src='https://i.ibb.co/GtQJF0K/super-sale-horizontal-banner-52683-59532.webp' style={{height:'280px', width:'298px'}} alt='...'/>
        </div>
        <div className='brand-div img-banner'>
        <img  src='https://i.ibb.co/9NVXjdx/elegant-blue-gold-diploma-certificate-template-1017-17257.webp' style={{height:'280px', width:'298px'}} alt='...'/>
        </div>
      </div>
          <br></br>
        </div>
    );
};

export default History;
import React, { useEffect, useState } from 'react';

const useManufactures = () => {
    const [manufacture, setManufacture]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/manufacture')
        .then(res=>res.json())
        .then(data=>setManufacture(data))
    },[])
    return [manufacture, setManufacture];
};

export default useManufactures;
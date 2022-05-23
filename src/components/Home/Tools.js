import React from 'react';
import useManufactures from '../../Hooks/useManufactures';
import CardTool from './CardTool';
import './Tools.css';

const Tools = () => {
    const [manufacture, setManufacture]=useManufactures();
    const manufactureCard=manufacture.slice(0,6);

    return (
        <div className='container'>
        <div className='card-design'>
            {
                manufactureCard.map(tool=><CardTool key={tool._id} tools={tool}></CardTool>)
            }
        </div>
        </div>
    );
};

export default Tools;
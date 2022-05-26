import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useManufactures from '../../../Hooks/useManufactures';
import './Chart.css';

const Chart = () => {
  const [manufacture, setManufacture]=useManufactures();
    const manufacture1 = manufacture.slice(1, 7);
  
    const data1=manufacture.slice(0,4);
     const data2=manufacture.slice(4,8);
    return (
        <div>
          {/* extra section two */}

          <h3 style={{ fontWeight: 'bold', textAlign: 'center' }}><span style={{ color: 'green' }} className='text-2xl'>Graphical View of Record</span> </h3>
      <br/>
         
            <div className='dashboard-chart'>
              <div className='bar-chart'>
            <LineChart  width={600} height={300} data={manufacture}>
            <Line type="monotone" dataKey="availablequantity" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
        
            </div>
            
            {/* <BarChart -------------- */}
            <div className='bar-chart'>
            <BarChart
           
          width={500}
          height={300}
          data={manufacture}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="availablequantity" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
        </div>
          <div className='bar-chart'>


        <AreaChart 
       
          width={500}
          height={400}
          data={manufacture}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="availablequantity" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>

        </div>
          <div className='bar-chart'>

        <PieChart width={500} height={500}>
          <Pie data={data1} dataKey="availablequantity" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data2} dataKey="availablequantity" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>

         </div>
         </div>
        </div>
    );
};

export default Chart;
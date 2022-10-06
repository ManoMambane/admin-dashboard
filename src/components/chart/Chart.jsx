import './chart.scss'
// import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "January", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 170 },
];


function Chart( {aspect, title}) {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 38,
            left: 0,
            bottom: 8
          }}>
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" stroke='gray'/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
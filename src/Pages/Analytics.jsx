 import React from 'react';
import { PieChart, Pie } from 'recharts';
 

 const Analytics = () => {
  
  const data = [
    { name: 'Geeksforgeeks', students: 400, fill:"red" , },
    { name: 'Technical scripter', students: 700 ,fill:"green",y: 22, },
    { name: 'Geek-i-knack', students: 200 ,fill:"yellow",},
    { name: 'Geek-o-mania', students: 1000 ,fill:"orange",},
    { name: 'Geek-o-mania', students: 400 ,fill:"voilet",},
    { name: 'Technical scripter', students: 700 ,fill:"rose",},
    { name: 'Geek-i-knack', students: 200 ,fill:"brown",},
    { name: 'Geek-o-mania', students: 1000,fill:"aqua", },
    

];
  return (
    <div className='pieChartData'>
        <PieChart width={700} height={440}>
            <Pie data={data} dataKey="students" y-axis={(data)=>{return data.y}} label={(data) => { return data.name}} outerRadius={200} fill={data.fill}  />
        </PieChart>
     </div>
  )
}
export default Analytics

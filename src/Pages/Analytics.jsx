 import React from 'react';
import { PieChart, Pie } from 'recharts';
 

 const Analytics = () => {
  
  const data = [
    { name: 'Geeksforgeeks', students: 400, fill:"red" ,y: 32, label: "Health",label:"Geeksforgeeks" },
    { name: 'Technical scripter', students: 700 ,fill:"green",y: 22, label: "Finance",label:"Technical scripter"},
    { name: 'Geek-i-knack', students: 200 ,fill:"yellow",label:"Geek-i-knack"},
    { name: 'Geek-o-mania', students: 1000 ,fill:"orange",label:"Geek-o-mania"},
    { name: 'Geek-o-mania', students: 400 ,fill:"voilet",label:"Technical scripter"},
    { name: 'Technical scripter', students: 700 ,fill:"rose",label:"Geek-o"},
    { name: 'Geek-i-knack', students: 200 ,fill:"brown",label:"Geeksgeeks"},
    { name: 'Geek-o-mania', students: 1000,fill:"aqua",label:"Geek-i-knack" },
    

];
  return (
    <div className='pieChartData'>
        <PieChart width={700} height={440}>
            <Pie data={data} dataKey="students" y-axis={(data)=>{return data.y}} label={(data) => { return data.label}} outerRadius={200} fill={data.fill}  />
        </PieChart>
     </div>
  )
}
export default Analytics

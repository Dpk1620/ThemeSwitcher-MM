 import React from 'react';
import { PieChart, Pie } from 'recharts';
 

 const Analytics = () => {
  
  const data = [
    { name: 'Geeksforgeeks', students: 400, fill:"red" ,y: 32, label: "Health",titlName:"Geeksforgeeks" },
    { name: 'Technical scripter', students: 700 ,fill:"green",y: 22, titlName: "Finance",titlName:"Technical scripter"},
    { name: 'Geek-i-knack', students: 200 ,fill:"yellow",titlName:"Geek-i-knack"},
    { name: 'Geek-o-mania', students: 1000 ,fill:"orange",titlName:"Geek-o-mania"},
    { name: 'Geek-o-mania', students: 400 ,fill:"voilet",titlName:"Technical scripter"},
    { name: 'Technical scripter', students: 700 ,fill:"rose",titlName:"Geek-o"},
    { name: 'Geek-i-knack', students: 200 ,fill:"brown",titlName:"Geeksgeeks"},
    { name: 'Geek-o-mania', students: 1000,fill:"aqua",titlName:"Geek-i-knack" },
    

];
  return (
    <div className='pieChartData'>
        <PieChart width={700} height={440}>
            <Pie data={data} dataKey="students" y-axis={(data)=>{return data.y}} label={(data) => { return data.titlName}} outerRadius={200} fill={data.fill}  />
        </PieChart>
     </div>
  )
}
export default Analytics

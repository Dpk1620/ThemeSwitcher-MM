import "./style.css"
import { SketchPicker } from 'react-color';
import { useThemeContext } from "../context/ThemeContext"
import { useState } from "react";

const Setting = () => {
  document.title="Moris-Media: Setting"


  const { changeColor } = useThemeContext(useThemeContext)


  const handleClick = (colorSet) => {
    changeColor(colorSet)
  }
  const  ThemeColors=[{color:'#D0021B',id:1},{color:'#F5A623',id:2},{color:'#F8E71C',id:3},{color:'#8B572A',id:4}
  ,{color:'#7ED321',id:5},{color:'#417505',id:6},{color:'#BD10E0',id:7} ,{color:'#9013FE',id:8},{color:'#4A90E2',id:9},{color:'#50E3C2',id:10} 
,{color:'#B8E986',id:11},{color:'#000000',id:12},{color:'#4A4A4A',id:13} ,{color:'#9B9B9B',id:14}]
  return (
    <div className="App" style={{ height: "70vh" }}>
     
      <div className="text-center " style={{margin:"40px"}}>
          <span><b>
          Select Your Favourite Color's Here 

          </b>
          </span>
        </div>
      <div className="color-switcher">
        <div className="heading">
          <b>Select Color </b>
        </div>
        <div className="color-list">
          {ThemeColors.map((color, id) => <div key={color.id} className='color-Item' onClick={(e) => handleClick(color.color)} style={{ backgroundColor: color.color }}></div>)}
        </div>
      </div>
    </div>
  )
}
export default Setting 

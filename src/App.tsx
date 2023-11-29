import React from 'react';
import { useMemo } from "react";
import dataJson from "./data.json"
import './App.css';
import InfoCardList from "./components/InfoCardsList";

export type MachineData = {
  id: number
  name: string
  description: string
  year: number
  imageUrl: string
  categories: []
}


function App() {

  const objects = useMemo(() => dataJson.data as [MachineData], [])

  return (
<body style = {{
  backgroundColor:"lightgrey",

}}>
  

    <div className="App" style={{
      marginTop: "50px",
      marginLeft:"150px",
      marginRight:"100px",
      backgroundColor:"white",

    }} >
      
      <div className = "links" style={{
        backgroundColor:'black',
        width: "100%",
        height: "100%",
  
      }}>
        <div className='sections'>
          <a style = {{
            color:"white",
          }}href="#">HOME</a>
          <a style = {{
            color:"white",
          }}href="#">HARDWARE</a>
          <a style = {{
            color:"white",
          }}href="#">EXTENSIONS</a>
          <a style = {{
            color:"white",
          }}href="#">METHODOLOY</a>
        </div>
      </div>
      <InfoCardList items={objects} />
    </div>
    <div style={{
      backgroundColor:"black",
      width:"100%",
      height:"100%",
    }}></div>
    
  </body>
  );
}

export default App;

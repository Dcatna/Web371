import React, { useState } from 'react';
import { useMemo } from "react";
import dataJson from "./data.json"
import './App.css';
import InfoCardList from "./components/InfoCardsList";
import { PassThrough } from 'stream';

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
  const selectedTeb = useState()
  const [selectedItem, setselectedItem] = useState<MachineData | null>(null)
  return (
<body style = {{
  backgroundColor:"lightgrey",

}}>
  

    <div className="App" style={{
      marginTop: "50px",
      marginLeft:"150px",
      marginRight:"150px",
      backgroundColor:"white",

    }} >
      
      <div className = "links" style={{
        backgroundColor:'black',
        width: "100%",
        height: "100%",
  
      }}>
        <div className='sections' style={{
          paddingTop:"15px",
        }}>
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

   
      <InfoCardList items={objects} onItemClick={(item : MachineData) => setselectedItem(item)} />

    <footer>
      <div style={{
        paddingTop: "10px",
        paddingBottom:"30px",
        backgroundColor: "black",
        textAlign: "right",
        flexDirection: "column",
        
      }}>
        <a href="#" style={{
          color: "white",
          fontSize: "16px",
         
        }}>Learn More!
        </a>
      </div>
    </footer>
    </div>
    
    
  </body>
  );
}

export default App;

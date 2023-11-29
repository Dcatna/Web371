import {MachineData} from "../App";
import InfoCard from "./InfoCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {useState} from "react";



export type InfoCardListParams = {
    items: MachineData[]
    onItemClick : (item : MachineData) => void
}


export const InfoCardList = ({items, onItemClick}: InfoCardListParams) => {

    const [animationParent] = useAutoAnimate()

    const [arr, setarr] = useState<MachineData[]>([items[0],items[1], items[2]]) 

    const pusherleft = () => {
        
        if(items.indexOf(arr[2]) === items.length - 1) {
       
            setarr((prev) => {
                return [prev[1], prev[2], items[0]]
             })
       }
        else{
  
            setarr((prev) => {
                 return [prev[1], prev[2], items[items.indexOf(arr[2]) + 1]]
             })
        }
    }

    const pusherright = () => {
        if(items.indexOf(arr[0]) === 0) {
        
            setarr((prev) => {
                return [items[items.length - 1], prev[0], prev[1]]
             })
       }
        else{
            setarr((prev) => {
                 return [items[items.indexOf(arr[0]) - 1], prev[0], prev[1]]
             })
        }

    }
    return (

        <div style={{
            display: "inline-flex",
            alignItems: "stretch",
            margin: "auto",
            width: "max-content",
            backgroundColor: "white",
            
        }}>
            <button style={{
                marginTop: "120px",
                height: "50px",
                width: "50px",

            }}

                onClick={()=>{pusherleft()}}
            >
                left
            </button>
            <ul ref={animationParent}>
                {
                    arr.map((item: MachineData) =>
                        <li key={item.id}>
                            <InfoCard
                                idone = {item.id.toString()}
                                imageUrl={item.imageUrl}
                                titleText={item.name}
                                desc={item.description}
                                onClick={() => onItemClick(item)}
                            />
                        </li>
                    )
                }
            </ul>
            <button style={{
                marginTop: "120px",
                height: "50px",
                width: "50px",

            }}
                onClick={()=>{pusherright()}}
            >
                right
            </button>
        </div>
    )
}

export default InfoCardList
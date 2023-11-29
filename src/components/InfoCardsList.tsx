import {MachineData} from "../App";
import InfoCard from "./InfoCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {useState} from "react";



export type InfoCardListParams = {
    items: MachineData[]
}

export const InfoCardList = ({items}: InfoCardListParams) => {

    const [offset, setOffset] = useState(0)

    const [animationParent] = useAutoAnimate()


    return (

        <div style={{
            display: "inline-flex",
            alignItems: "stretch",
            margin: "auto",
            width: "max-content",
            backgroundColor: "gray",
            
        }}>
            <button style={{
                marginTop: "120px",
                height: "50px",
                width: "50px",

            }}
                onClick={()=>{setOffset((prev) => prev - 1)}}
            >
                left
            </button>
            <ul ref={animationParent}>
                {
                    items.slice(offset, offset + 3).map((item: MachineData) =>
                        <li key={item.id}>
                            <InfoCard
                                imageUrl={item.imageUrl}
                                titleText={item.name}
                                desc={item.description}
                                onClick={() => {}}
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
                onClick={()=>{setOffset((prev) => prev + 1)}}
            >
                right
            </button>
        </div>
    )
}

export default InfoCardList
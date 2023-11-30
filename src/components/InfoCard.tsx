
export type InfoCardParams = {
    idone : string //id
    year : number
    categories : Array<string>
    imageUrl: string
    titleText: string
    desc: string
    
    onClick: () => void
}
const catas = (categories : Array<string>) => {
    let out = ""
    categories.slice().map((cata : string) => { //disgusting
        out += " " + cata
    })
    return out
}

const InfoCard = ({year, categories, idone, imageUrl, titleText, desc, onClick }: InfoCardParams) => {

    return (
        <div
            style={{
                outlineColor: "blue",
                alignItems: "center",
                border: "1.5px",
                borderStyle: "solid",
                borderRadius: "5px",
                borderColor: "lightblue",
                marginBottom:"5px",
            }}
            onClick={onClick}
        >   <p>{idone}</p>
            <p>{titleText}</p>
            <p>{year}</p>
            <img
                style={{
                    height: 200,
                    width: 200
                }}
                src={imageUrl}
                alt={titleText}
            />
            <p>{catas(categories)}</p>
            <p>{desc}</p>
            <span style={{
                display: "block",
                height:"2px",
                backgroundColor: "lightblue",
                marginBottom: "24px"
            }}></span>
        </div>
    )
}

export default InfoCard
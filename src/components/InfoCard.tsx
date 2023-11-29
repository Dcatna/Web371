
export type InfoCardParams = {
    imageUrl: string
    titleText: string
    desc: string
    onClick: () => void
}

const InfoCard = ({imageUrl, titleText, desc, onClick }: InfoCardParams) => {

    return (
        <div
            style={{
                outlineColor: "blue",
                alignItems: "center"
            }}
            onClick={onClick}
        >
            <p>{titleText}</p>
            <img
                style={{
                    height: 200,
                    width: 200
                }}
                src={imageUrl}
                alt={titleText}
            />
            <p>{desc}</p>
        </div>
    )
}

export default InfoCard
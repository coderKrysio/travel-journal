import CardDetails from "./CardDetails"

const Card = (props: any) => {
    return (
        <div className="flex justify-center items-center gap-7 w-[48rem] p-6">
            <img className="w-40 h-48 rounded-md " alt="cardimage" src={props.img} />
            <CardDetails {...props} />
        </div>
    )
}

export default Card
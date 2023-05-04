import CardDetails from "./CardDetails"

const Card = () => {
    return (
        <div className="flex justify-center items-center gap-7 w-[48rem] p-8">
            <img className="w-36 h-44 rounded-md " alt="cardimage" src="https://source.unsplash.com/WLxQvbMyfas" />
            <CardDetails />
        </div>
    )
}

export default Card
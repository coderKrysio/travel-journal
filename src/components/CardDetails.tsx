

const CardDetails = (props: any) => {
    return (
        <div className="text-white">
            
                <div className="flex gap-4">
                <p className="flex justify-center items-center">
                    <img className="h-4" alt="location" src="https://img.icons8.com/color/96/null/marker--v1.png"/>
                    {props.country}
                </p>
                <a className="underline leading-8" href="https://google.com">View on Google Maps</a>
            </div>
            <h1 className="text-4xl font-semibold leading-10 py-2">{props.place}</h1>
            <span className="font-medium py-2">{props.fromDate} - {props.tillDate}</span>
            <p className="leading-5 py-2">{props.description}</p>
        </div>
    )
}

export default CardDetails
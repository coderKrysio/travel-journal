const CardDetails = () => {
    return (
        <div className="text-white">
            <div className="flex gap-2">
                <p className="flex justify-center items-center">
                    <img className="h-4" alt="location" src="https://img.icons8.com/color/96/null/marker--v1.png"/>
                    Japan
                </p>
                <a className="underline leading-8" href="https://google.com">View on Google Maps</a>
            </div>
            <h1 className="text-4xl font-semibold leading-10">Mount Fuji</h1>
            <span className="font-medium">from - to</span>
            <p className="leading-5">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    )
}

export default CardDetails
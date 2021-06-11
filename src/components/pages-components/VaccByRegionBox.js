
const VaccByRegionBox = ({region, partly_number, partly_perc, fully_number, fully_perc}) => {
    return (
        <div className="w-full p-4 rounded-md text-white bg-secondary mb-6 max-w-lg">

            {/* ----- region name ----- */}
            <h4 className="text-orange pb-4 uppercase">
                {region}
            </h4>

            {/* ----- partly vaccinated people ----- */}
            <div className="flex text-purple text-sm mb-2">
                <div className="w-1/2">
                    <p>Partly vaccinated:</p>
                </div>
                <div className="w-1/2 text-right">
                    <p>
                        {partly_number.toLocaleString()} persons
                    </p>
                    <p>
                        {partly_perc}% of the population
                    </p>
                </div>
            </div>

            {/* ----- fully vaccinated people ----- */}
            <div className="flex text-green text-sm">
                <div className="w-1/2">
                    <p>Fully vaccinated:</p>
                </div>
                <div className="w-1/2 text-right">
                    <p>
                        {fully_number.toLocaleString()} persons
                    </p>
                    <p>
                        {fully_perc}% of the population
                    </p> 
                </div>
            </div>    
        </div>
    )
}

export default VaccByRegionBox

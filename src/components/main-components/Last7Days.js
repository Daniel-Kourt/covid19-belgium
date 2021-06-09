
const Last7Days = ({ renderTable }) => {
    return (
        <div className="bg-secondary p-4 rounded-lg w-full max-w-xs">

            <p className="text-white text-left text-xl font-semibold mb-4">
                Last 7 Days
            </p>

            {renderTable()}

            {/* <div className="float-right text-md mt-4 mr-4 text-white hover:text-gray-300">
                <Link to="/covid-belgium-tests" className="flex space-x-1 items-center">
                    <span>Full Data</span>
                    <FaChevronRight className="h-3"/> 
                </Link>
            </div> */}

        </div> 
    )
}

export default Last7Days


const Last7Days = ({ renderTable }) => {
    return (
        <div className="bg-secondary p-4 rounded-lg w-full max-w-sm">

            <p className="text-white text-left text-lg font-semibold mb-4 pl-2">
                Last Week
            </p>

            {renderTable()}
            
        </div> 
    )
}

export default Last7Days

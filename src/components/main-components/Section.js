import { Link } from 'react-router-dom';

const Section = ({ title, renderLeft, renderRight, fullDataLink }) => {
    return (
        <div className="px-4 py-8">
            <h3 className="text-white text-xl mb-4">{title}</h3>

            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2 p-4">
                    {renderLeft}
                </div>

                <div className="w-full lg:w-1/2 p-4 grid place-items-center">
                    {renderRight}                    
                </div>

            </div>
            
            <div className="p-4 text-white text-right">
                <Link to={fullDataLink}>
                    Full Data 
                </Link>
            </div>
            
            
        </div>
    )
}

export default Section

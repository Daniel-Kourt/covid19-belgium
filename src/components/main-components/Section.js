import { Link } from 'react-router-dom';

const Section = ({ title, renderLeft, renderRight, fullDataLink }) => {
    return (
        <div className="px-4 py-8">
            <h3 className="text-white text-xl uppercase mb-4">{title}</h3>

            <div className="flex flex-wrap">

                <div className="w-full lg:w-2/5 p-4 grid place-items-center">
                    {renderLeft}
                </div>

                <div className="w-full lg:w-3/5 p-4 grid place-items-center">
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

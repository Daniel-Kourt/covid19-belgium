import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Section = ({ title, renderLeft, renderRight, fullDataLink }) => {
    return (
        <div className="px-4 py-8 shadow-xl">

            <h3 className="text-white text-xl uppercase mb-4 pl-4 font-bold">
                {title}
            </h3>

            <div className="flex flex-wrap">

                <div className="w-full lg:w-2/5 p-4 grid place-items-center">
                    {renderLeft}
                </div>

                <div className="w-full lg:w-3/5 p-4 grid place-items-center">
                    {renderRight}                    
                </div>

            </div>
            
            <div className="p-4 flex justify-end">
                <div className="w-24">
                    <Link to={fullDataLink} className="flex items-center text-white hover:text-orange">
                        Full Data <FaChevronRight className="text-sm pl-1"/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Section

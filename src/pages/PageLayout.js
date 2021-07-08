import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const PageLayout = ({ title, renderLeft, renderRight }) => {
    return (
        <div>
            <h1 className="text-orange text-lg p-4">
                Statistical Data about {title}
            </h1>
                        
            <div className="pb-4 flex justify-end text-sm">
                <div className="w-48">
                    <Link to="/" className="flex items-center text-white hover:text-orange">
                        <FaChevronLeft className="pr-1" style={{fontSize: '0.7rem'}}/> 
                        <span>Return to homepage</span>
                    </Link>
                </div>
            </div>

            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="w-full p-4 sm:px-16 md:px-24 lg:px-4">
                        {renderLeft()}
                    </div> 
                </div>

                <div className="w-full lg:w-1/2 p-4 sm:px-16 md:px-24 lg:px-4 grid place-items-center">
                    {renderRight()}
                </div>

            </div>

        </div>
    )
}

export default PageLayout

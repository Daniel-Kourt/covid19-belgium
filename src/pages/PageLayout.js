import { Link } from 'react-router-dom';

const PageLayout = ({ renderLeft, renderRight }) => {
    return (
        <div>
            <h1 className="text-orange text-xl py-10">Cases</h1>
            <Link to="/">
                <span className="text-white text-sm">Return to homepage</span>
            </Link>

            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="w-full p-8">
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

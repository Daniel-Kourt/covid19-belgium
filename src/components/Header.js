import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>            
                <h1 className="text-2xl p-4 text-white font-bold">
                    <Link to="/">
                        Covid-19 Stats in Belgium
                    </Link> 
                </h1>                       
        </div>
    )
}

export default Header

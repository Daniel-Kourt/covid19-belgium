
const Footer = () => {
    return (
        <div className="text-white text-center pt-6 pb-2">
            <h4 style={{fontSize: '0.7rem'}}>Data by 
                <a href="https://epistat.wiv-isp.be/covid/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="hover:text-orange"> Sciensano </a>
                <span>
                    | Created by 
                    <a href="https://dnlk.dev" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="hover:text-orange"> dnlk</a>
                </span>
            </h4>
        </div>
    )
}

export default Footer

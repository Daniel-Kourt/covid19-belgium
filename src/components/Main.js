import { SectionCases, SectionVaccinations, TotalData } from './main-components';

const Main = () => {

    document.title = "Covid-19 Stats in Belgium | Homepage";

    return (
        <div>
            <TotalData /> 
            <SectionCases />
            <SectionVaccinations />                        
        </div>
    )
}

export default Main

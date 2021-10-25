import React, { useContext } from 'react';
import Loader from "react-loader-spinner";
import TotalBox from './TotalBox';
import { DataContext } from '../../context/DataContextProvider';
import { count_vaccinations_A, count_vaccinations_B } from '../../utils/vacCalculations';
import { count_cases, cases_by_date } from '../../utils/casesCalculations';
import { total_deaths, deaths_by_date } from '../../utils/deathsCalculations';

const TotalData = () => {

    const { vaccinsContext, casesContext, deathsContext } = useContext(DataContext);

    const vaccination_A =  vaccinsContext ? count_vaccinations_A(vaccinsContext) : null;
    const vaccination_B =  vaccinsContext ? count_vaccinations_B(vaccinsContext) : null;
    
    return (
        <> 
            
            {(vaccinsContext && casesContext && deathsContext)
            ?
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:px-16 md:px-24 lg:px-8">
                    
                    {/* ----- Cases ----- */}

                    <TotalBox 
                        title="Total Cases"
                        color="orange"
                        isPercentage={false}
                        numberOne={count_cases(casesContext).toLocaleString()}
                        numberTwo={cases_by_date(casesContext).slice(0,7).reduce( (sum, { daily_cases }) => sum + daily_cases, 0 ).toLocaleString()}
                    />

                    {/* ----- Deaths ----- */}                    

                    <TotalBox 
                        title="Total Deaths"
                        color="red"
                        isPercentage={false}
                        numberOne={total_deaths(deathsContext).toLocaleString()}
                        numberTwo={deaths_by_date(deathsContext).slice(0,7).reduce( (sum, { deaths_total }) => sum + deaths_total, 0 ).toLocaleString()}
                    />

                    {/* ----- Partly vaccinated ----- */}
                    
                    <TotalBox 
                        title="Partly vaccinated"
                        color="purple"
                        isPercentage={true}
                        numberOne={vaccination_A.vacc_A.toLocaleString()}
                        numberTwo={vaccination_A.percentage}
                    />

                    {/* ----- Fully vaccinated ----- */}                    

                    <TotalBox 
                        title="Fully vaccinated"
                        color="green"
                        isPercentage={true}
                        numberOne={vaccination_B.vacc_B.toLocaleString()}
                        numberTwo={vaccination_B.percentage}
                    />                    
                    

                </div>
            :
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <Loader
                        type="Puff"
                        color="#a78bfa"
                        height={100}
                        width={100}                        
                    /> 
                    <p className="pt-4 text-base text-white">
                        Loading
                    </p>
                </div>    
            }

           
        </>
    )
}

export default TotalData

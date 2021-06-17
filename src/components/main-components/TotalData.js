import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContextProvider';
import { count_vaccinations_A, count_vaccinations_B } from '../../utils/vacCalculations';
import { count_cases, cases_by_date } from '../../utils/casesCalculations';
import { total_deaths, deaths_by_date } from '../../utils/deathsCalculations';

const TotalData = () => {

    const { vaccinsContext, casesContext, deathsContext } = useContext(DataContext);
    
    return (
        <> 
            
            {(vaccinsContext && casesContext && deathsContext)
            ?
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:px-16 md:px-24 lg:px-8">
                    
                    {/* ----- Cases ----- */}
                    <div className="total-box text-orange">
                        <p className="mb-2 uppercase">Total cases</p>
                        <p className="text-3xl">{count_cases(casesContext).toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">
                            {cases_by_date(casesContext).slice(0,7).reduce( (sum, { daily_cases }) => sum + daily_cases, 0 ).toLocaleString()}
                        </p>
                        <p>in last week</p>                        
                    </div>

                    {/* ----- Deaths ----- */}
                    <div className="total-box text-red">
                        <p className="mb-2 uppercase">Total deaths</p>
                        <p className="text-3xl">{total_deaths(deathsContext).toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">
                            {deaths_by_date(deathsContext).slice(0,7).reduce( (sum, { deaths_total }) => sum + deaths_total, 0 ).toLocaleString()}
                        </p>
                        <p>in last week</p>                        
                    </div>

                    {/* ----- Partly vaccinated ----- */}
                    <div className="total-box text-purple">
                        <p className="mb-2 uppercase">Partly vaccinated</p>
                        <p className="text-3xl">{count_vaccinations_A(vaccinsContext).vacc_A.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">{count_vaccinations_A(vaccinsContext).percentage}%</p>
                        <p>of the population</p>
                    </div>

                    {/* ----- Fully vaccinated ----- */}
                    <div className="total-box text-green">
                        <p className="mb-2 uppercase">Fully vaccinated</p>
                        <p className="text-3xl">{count_vaccinations_B(vaccinsContext).vacc_B.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">{count_vaccinations_B(vaccinsContext).percentage}%</p>
                        <p>of the population</p>
                    </div>

                </div>
            :
                <div className="text-white pt-8">Loading data ... </div>    
            }

           
        </>
    )
}

export default TotalData

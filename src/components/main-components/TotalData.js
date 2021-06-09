import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContextProvider';
import { count_vaccinations_A, count_vaccinations_B } from '../../utils/vacCalculations';
import { count_cases } from '../../utils/casesCalculations';

const TotalData = () => {

    const { vaccinsContext: vaccins, casesContext } = useContext(DataContext);
    
    return (
        <> 
            
            {(vaccins && casesContext)
            ?
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:px-16">

                    <div className="p-4 bg-secondary text-orange text-md rounded-md">
                        <p className="mb-2">Partially vaccinated:</p>
                        <p className="text-3xl">{count_vaccinations_A(vaccins).vacc_A.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">{count_vaccinations_A(vaccins).percentage}%</p>
                        <p>of the population</p>
                    </div>

                    <div className="p-4 bg-secondary text-green text-md rounded-md">
                        <p className="mb-2">Fully vaccinated:</p>
                        <p className="text-3xl">{count_vaccinations_B(vaccins).vacc_B.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2">{count_vaccinations_B(vaccins).percentage}%</p>
                        <p>of the population</p>
                    </div>

                    <div className="p-4 bg-secondary text-red text-md rounded-md">
                        <p className="mb-2">Total cases</p>
                        <p className="text-3xl">{count_cases(casesContext).toLocaleString()}</p>
                        <p> persons</p>                        
                    </div>

                    <div className="p-4 bg-secondary text-purple text-md rounded-md">
                        <p className="mb-2">Fully vaccinated:</p>
                        <p className="text-3xl">{count_vaccinations_B(vaccins).vacc_B.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2">{count_vaccinations_B(vaccins).percentage}%</p>
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

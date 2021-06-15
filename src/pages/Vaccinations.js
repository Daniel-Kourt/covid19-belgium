import { useContext } from 'react';
//import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import PageLayout from './PageLayout';
import VaccByRegionBox from '../components/pages-components/VaccByRegionBox';
import { DataContext } from '../context/DataContextProvider';
import { vaccinations_by_date, vaccinations_brussels, vaccinations_wallonia, vaccinations_flanders } from '../utils/vacCalculations';

const Vaccinations = () => {

    const { vaccinsContext } = useContext(DataContext);
    document.title = "Covid-19 Stats in Belgium | Vaccinations";

    const renderTable = () => {

        return (
            <div className="w-full">
                <h3 className="text-white font-semibold uppercase mb-4">Vaccinations by date</h3>

            <table className="w-full">
                <thead>
                    <tr className="bg-secondary text-sm font-medium">
                        <th className="px-2 py-4 text-white text-center">Date</th>
                        <th className="px-2 py-4 text-orange text-right">Vaccinations</th>
                        <th className="px-2 py-4 text-purple text-right">Dose A</th>
                        <th className="px-2 py-4 text-green text-right">Dose B</th>                            
                    </tr>
                </thead>

                <tbody>

                {vaccinations_by_date(vaccinsContext).map((day, index) => (                        
                    <tr 
                        key={day.date} 
                        className={`${(index % 2 !== 0) && 'bg-secondary'} text-sm font-medium`}
                    >
                        <td className="p-2 text-white text-center">
                            {moment(day.date).format('DD-MM')}
                        </td>
                        <td className="p-2 text-orange text-right">
                            {day.daily_vaccins.toLocaleString()}
                        </td>
                        <td className="p-2 text-purple text-right">
                            {day.daily_dose_A.toLocaleString()}
                        </td>
                        <td className="p-2 text-green text-right">
                            {day.daily_dose_B.toLocaleString()}
                        </td>
                    </tr>
                    
                ))
                }
                
                </tbody>

            </table>
            </div>

        )
    }

    const render_by_region = () => {

        const { vacc_brussels_A, vacc_brussels_B, perc_brussels_A, perc_brussels_B } = vaccinations_brussels(vaccinsContext);
        const { vacc_wallonia_A, vacc_wallonia_B, perc_wallonia_A, perc_wallonia_B } = vaccinations_wallonia(vaccinsContext);
        const { vacc_flanders_A, vacc_flanders_B, perc_flanders_A, perc_flanders_B } = vaccinations_flanders(vaccinsContext);

        return (
            <div className="w-full">

                <h3 className="text-white font-semibold uppercase mb-4">Vaccinated people by region</h3>
              
                <VaccByRegionBox 
                    region="Brussels"
                    partly_number={vacc_brussels_A}
                    partly_perc={perc_brussels_A}
                    fully_number={vacc_brussels_B}
                    fully_perc={perc_brussels_B}
                />

                <VaccByRegionBox 
                    region="Wallonia"
                    partly_number={vacc_wallonia_A}
                    partly_perc={perc_wallonia_A}
                    fully_number={vacc_wallonia_B}
                    fully_perc={perc_wallonia_B}
                />

                <VaccByRegionBox 
                    region="Flanders"
                    partly_number={vacc_flanders_A}
                    partly_perc={perc_flanders_A}
                    fully_number={vacc_flanders_B}
                    fully_perc={perc_flanders_B}
                />
            </div>
        )
    }

    return (
        <>
            {vaccinsContext &&
                <PageLayout
                    renderLeft={render_by_region}
                    renderRight={renderTable}
                />
            
            }
        </>
    )
}

export default Vaccinations

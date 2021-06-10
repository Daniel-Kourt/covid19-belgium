import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { DataContext } from '../../context/DataContextProvider';
import Last7Days from './Last7Days';
import Section from './Section';
import { vaccinations_by_date } from '../../utils/vacCalculations';

const SectionVaccinations = () => {

    const { vaccinsContext } = useContext(DataContext);

    const renderTable = () => {
        return (
            <table className="text-center w-full">
                <thead>
                    <tr className="bg-primary text-sm font-medium">
                        <th className="p-4 text-white text-center">Date</th>
                        <th className="p-4 text-orange text-right">Vaccinations</th>
                        <th className="p-4 text-purple text-right">Dose A</th>
                        <th className="p-4 text-green text-right">Dose B</th>                            
                    </tr>
                </thead>

                <tbody>

                {vaccinations_by_date(vaccinsContext).slice(0,7).map((day, index) => (                        
                    <tr key={day.date} className={`${(index % 2 !== 0) && 'bg-primary'} text-sm font-medium`}>
                        <td className="p-2 text-white">
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

        )
    }

    return (
        <>
        {vaccinsContext &&
            <Section 
                title="Vaccinations"
                renderLeft={ <Last7Days renderTable={renderTable} /> } 
                renderRight={ <div>right</div> } 
                fullDataLink="/vaccinations"
            />
        }
        </>        
    )
}

export default SectionVaccinations

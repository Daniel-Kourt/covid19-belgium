import { useContext } from 'react';
//import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import PageLayout from './PageLayout';
import { DataContext } from '../context/DataContextProvider';
import { vaccinations_by_date, vaccinations_brussels, vaccinations_wallonia, vaccinations_flanders } from '../utils/vacCalculations';

const Vaccinations = () => {

    const { vaccinsContext } = useContext(DataContext);
    document.title = "Covid-19 Stats in Belgium | Vaccinations";

    const renderTable = () => {

        return (
            <table className="text-center w-full">
                <thead>
                    <tr className="bg-secondary text-sm font-medium">
                        <th className="p-4 text-white text-center">Date</th>
                        <th className="p-4 text-orange text-right">Vaccinations</th>
                        <th className="p-4 text-purple text-right">Dose A</th>
                        <th className="p-4 text-green text-right">Dose B</th>                            
                    </tr>
                </thead>

                <tbody>

                {vaccinations_by_date(vaccinsContext).map((day, index) => (                        
                    <tr 
                        key={day.date} 
                        className={`${(index % 2 !== 0) && 'bg-secondary'} text-sm font-medium`}
                    >
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

    const render_by_region = () => {
        return (
            <div className="w-full">
                <div className="text-white bg-secondary p-4 rounded-md">
                    <p className="text-orange mb-2">Brussels</p>
                    <p>Partly vaccinated: {vaccinations_brussels(vaccinsContext).vacc_brussels_A}</p>
                    <p>{vaccinations_brussels(vaccinsContext).percentage_A}% of the population</p>
                    <p className="mt-2">Fully vaccinated: {vaccinations_brussels(vaccinsContext).vacc_brussels_B}</p>
                    <p>{vaccinations_brussels(vaccinsContext).percentage_B}% of the population</p>              
                </div>

                <div className="text-white bg-secondary p-4 rounded-md">
                    <p>Wallonia</p>
                    <p>Partly vaccinated: {vaccinations_wallonia(vaccinsContext).vacc_wallonia_A}</p>
                    <p>{vaccinations_wallonia(vaccinsContext).percentage_A}% of the population</p>
                    <p>Fully vaccinated: {vaccinations_wallonia(vaccinsContext).vacc_wallonia_B}</p>
                    <p>{vaccinations_wallonia(vaccinsContext).percentage_B}% of the population</p>              
                </div>

                <div className="text-white bg-secondary p-4 rounded-md">
                    <p>Flanders</p>
                    <p>Partly vaccinated: {vaccinations_flanders(vaccinsContext).vacc_flanders_A}</p>
                    <p>{vaccinations_flanders(vaccinsContext).percentage_A}% of the population</p>
                    <p>Fully vaccinated: {vaccinations_flanders(vaccinsContext).vacc_flanders_B}</p>
                    <p>{vaccinations_flanders(vaccinsContext).percentage_B}% of the population</p>              
                </div>
            </div>
        )
    }

    return (
        <PageLayout
            renderLeft={render_by_region}
            renderRight={renderTable}
        />
    )
}

export default Vaccinations

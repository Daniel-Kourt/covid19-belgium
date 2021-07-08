import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { DataContext } from '../../context/DataContextProvider';
import Last7Days from './Last7Days';
import Section from './Section';
import { vaccinations_by_date, vaccination_progress } from '../../utils/vacCalculations';
import { COLORS } from '../../constants';

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

    const renderLineChart = () => {

        const vaccinated_people = vaccination_progress(vaccinsContext);

        const data = {
            labels: vaccinated_people.map(date => moment(date.day).format('DD-MM')),
            datasets: [
            {
                label: 'Partly Vaccinated',
                data: vaccinated_people.map(date => date.people_A),
                fill: false,
                stepped: false,
                backgroundColor: COLORS.purple,
                borderColor: COLORS.purple,
            },
            {
                label: 'Fully Vaccinated',
                data: vaccinated_people.map(date => date.people_B),
                fill: false,
                stepped: false,
                backgroundColor: COLORS.green,
                borderColor: COLORS.green,
            },
            ],
        };

        const options = {
            plugins: {        
                title: {
                    display: true,
                    text: "Covid-19 Vaccination's Progress by date",
                    color: COLORS.orange
                },
            }       
        };

        return <Line data={data} options={options} />;
    }
    

    return (
        <>
        {vaccinsContext &&
            <Section 
                title="Vaccinations"
                renderLeft={ <Last7Days renderTable={renderTable} /> } 
                renderRight={ renderLineChart() } 
                fullDataLink="/vaccinations"
            />
        }
        </>        
    )
}

export default SectionVaccinations

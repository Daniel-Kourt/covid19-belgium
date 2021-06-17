import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { DataContext } from '../../context/DataContextProvider';
import Last7Days from './Last7Days';
import Section from './Section';
import { deaths_by_date } from '../../utils/deathsCalculations';
import { COLORS } from '../../constants';

const SectionDeaths = () => {

    const { deathsContext } = useContext(DataContext);

    let dates_for_chart = deaths_by_date(deathsContext).map(date => moment(date.date).format('DD-MM-YY')).reverse();
    let deaths_for_chart = deaths_by_date(deathsContext).map(date => date.deaths_total).reverse();
   
    const data = {
        labels: dates_for_chart,
        datasets: [
          {
            label: 'Deaths',
            data: deaths_for_chart,
            fill: true,
            stepped: false,
            backgroundColor: COLORS.red,
            borderColor: COLORS.red,
          },
        ],
    };

    const options = {        
        title: {
          display: true,
          text: 'Covid-19 Cases',
          color: 'orange'
        },       
    };

    const renderTable = () => {
        return (    
            <table className="text-white text-center w-full">
                    <thead>
                        <tr className="bg-primary text-sm text-center font-medium">
                            <th className="p-4 text-white">Date</th>
                            <th className="p-4 text-red">Deaths</th>                            
                        </tr>
                    </thead>
    
                    <tbody>
    
                    {deaths_by_date(deathsContext).slice(0,7).map((day, index) => (
                        <tr 
                            key={day.date} 
                            className={`${(index % 2 !== 0) && 'bg-primary'} text-sm font-medium`}
                        >
                            <td className="p-2 text-white">
                                {moment(day.date).format('DD-MM')}
                            </td>
                            <td className="p-2 text-red">
                                {day.deaths_total}
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
        {deathsContext &&
            <Section 
                title="Deaths"
                renderLeft={ <Last7Days renderTable={renderTable} /> } 
                renderRight={ <Line data={data} options={options} /> } 
                fullDataLink="/deaths"
            />
        }
        </> 
    )
}

export default SectionDeaths

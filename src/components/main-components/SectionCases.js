import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { DataContext } from '../../context/DataContextProvider';
import Last7Days from './Last7Days';
import Section from './Section';
import { cases_by_date } from '../../utils/casesCalculations';


const SectionCases = () => {

    const { casesContext } = useContext(DataContext);
    
    let dates_for_chart = cases_by_date(casesContext).map(date => date.date).reverse();
    let cases_for_chart = cases_by_date(casesContext).map(date => date.daily_cases).reverse();
   
    const data = {
        labels: dates_for_chart,
        datasets: [
          {
            label: 'Cases',
            data: cases_for_chart,
            fill: false,
            stepped: true,
            backgroundColor: 'orange',
            borderColor: 'orange',
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
                            <th className="p-4 text-orange">Date</th>
                            <th className="p-4 text-green">Cases</th>                            
                        </tr>
                    </thead>
    
                    <tbody>
    
                    {cases_by_date(casesContext).slice(0,7).map((day, index) => (
                        <tr 
                            key={day.date} 
                            className={`${(index % 2 === 0) ? '' : 'bg-primary'} text-sm font-medium`}
                        >
                            <td className="p-2 text-orange">
                                {moment(day.date).format('DD-MM')}
                            </td>
                            <td className="p-2 text-green">
                                {day.daily_cases}
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
        {casesContext &&
            <Section 
                title="Cases"
                renderLeft={ <Last7Days renderTable={renderTable} /> } 
                renderRight={ <Line data={data} options={options} /> } 
                fullDataLink="/cases"
            />
        }
        </>        
    )
}

export default SectionCases

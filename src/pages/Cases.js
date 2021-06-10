import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import PageLayout from './PageLayout';
import { DataContext } from '../context/DataContextProvider';
import { cases_by_date, cases_by_gender } from '../utils/casesCalculations';
import { COLORS } from '../constants';

const Cases = () => {

    const { casesContext } = useContext(DataContext);
    document.title = "Covid-19 Stats in Belgium | Cases";

    const renderTable = () => {
        return (    
            <table className="text-white text-center w-full">
                <thead>
                    <tr className="bg-secondary text-sm text-center font-medium">
                        <th className="p-4 text-white">Date</th>
                        <th className="p-4 text-orange">Cases</th>                          
                        <th className="p-4 text-purple">Brussels</th>                          
                        <th className="p-4 text-green">Wallonia</th>                          
                        <th className="p-4 text-red">Flanders</th>                          
                    </tr>
                </thead>

                <tbody>

                {cases_by_date(casesContext).map((day, index) => (
                    <tr 
                        key={day.date} 
                        className={`${(index % 2 !== 0) && 'bg-secondary'} text-sm font-medium`}
                    >
                        <td className="p-2 text-white">
                            {moment(day.date).format('DD-MM')}
                        </td>
                        <td className="p-2 text-orange">
                            {day.daily_cases}
                        </td>
                        <td className="p-2 text-purple">
                            {day.daily_brussels}
                        </td>
                        <td className="p-2 text-green">
                            {day.daily_wallonia}
                        </td>
                        <td className="p-2 text-red">
                            {day.daily_flanders}
                        </td>
                    </tr>
                ))

                }
                
                </tbody>
            </table>
    
        )
    }



    const pie_chart_by_gender = () => {

        const data = {
            labels: ['Men', 'Women'],
            datasets: [
              {
                label: 'Cases',
                backgroundColor: [
                COLORS.green,
                COLORS.red
                ],
                hoverBackgroundColor: [
                COLORS.greenHover,
                COLORS.redHover
                ],
                data: [
                    cases_by_gender(casesContext).cases_male,
                    cases_by_gender(casesContext).cases_female
                ]
              }
            ]
          }
        
        const options= {
            title:{
              display: true,
              text:'Cases percentage by gender',
              fontSize:20
            },
            legend:{
              display: true,
              position:'right'
            }
        }

        return <Pie data={data} options={options} />

    }

    return (

        <PageLayout 
            renderLeft={pie_chart_by_gender}
            renderRight={renderTable}
        />

    )
}

export default Cases

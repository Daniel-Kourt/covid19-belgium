import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import PageLayout from './PageLayout';
import { DataContext } from '../context/DataContextProvider';
import { deaths_by_date, deaths_by_age_group, deaths_by_gender } from '../utils/deathsCalculations';
import { COLORS } from '../constants';

const Deaths = () => {

    const { deathsContext } = useContext(DataContext);
    document.title = "Covid-19 Stats in Belgium | Deaths";
   
    const renderTable = () => {
        return ( 
            <div className="w-full">
                <h3 className="text-white font-semibold uppercase mb-4">Covid-19 Deaths by date</h3>
            
                <table className="text-center w-full">
                    <thead>
                        <tr className="bg-secondary text-sm text-center font-medium">
                            <th className="p-4 text-white">Date</th>
                            <th className="p-4 text-red">Deaths</th>                          
                            {/* <th className="p-4 text-purple">Brussels</th>                          
                            <th className="p-4 text-green">Wallonia</th>                          
                            <th className="p-4 text-red">Flanders</th>                           */}
                        </tr>
                    </thead>

                    <tbody>

                    {deaths_by_date(deathsContext).map((day, index) => (
                        <tr 
                            key={day.date} 
                            className={`${(index % 2 !== 0) && 'bg-secondary'} text-sm font-medium`}
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
            </div>
    
        )
    }

    const pie_chart_by_gender = () => {
        const {deaths_M, deaths_F} = deaths_by_gender(deathsContext);

        const data = {
            labels: ['Men', 'Women'],
            datasets: [
              {
                label: 'Deaths',
                backgroundColor: [
                    COLORS.green,
                    COLORS.red                   
                ],
                hoverBackgroundColor: [
                    COLORS.greenHover,
                    COLORS.redHover
                ],
                data: [
                    deaths_M,
                    deaths_F
                ]
              }
            ]
        }

        const options= {
            plugins: {
                title:{
                    display: true,
                    text: 'Deaths by gender',
                    fontSize: 20
                },
                legend:{
                    display: true,
                    position: 'right'
                }
            }
        }

        return <div className="max-w-sm pb-6">
            <h3 className="text-white font-semibold uppercase mb-4">Covid-19 deaths by gender</h3>
            <Pie data={data} options={options} />
            </div>


    }

    const pie_chart_by_age = () => {
        const {deaths_0_44, deaths_45_64, deaths_65_74, deaths_75_84, deaths_85} = deaths_by_age_group(deathsContext);
                
        const data = {
            labels: ['0-44', '45-64', '65-74', '75-84', '85+'],
            datasets: [
              {
                label: 'Deaths',
                backgroundColor: [
                    COLORS.blue,
                    COLORS.green,
                    COLORS.orange,
                    COLORS.purple,
                    COLORS.red
                ],                
                data: [
                    deaths_0_44,
                    deaths_45_64,
                    deaths_65_74,
                    deaths_75_84,
                    deaths_85
                ]
              }
            ]
        }
        
        const options= {
            plugins: {
                title:{
                    display: true,
                    text: 'Deaths by age group',
                    fontSize: 20
                },
                legend:{
                    display: true,
                    position: 'right'
                }
            }
        }

        return <div className="max-w-sm pb-6">
            <h3 className="text-white font-semibold uppercase mb-4">Covid-19 deaths by age group</h3>
            <Pie data={data} options={options} />
            </div>

    }

    const render_charts = () => {
        return (
            <div>                
                {pie_chart_by_age()}
                {pie_chart_by_gender()}
            </div>
        )
    }


    return (
        <>
        {deathsContext &&
            <PageLayout
                title="Deaths from Covid-19" 
                renderLeft={render_charts}
                renderRight={renderTable}
            />
        }        
        </>
    )
}

export default Deaths

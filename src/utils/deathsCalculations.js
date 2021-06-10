import lodash from 'lodash';

// calculates the total deaths
export const total_deaths = (deaths) => {
    return deaths.reduce( (sum, { DEATHS }) => sum + DEATHS, 0 ); 
}


// creates an array of daily data of deaths
export const deaths_by_date = (deaths) => {

    const grouped_data = lodash.groupBy(deaths, 'DATE' );      
        
    const deathsFiltered = [];
    
    Object.keys(grouped_data).forEach((date) => {            
        
        let deaths_total = grouped_data[date].reduce( (sum, { DEATHS }) => sum + DEATHS, 0 );

        let deaths_total_M = grouped_data[date].filter((date) => {
            return date.SEX === 'M';
        }).reduce( (sum, { DEATHS }) => sum + DEATHS, 0 );
        
        let deaths_total_F = grouped_data[date].filter((date) => {
            return date.SEX === 'F';
        }).reduce( (sum, { DEATHS }) => sum + DEATHS, 0 );

        
        deathsFiltered.unshift({
            date,
            deaths_total,
            deaths_total_M,
            deaths_total_F
        });
    })
}
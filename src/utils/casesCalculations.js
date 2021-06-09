import lodash from 'lodash';

// calculates the total cases
export const count_cases = (cases) => {        
    let total_cases = cases.reduce( (sum, { CASES }) => sum + CASES, 0 );        
    return total_cases;
}


// creates an array of daily data of cases
export const cases_by_date = (cases) => {

    const grouped_data = lodash.groupBy(cases, 'DATE' );
    
    const casesFiltered = [];
        
    Object.keys(grouped_data).forEach((date) => {            
        
        let daily_cases = grouped_data[date].reduce( (sum, { CASES }) => sum + CASES, 0 );
        
        let daily_brussels = grouped_data[date].filter((date) => {
            return date.REGION === 'Brussels';
        }).reduce( (sum, { CASES }) => sum + CASES, 0 );

        let daily_wallonia = grouped_data[date].filter((date) => {
            return date.REGION === 'Wallonia';
        }).reduce( (sum, { CASES }) => sum + CASES, 0 );

        let daily_flanders = grouped_data[date].filter((date) => {
            return date.REGION === 'Flanders';
        }).reduce( (sum, { CASES }) => sum + CASES, 0 );

        
        if ( date !== "undefined" ) {
            casesFiltered.unshift({
                date,
                daily_cases,
                daily_brussels,
                daily_wallonia,
                daily_flanders
            });
        }
    })
    
    return casesFiltered;
}
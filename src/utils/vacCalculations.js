import lodash from 'lodash';

const POPULATION = 11673469;

// calculates the total vaccinations of dose A
export const count_vaccinations_A = (vaccins) => {
    let vacc_A = vaccins.filter((date) => {
        return date.DOSE === 'A';
    }).reduce( (sum, { COUNT }) => sum + COUNT, 0 );

    let percentage = (vacc_A / POPULATION * 100).toFixed(2);
    return {vacc_A, percentage};
}

// calculates the total vaccinations of dose B
export const count_vaccinations_B = (vaccins) => {
    let vacc_B = vaccins.filter((date) => {
        return date.DOSE === 'B';
    }).reduce( (sum, { COUNT }) => sum + COUNT, 0 );
    
    let percentage = (vacc_B / POPULATION * 100).toFixed(2);
    return {vacc_B, percentage};
}

// creates an array of daily data of vaccinations
export const vaccinations_by_date = (vaccins) => {

    const grouped_data = lodash.groupBy(vaccins, 'DATE' );        
    
    const vaccinations_filtered = [];        
    
    Object.keys(grouped_data).forEach((date) => {            
        
        let daily_vaccins = grouped_data[date].reduce( (sum, { COUNT }) => sum + COUNT, 0 );
        
        let daily_dose_A = grouped_data[date].filter((date) => {
            return date.DOSE === 'A';
        }).reduce( (sum, { COUNT }) => sum + COUNT, 0 );

        let daily_dose_B = grouped_data[date].filter((date) => {
            return date.DOSE === 'B';
        }).reduce( (sum, { COUNT }) => sum + COUNT, 0 );

        vaccinations_filtered.unshift({
            date,
            daily_vaccins,
            daily_dose_A,
            daily_dose_B
        });
    })

    return vaccinations_filtered;

}
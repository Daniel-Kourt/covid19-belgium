import lodash from 'lodash';
import { POPULATION, POPULATION_BRUSSELS, POPULATION_FLANDERS, POPULATION_WALLONIA } from '../constants';

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


// calculates vaccinations for region of brussels
export const vaccinations_brussels = (vaccins) => {
    let vacc_brussels = vaccins.filter(item => item.REGION === 'Brussels');

    let vacc_brussels_A = vacc_brussels.filter(item => item.DOSE === 'A').reduce( (sum, { COUNT }) => sum + COUNT, 0 );
    let vacc_brussels_B = vacc_brussels.filter(item => item.DOSE === 'B').reduce( (sum, { COUNT }) => sum + COUNT, 0 );

    let perc_brussels_A = (vacc_brussels_A / POPULATION_BRUSSELS * 100).toFixed(2);
    let perc_brussels_B = (vacc_brussels_B / POPULATION_BRUSSELS * 100).toFixed(2);

    return { vacc_brussels_A, vacc_brussels_B, perc_brussels_A, perc_brussels_B };
}


// calculates vaccinations for region of wallonia
export const vaccinations_wallonia = (vaccins) => {
    let vacc_wallonia = vaccins.filter(item => item.REGION === 'Wallonia');

    let vacc_wallonia_A = vacc_wallonia.filter(item => item.DOSE === 'A').reduce( (sum, { COUNT }) => sum + COUNT, 0 );
    let vacc_wallonia_B = vacc_wallonia.filter(item => item.DOSE === 'B').reduce( (sum, { COUNT }) => sum + COUNT, 0 );

    let perc_wallonia_A = (vacc_wallonia_A / POPULATION_WALLONIA * 100).toFixed(2);
    let perc_wallonia_B = (vacc_wallonia_B / POPULATION_WALLONIA * 100).toFixed(2);

    return { vacc_wallonia_A, vacc_wallonia_B, perc_wallonia_A, perc_wallonia_B };
}


// calculates vaccinations for region of flanders
export const vaccinations_flanders = (vaccins) => {
    let vacc_flanders = vaccins.filter(item => item.REGION === 'Flanders');

    let vacc_flanders_A = vacc_flanders.filter(item => item.DOSE === 'A').reduce( (sum, { COUNT }) => sum + COUNT, 0 );
    let vacc_flanders_B = vacc_flanders.filter(item => item.DOSE === 'B').reduce( (sum, { COUNT }) => sum + COUNT, 0 );

    let perc_flanders_A = (vacc_flanders_A / POPULATION_FLANDERS * 100).toFixed(2);
    let perc_flanders_B = (vacc_flanders_B / POPULATION_FLANDERS* 100).toFixed(2);

    return { vacc_flanders_A, vacc_flanders_B, perc_flanders_A, perc_flanders_B };
}
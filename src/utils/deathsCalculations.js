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

    return deathsFiltered;
}

// calculates the deaths by age group
export const deaths_by_age_group = (deaths) => {
    let deaths_85 = 0, 
        deaths_75_84 = 0,
        deaths_65_74 = 0, 
        deaths_45_64 = 0,         
        deaths_0_44 = 0;

    deaths.forEach(item => {
        switch (item.AGEGROUP) {
            case '85+':
                deaths_85 += item.DEATHS;
                break;
            case '75-84':
                deaths_75_84 += item.DEATHS;
                break;
            case '65-74':
                deaths_65_74 += item.DEATHS;
                break;
            case '45-64':
                deaths_45_64 += item.DEATHS;
                break;
            case '25-44':
                deaths_0_44 += item.DEATHS;
                break;
            case '0-24':
                deaths_0_44 += item.DEATHS;
                break;            
        }
    })

    return {deaths_0_44, deaths_45_64, deaths_65_74, deaths_75_84, deaths_85};
}


// calculates the deaths by gender
export const deaths_by_gender = (deaths) => {
    let deaths_M = 0, 
        deaths_F = 0;

    deaths.forEach(item => {
        switch (item.SEX) {
            case 'M':
                deaths_M += item.DEATHS;
                break;
            case 'F':
                deaths_F += item.DEATHS;
                break;
        }
    })

    return {deaths_M, deaths_F};
}
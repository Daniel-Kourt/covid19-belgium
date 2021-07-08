import lodash from 'lodash';

// calculates the total cases
export const count_cases = (cases) => {        
    let total_cases = cases.reduce( (sum, { CASES }) => sum + CASES, 0 );        
    return total_cases;
}

// calculates the total cases by gender
export const cases_by_gender = (cases) => {
    let cases_male = cases.filter(item => {
        return item.SEX === 'M'
    }).reduce( (sum, { CASES }) => sum + CASES, 0 );
    let cases_female = cases.filter(item => {
        return item.SEX === 'F'
    }).reduce( (sum, { CASES }) => sum + CASES, 0 );

    return {cases_male, cases_female};
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

// calculates th total cases by age group
export const cases_by_age_group = (cases) => {
    let cases_0_9 = 0,
        cases_10_19 = 0,
        cases_20_29 = 0,
        cases_30_39 = 0,
        cases_40_49 = 0,
        cases_50_59 = 0,
        cases_60_69 = 0,
        cases_70_79 = 0,
        cases_80_89 = 0;

        cases.forEach(item => {
            switch (item.AGEGROUP) {
                case '0-9':
                    cases_0_9 += item.CASES;
                    break;
                case '10-19':
                    cases_10_19 += item.CASES;
                    break;
                case '20-29':
                    cases_20_29 += item.CASES;
                    break;
                case '30-39':
                    cases_30_39 += item.CASES;
                    break;
                case '40-49':
                    cases_40_49 += item.CASES;
                    break;
                case '50-59':
                    cases_50_59 += item.CASES;
                    break;
                case '60-69':
                    cases_60_69 += item.CASES;
                    break;
                case '70-79':
                    cases_70_79 += item.CASES;
                    break;
                case '80-89':
                    cases_80_89 += item.CASES;
                    break;
            }
        })        

        return {cases_0_9,
                cases_10_19,
                cases_20_29,
                cases_30_39,
                cases_40_49,
                cases_50_59,
                cases_60_69,
                cases_70_79,
                cases_80_89};
}


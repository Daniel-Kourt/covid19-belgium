import React, { useState, useEffect, createContext } from 'react';
import { useAxios } from '../hooks/useAxios';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [casesData, casesError, casesLoading] = useAxios('COVID19BE_CASES_AGESEX.json');
    const [vaccData, vaccError, vaccLoading] = useAxios('COVID19BE_VACC.json');
    const [deathsData, deathsError, deathsLoading] = useAxios('COVID19BE_MORT.json');
    
    const [casesContext, setCasesContext] = useState(null);
    const [vaccinsContext, setVaccinsContext] = useState(null);
    const [deathsContext, setDeathsContext] = useState(null);
        
    useEffect(() => {

        if ( vaccError ) {
            setVaccinsContext( {
                error: true,
                message: "Please try again later"
            });
        }
        else {
            setVaccinsContext( vaccData );
        }
                
    }, [vaccLoading])

    useEffect(() => {
        setCasesContext( casesData );
    }, [casesLoading])

    useEffect(() => {
        setDeathsContext( deathsData );
    }, [deathsLoading])

    
    return (
        <DataContext.Provider value={{ vaccinsContext, casesContext, deathsContext }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider

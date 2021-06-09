import React, { useState, useEffect, createContext } from 'react';
import { useAxios } from '../hooks/useAxios';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [casesData, casesError, casesLoading] = useAxios('COVID19BE_CASES_AGESEX.json');
    const [vaccData, vaccError, vaccLoading] = useAxios('COVID19BE_VACC.json');
    
    const [casesContext, setCasesContext] = useState(null);
    const [vaccinsContext, setVaccinsContext] = useState(null);
    
    console.log(vaccinsContext);
    

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

    
    return (
        <DataContext.Provider value={{ vaccinsContext, casesContext }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider

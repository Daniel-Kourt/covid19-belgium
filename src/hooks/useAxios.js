import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://epistat.sciensano.be/Data/';

export const useAxios = (url) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (url) => {
      try {
        //console.log(url);
        const response = await axios.get(url);
        setResponse(response.data);
        //console.log(response.data);
      } 
      catch( error ) {
        setError(error);
      } 
      finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchData(url);
    }, []);

    return [response, error, loading];
};
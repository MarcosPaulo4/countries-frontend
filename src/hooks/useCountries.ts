 import { CountryType } from '@/app/countryInfo.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCountries = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true); 
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await axios.get<CountryType[]>(`${apiUrl}/countries`);
        setCountries(response.data);
      } catch{
        setError('Error fetching countries');
      } finally {
        setLoading(false); 
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useCountries;

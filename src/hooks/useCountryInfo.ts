import { CountryInfoType } from '@/app/countryInfo.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCountryInfo = (code: string) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfoType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        setLoading(true); 
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await axios.get<CountryInfoType>(`${apiUrl}/countries/${code}`);
        setCountryInfo(response.data);
      } catch (err) {
        setError('Error fetching country info.');
        console.error('Error fetching country info:', err);
      } finally {
        setLoading(false);
      }
    };

    if (code) {
      fetchCountryInfo();
    }
  }, [code]);

  return { countryInfo, loading, error };
};

export default useCountryInfo;

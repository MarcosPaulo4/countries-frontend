export interface PopulationCountType {
  year: number;
  value: number;
}

export interface BorderCountryType {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[] | null; 
}
export interface CountryInfoType {
  commonName: string;
  borders: BorderCountryType[];
  population: PopulationDataPointType[];
  flag: string;
}

export interface PopulationDataPointType {
  year: number;        
  value: number;  
}

export interface CountryType {
  countryCode: string;
  name: string;
}

export interface CountryPageParamsType {
  code: string;
}
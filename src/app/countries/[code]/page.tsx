import CountryInfo from "@/app/components/countryInfo";
import { CountryPageParamsType } from "@/app/countryInfo.interface";



const CountryPage = ({ params }: { params: CountryPageParamsType }) => {
  const { code } = params;


  return <CountryInfo code={code} />
};

export default CountryPage;

import {
    CountryType
  } from "src/definition/interfaces"
  
//------------------------------
//---Countries
//------------------------------
export const SaveCountry = async (country: CountryType): Promise<void> => {
}

//------------------------------
export const GetCountries = async (): Promise<CountryType[]> => {
  const countries: CountryType[] = [
    {
        name: "Australia",
        code: "AU",
        currency: "Australian Dollar",
        currencyCode: "AUD",
        phoneCode: "+61",
        phoneType: "4xx xxx xxx",
    },
    {
        name: "Canada",
        code: "CA",
        currency: "Canadian Dollar",
        currencyCode: "CAD",
        phoneCode: "+1",
        phoneType: "xxx xxx xxxx",
    },
    {
        name: "Enited Arab Emirates",
        code: "AE",
        currency: "UAE Dirham",
        currencyCode: "AED",
        phoneCode: "+971",
        phoneType: "5xx xxx xxxx",
    },
    {
        name: "Iran",
        code: "IR",
        currency: "Iranian Rial",
        currencyCode: "IRR",
        phoneCode: "+98",
        phoneType: "9xx xxx xxxx",
    },
    {
        name: "Turkey",
        code: "TR",
        currency: "Turkish Lira",
        currencyCode: "TRL",
        phoneCode: "+90",
        phoneType: "5xx xxx xxxx",
    },
    {
        name: "United States",
        code: "US",
        currency: "United States Dollar",
        currencyCode: "USD",
        phoneCode: "+1",
        phoneType: "5xx xxx xxxx",
    }
  ]
  return countries
}

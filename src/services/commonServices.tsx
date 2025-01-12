import {
    CountryType,
    StateListType,
    CountryListType
  } from "src/definition/interfaces"
  
//------------------------------
//---Countries
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

//------------------------------
//---States
//------------------------------
export const GetStates = async (country: string): Promise<[]> => {
    const allStates: StateListType[] = [
        {
            country: "Australia",
            states: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"]
        },
        {
            country: "Canada",
            states: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Quebec", "Saskatchewan"]
        },
        {
            country: "Emirates",
            states: ["Abu Dhabi", "Dubai", "Sharjah", "Umm Al-Quwain"]
        },
        {
            country: "Iran",
            states: ["Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Chahar Mahall va Bakhtiari", "Khorasan-e Jonubi", "Khorasan-e Razavi", "Khorasan-e Shomali", "Semnan"]
        }
    ]

    const filteredStates = allStates.filter((states) => states.country === country)
    return filteredStates
}

//------------------------------
//---Cities
//------------------------------
export const GetCities = async (country: string, state: string): Promise<[]> => {
    const allCities: CountryListType[] = [
        {
            country: "Australia",
            states: [
                {
                    state: "New South Wales",
                    cities: ["Sydney", "Newcastle", "Wollongong", "Canberra"]
                },
                {
                    state: "Queensland",
                    cities: ["Brisbane", "Gold Coast", "Townsville"]
                },
                {
                    state: "South Australia",
                    cities: ["Adelaide", "Hobart", "Mount Gambier"]
                },
                {
                    state: "Tasmania",
                    cities: ["Hobart", "Launceston", "Devonport"]
                },
                {
                    state: "Victoria",
                    cities: ["Melbourne", "Bendigo", "Geelong"]
                },
                {
                    state: "Western Australia",
                    cities: ["Perth", "Alice Springs", "Darwin"]
                }
            ]
        },
        {
            country: "Iran",
            states: [
                {
                    state: "Azarbayjan-e Gharbi",
                    cities: ["Tehran", "Mashhad", "Isfahan"]
                },
                {
                    state: "Azarbayjan-e Sharqi",
                    cities: ["Tabriz", "Yazd", "Qom"]
                },
                {
                    state: "Chahar Mahall va Bakhtiari",
                    cities: ["Shiraz", "Kerman", "Zahedan"]
                },
                {
                    state: "Khorasan-e Jonubi",
                    cities: ["Mashhad", "Tabriz", "Yazd"]
                },
                {
                    state: "Khorasan-e Razavi",
                    cities: ["Tehran", "Mashhad", "Isfahan"]
                },
                {
                    state: "Khorasan-e Shomali",
                    cities: ["Tabriz", "Yazd", "Qom"]
                },
                {
                    state: "Semnan",
                    cities: ["Shiraz", "Kerman", "Zahedan"]
                }
            ]
        }
    ]

    const filteredStates = allCities.filter((states) => states.country === country)
    const filteredCities = filteredStates[0].states.filter((cities) => cities.state === state)
    return filteredCities
}
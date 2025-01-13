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
//---Suburbs
//------------------------------
export const GetSuburbs = async (country: string, state: string): Promise<[]> => {
    const allSuburbs: CountryListType[] = [
        {
            country: "Australia",
            states: [
                {
                    state: "New South Wales",
                    suburbs: ["Sydney", "Newcastle", "Wollongong", "Canberra"]
                },
                {
                    state: "Queensland",
                    suburbs: ["Brisbane", "Gold Coast", "Townsville"]
                },
                {
                    state: "South Australia",
                    suburbs: ["Adelaide", "Hobart", "Mount Gambier"]
                },
                {
                    state: "Tasmania",
                    suburbs: ["Hobart", "Launceston", "Devonport"]
                },
                {
                    state: "Victoria",
                    suburbs: ["Melbourne", "Bendigo", "Geelong"]
                },
                {
                    state: "Western Australia",
                    suburbs: ["Perth", "Alice Springs", "Darwin"]
                }
            ]
        },
        {
            country: "Iran",
            states: [
                {
                    state: "Azarbayjan-e Gharbi",
                    suburbs: ["Tehran", "Mashhad", "Isfahan"]
                },
                {
                    state: "Azarbayjan-e Sharqi",
                    suburbs: ["Tabriz", "Yazd", "Qom"]
                },
                {
                    state: "Chahar Mahall va Bakhtiari",
                    suburbs: ["Shiraz", "Kerman", "Zahedan"]
                },
                {
                    state: "Khorasan-e Jonubi",
                    suburbs: ["Mashhad", "Tabriz", "Yazd"]
                },
                {
                    state: "Khorasan-e Razavi",
                    suburbs: ["Tehran", "Mashhad", "Isfahan"]
                },
                {
                    state: "Khorasan-e Shomali",
                    suburbs: ["Tabriz", "Yazd", "Qom"]
                },
                {
                    state: "Semnan",
                    suburbs: ["Shiraz", "Kerman", "Zahedan"]
                }
            ]
        }
    ]

    const filteredStates = allSuburbs.filter((states) => states.country === country)
    const filteredSuburbs = filteredStates[0].states.filter((suburbs) => suburbs.state === state)
    return filteredSuburbs
}
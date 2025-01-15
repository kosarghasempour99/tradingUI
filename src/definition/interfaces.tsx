interface CountryType {
  name: string
  code: string
  currency: string
  currencyCode: string
  phoneCode: string
  phoneType: string
}

//------------------------------
interface StateListType {
  country: string
  states: []
}

//------------------------------
interface CityListType {
  state: string
  cities: []
}

//------------------------------
interface CountryListType {
  country: string
  states: CityListType[]
}

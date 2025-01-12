interface CountryType {
  name: string
  code: string
  currency: string
  currencyCode: string
  phoneCode: string
  mobileType: string
  mobileLength: number
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

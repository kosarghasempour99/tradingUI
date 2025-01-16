interface UserProps {
    userCode: string
    name: string
    email: string
    access: string
    token: string
  }

//------------------------------
interface AddressType {
  country: string
  state: string
  suburb: string
  zipCode: number
  address: string
}

//------------------------------
interface ExtraAddressType {
  countryCode: string
  country: string
  phoneCode: string
  phone: string
  state: string
  suburb: string
  zipCode: number
  address: string
}

//------------------------------
interface CustomerType {
  userCode: string
  firstName: string
  middleName: string
  lastName: string
  country: string
  phoneCode: string
  phone: string
  email: string
  address: AddressType
  extraAddress: ExtraAddressType[]
  kvc: string
  credit: number
  description: string
}


interface UserProps {
    user_code: string
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
interface CustomerType {
  user_code: string
  firstName: string
  middleName: string
  lastName: string
  country: string
  phone_code: string
  phone: string
  email: string
  address: AddressType[]
  kvc: string
  credit: number
  description: string
}


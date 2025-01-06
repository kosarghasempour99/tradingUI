//------------------------------User Props
interface UserProps {
    user_code: string
    name: string
    email: string
    access: string
    token: string
  }

//------------------------------Customer
interface CustomerType {
  user_code: string
  name: string
  country: string
  phone: string
  email: string
  kvc: string
  credit: number
  description: string
}

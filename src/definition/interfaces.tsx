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

//------------------------------Rate
interface PairType {
  audirr: number
  irraud: number
}

interface RateType {
  pair: string
  rate: number
}

interface MarginType {
  pair: string
  margin: number
}

interface SpecialRateType {
  amount: number
  over: number
  rate: number
}

interface CompetitorType {
  name: string
  audirr: number
  irraud: number
}

interface OrdersBalanceType {
  currency: string
  balance: number
  urgent: number
}

interface AssetBalanceType {
  currency: string
  balance: number
}

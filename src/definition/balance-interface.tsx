interface OrdersBalanceType {
    currency: string
    balance: number
    urgent: number
  }

//------------------------------
interface AssetBalanceType {
    currency: string
    melbourne: number
    sydney: number
    tehran: number
  }

//------------------------------
interface BranchBalanceType {
    melbourne: number
    sydney: number
    tehran: number
  }

//------------------------------
interface BranchShowBalanceType {
  branch: string
  balance: number
}

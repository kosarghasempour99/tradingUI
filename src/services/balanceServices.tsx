import {
    OrdersBalanceType,
    AssetBalanceType
  } from "src/definition/interfaces"
   
  //------------------------------
  //---Orders Balance
  //------------------------------
  export const GetOrdersBalance = async (): Promise<OrdersBalanceType[]> => {
    const ordersBalance: OrdersBalanceType[] = [
      {
        currency: "AUD",
        balance: 243279,
        urgent: 89000
      },
      {
        currency: "IRR",
        balance: 45789250000,
        urgent: 10000000000
      }
    ]
    return ordersBalance
  }
  
  //------------------------------
  //---Asset Balance
  //------------------------------
  export const GetAssetBalance = async (): Promise<AssetBalanceType[]> => {
    const assetBalance: AssetBalanceType[] = [
      {
        currency: "AUD",
        melbourne: 26000,
        sydney: 40000,
        tehran: 0
      },
      {
        currency: "AED",
        melbourne: 0,
        sydney: 0,
        tehran: 270300
      },
      {
        currency: "EUR",
        melbourne: 1000,
        sydney: 2000,
        tehran: 15000
      },
      {
        currency: "USD",
        melbourne: 15000,
        sydney: 20000,
        tehran: 35000
      },
    ]
    return assetBalance
  }
  
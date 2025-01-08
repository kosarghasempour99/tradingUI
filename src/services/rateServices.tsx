import {
  RateType,
  MarginType,
  SpecilaRateType,
  CompetitorsType
} from "src/definition/interfaces"

//------------------------------
//---IRR Rate
//------------------------------
export const SaveIrrRates = async (pair: string, rate: number): Promise<void> => {
}

//------------------------------
export const GetIrrRates = async (): Promise<RateType[]> => {
  const rates: RateType[] = [
    {
      pair: "AUDIRR",
      rate: 500000
    },
    {
      pair: "IRRAUD",
      rate: 520000
    },
    {
      pair: "IRRAED",
      rate: 210000
    },
    {
      pair: "AEDIRR",
      rate: 200000
    },
    {
      pair: "IRRUSD",
      rate: 810000
    },
    {
      pair: "USDIRR",
      rate: 200000
    }
  ]
  return rates
}

//------------------------------
//---AUD Margins
//------------------------------
export const SaveAudMargin = async (pair: string, margin: number): Promise<void> => {
}

//------------------------------
export const GetAudMargin = async (): Promise<MarginType[]> => {
  const margins: MarginType[] = [
    {
      pair: "AUDAED",
      rate: 0.02
    },
    {
      pair: "AEDAUD",
      rate: 0.02
    },
    {
      pair: "AUDUSD",
      rate: 0.02
    },
    {
      pair: "USDAUD",
      rate: 0.02
    }
  ]
  return margins  
}

//------------------------------
//---Special Rate
//------------------------------
export const SaveSpecialRates = async (specials:SpecilaRateType[], pair: string): Promise<void> => {
}

//------------------------------
export const GetSpecialRates = async (pair: string): Promise<SpecilaRateType[]> => {
  const specialsAudIrr: SpecialType[] = [
    {
      amount: 20000,
      over: 900,
      rate: 51100
    },
    {
      amount: 10000,
      over: 700,
      rate: 51300
    }   
  ]
  const specialsIrrAUD: SpecialType[] = [
    {
      amount: 2000,
      over: 900,
      rate: 50900
    },
    {
      amount: 3000,
      over: 700,
      rate: 50700
    }   
  ]

  if (pair === "AUDIRR") return specialsAudIrr
  else return specialsIrrAUD
}


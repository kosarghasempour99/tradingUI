import {
  RateType,
  MarginType,
  SpecialRateType,
  CompetitorType
} from "src/definition/interfaces"

//------------------------------
//---IRR Rates
//------------------------------
export const SaveIrrRate = async (pair: string, rate: number): Promise<void> => {
}

//------------------------------
export const GetIrrRates = async (): Promise<RateType[]> => {
  const rates: RateType[] = [
    { pair: "AUDIRR", rate: 500000 },
    { pair: "IRRAUD", rate: 520000 },

    { pair: "IRRAED", rate: 210000 },
    { pair: "AEDIRR", rate: 200000 },

    { pair: "IRRCAD", rate: 550000 },
    { pair: "CADIRR", rate: 560000 },

    { pair: "IRREUR", rate: 910000 },
    { pair: "EURIRR", rate: 900000 },

    { pair: "IRRTRL", rate: 190000 },
    { pair: "TRLIRR", rate: 180000 },

    { pair: "IRRUSD", rate: 810000 },
    { pair: "USDIRR", rate: 200000 }
  ]
  return rates
}

//------------------------------
//---AUD Rates
//------------------------------
export const SaveAudRate = async (pair: string, rate: number): Promise<void> => {
}

//------------------------------
export const GetAudRates = async (): Promise<RateType[]> => {
  const rates: RateType[] = [
    { pair: "AUDAED", rate: 2.29 },
    { pair: "AUDCAD", rate: 0.893 },
    { pair: "AUDEUR", rate: 0.6022 },
    { pair: "AUDUSD", rate: 0.6214 }
  ]
  return rates  
}

//------------------------------
//---AUD Margins
//------------------------------
export const SaveAudMargin = async (pair: string, margin: number): Promise<void> => {
}

//------------------------------
export const GetAudMargins = async (): Promise<MarginType[]> => {
  const margins: MarginType[] = [
    { pair: "AUDAED", margin: 0.02 },
    { pair: "AUDCAD", margin: 0.02 },
    { pair: "AUDEUR", margin: 0.02 },
    { pair: "AUDUSD", margin: 0.02 }
  ]
  return margins  
}

//------------------------------
//---Special Rates
//------------------------------
export const SaveSpecialRates = async (specials:SpecialRateType[], pair: string): Promise<void> => {
}

//------------------------------
export const GetSpecialRates = async (pair: string): Promise<SpecialRateType[]> => {
  const specialsAudIrr: SpecialRateType[] = [
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
  const specialsIrrAUD: SpecialRateType[] = [
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

//------------------------------
//---Competitors Rates
//------------------------------
export const SaveCompetitorsRate = async (name: string, rate: RateType): Promise<void> => {
}

//------------------------------
export const GetCompetitorsRates = async (): Promise<CompetitorType[]> => {
  const competitorsRates: CompetitorType[] = [
    {
      name: "MuneyMex",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Rosecap",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Seyhoon",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Javadi",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Express",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Kangroos",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Roomi",
      audirr: 500000,
      irraud: 520000
    },
    {
      name: "Afshar",
      audirr: 500000,
      irraud: 520000
    }
  ]
  return competitorsRates
}


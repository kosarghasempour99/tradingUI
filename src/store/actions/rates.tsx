


import { createAction } from "@reduxjs/toolkit"

import { RateInterface } from "src/definition/interfaces"

//---Update Days
export const updateDays = createAction<RateInterface>("updateDays")

//---Update AUD Rates
export const updateaudirrRate = createAction<RateInterface>("audRates/audirrRate")
export const updateirraudRate = createAction<RateInterface>("audRates/irraudRate")

export const updateaudaedRate = createAction<RateInterface>("audRates/audaedRate")
export const updateaedaudRate = createAction<RateInterface>("audRates/aedaudRate")
export const updateaudcadRate = createAction<RateInterface>("audRates/audcadRate")
export const updatecadaudRate = createAction<RateInterface>("audRates/cadaudRate")
export const updateaudeurRate = createAction<RateInterface>("audRates/audeurRate")
export const updateeuraudRate = createAction<RateInterface>("audRates/euraudRate")
export const updateaudusdRate = createAction<RateInterface>("audRates/audusdRate")
export const updateusdaudRate = createAction<RateInterface>("audRates/usdaudRate")

//---Update IRR Rates
export const updateaedirrRate = createAction<RateInterface>("irrRates/aedirrRate")
export const updateirraedRate = createAction<RateInterface>("irrRates/irraedRate")
export const updatecadirrRate = createAction<RateInterface>("irrRates/cadirrRate")
export const updateirrcadRate = createAction<RateInterface>("irrRates/irrcadRate")
export const updateeurirrRate = createAction<RateInterface>("irrRates/eurirrRate")
export const updateirreurRate = createAction<RateInterface>("irrRates/irreurRate")
export const updatetrlirrRate = createAction<RateInterface>("irrRates/trlirrRate")
export const updateirrtrlRate = createAction<RateInterface>("irrRates/irrtrlRate")
export const updateusdirrRate = createAction<RateInterface>("irrRates/usdirrRate")
export const updateirrusdRate = createAction<RateInterface>("irrRates/irrusdRate")

//---Update Special Rates
export const updateaudirrSpecial = createAction<RateInterface>("specialRats/audirrSpecial")
export const updateirraudSpecial = createAction<RateInterface>("specialRats/irraudSpecial")

//---Update Suggestion Rates
export const updateaudirrSell = createAction<RateInterface>("suggestionRates/audirrSell")
export const updateirraudSell = createAction<RateInterface>("suggestionRates/irraudSell")
export const updateaudirrAED = createAction<RateInterface>("suggestionRates/audirrAED")
export const updateirraudAED = createAction<RateInterface>("suggestionRates/irraudAED")
export const updateaudirrMarket = createAction<RateInterface>("suggestionRates/audirrMarket")
export const updateirraudMarket = createAction<RateInterface>("suggestionRates/irraudMarket")

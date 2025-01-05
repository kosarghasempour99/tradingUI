import { createReducer } from "@reduxjs/toolkit"

import * as actions from "../actions/rates"

//------------------------------
const AUD_RATES = "audRates/"
const IRR_RATES = "irrRates/"
const SPECIAL_RATS = "specialRats/"
const SUGGESTION_RATES = "suggestionRates/"

//------------------------------
//---Initial State
//------------------------------
const initialState = {
    days: 2,

    audRates:{
        audirrRate: 0,
        irraudRate: 0,
        audaedRate: 0,
        aedaudRate: 0,
        audcadRate: 0,
        cadaudRate: 0,
        audeurRate: 0,
        euraudRate: 0,
        audusdRate: 0,
        usdaudRate: 0,

        audirrSpecial: [],
        irraudSpecial: []
    },
    
    irrRates:{
        aedirrRate: 0,
        irraedRate: 0,
        cadirrRate: 0,
        irrcadRate: 0,
        eurirrRate: 0,
        irreurRate: 0,
        trlirrRate: 0,
        irrtrlRate: 0,
        usdirrRate: 0,
        irrusdRate: 0
    },

    suggestionRates:{
        audirrSell: 0,
        irraudBuy: 0,
        audirrAED: 0,
        irraudAED: 0,
        audirrMarket: 0,
        irraudMarket: 0
    }
}

//------------------------------
const UpdateHandler = (prefix, targetKey, action) => {
    if (action.type.startsWith(prefix)) {
        const key = action.type.split("/")[1]
        if (key in targetKey) {
            targetKey[key] = action.payload
        }
    }
}

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateDays, (state, action) => { state.days = action.payload })

        .addMatcher((action) => action.type.startsWith(AUD_RATES),
            (state, action) => UpdateHandler(AUD_RATES, state.audRates, action))

        .addMatcher((action) => action.type.startsWith(IRR_RATES),
            (state, action) => UpdateHandler(IRR_RATES, state.irrRates, action))

        .addMatcher((action) => action.type.startsWith(SUGGESTION_RATES),
            (state, action) => UpdateHandler(SUGGESTION_RATES, state.suggestionRates, action))
})

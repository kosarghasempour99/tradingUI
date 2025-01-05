import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState }      from "react"
import { Helmet }   from "react-helmet"

import { InputNumber }    from "antd"

import { FormatNumber } from "src/components/common/format"
import { CustomBox }    from "src/components/core/CustomBox"
import { Benefit }      from "src/definition/domain"

import { SpecialRate }  from "./special"
import { RateHeader }   from "./header"

import { AppDispatch, RootState }   from "src/store"
import {
    updateaudirrRate, updateirraudRate,

    updateaudaedRate, updateaedaudRate,
    updateaudcadRate, updatecadaudRate,
    updateaudeurRate, updateeuraudRate,
    updateaudusdRate, updateusdaudRate,

    updateaedirrRate, updateirraedRate,
    updatecadirrRate, updateirrcadRate,
    updateeurirrRate, updateirreurRate,
    updatetrlirrRate, updateirrtrlRate,
    updateusdirrRate, updateirrusdRate,

    updateaudirrSpecial, updateirraudSpecial,

    updateaudirrSell, updateirraudSell,
    updateaudirrAED, updateirraudAED,
    updateaudirrMarket, updateirraudMarket
}   from "src/store/actions/rates"

import {
    RowContainer,
    BoxContainer,
    BoxHeader,
    YellowLine,
    BoxContent,
    Header,
    Title,
    Content
} from "../style"

//------------------------------
interface SpecilaRateType {
    amount: number
    over: number
  }

//------------------------------
//---Rate
//------------------------------
export const Rate = () => {
    const dispatch = useDispatch<AppDispatch>()
    //---State
    const rate = useSelector((state: RootState) => state.rates)
    const competitor = useSelector((state: RootState) => state.competitors)

    //---Rate
    const [audirrRate, setAudirrRate] = useState(rate.audRates.audirrRate)
    const [irraudRate, setIrraudRate] = useState(rate.audRates.irraudRate)

    const [audaedRate, setAudaedRate] = useState(rate.audRates.audaedRate)
    const [aedaudRate, setAedaudRate] = useState(rate.audRates.aedaudRate)
    const [audcadRate, setAudcadRate] = useState(rate.audRates.audcadRate)
    const [cadaudRate, setCadaudRate] = useState(rate.audRates.cadaudRate)
    const [audeurRate, setAudeurRate] = useState(rate.audRates.audeurRate)
    const [euraudRate, setEuraudRate] = useState(rate.audRates.euraudRate)
    const [audusdRate, setAudusdRate] = useState(rate.audRates.audusdRate)
    const [usdaudRate, setUsdaudRate] = useState(rate.audRates.usdaudRate)

    const [aedirrRate, setAedirrRate] = useState(rate.irrRates.aedirrRate)
    const [irraedRate, setIrraedRate] = useState(rate.irrRates.irraedRate)
    const [cadirrRate, setCadirrRate] = useState(rate.irrRates.cadirrRate)
    const [irrcadRate, setIrrcadRate] = useState(rate.irrRates.irrcadRate)
    const [eurirrRate, setEurirrRate] = useState(rate.irrRates.eurirrRate)
    const [irreurRate, setIrreurRate] = useState(rate.irrRates.irreurRate)
    const [trlirrRate, setTrlirrRate] = useState(rate.irrRates.trlirrRate)
    const [irrtrlRate, setIrrtrlRate] = useState(rate.irrRates.irrtrlRate)
    const [usdirrRate, setUsdirrRate] = useState(rate.irrRates.usdirrRate)
    const [irrusdRate, setIrrusdRate] = useState(rate.irrRates.irrusdRate)

    //---Special Rates
    const [audirrSpecial, setAudirrSpecial] = useState<SpecilaRateType[]>(rate.audRates.audirrSpecial)
    const [irraudSpecial, setIrraudSpecial] = useState<SpecilaRateType[]>(rate.audRates.irraudSpecial)

    //---Suggestion
    const [audirrSell, setAudirrSell] = useState(rate.suggestionRates.audirrSell)
    const [irraudBuy, setIrraudBuy] = useState(rate.suggestionRates.irraudBuy)
    const [audirrAED, setAudirrAED] = useState(rate.suggestionRates.audirrAED)
    const [irraudAED, setIrraudAED] = useState(rate.suggestionRates.irraudAED)
    const [audirrMarket, setAudirrMarket] = useState(rate.suggestionRates.audirrMarket)
    const [irraudMarket, setIrraudMarket] = useState(rate.suggestionRates.irraudMarket)

    //---Competitors
    const [audirrMax, setAudirrMax] = useState(competitor.competitorsRate.audirrMax)
    const [irraudMin, setIrraudMin] = useState(competitor.competitorsRate.irraudMin)

    //------------------------------
    //---Rates Handler
    //------------------------------
    const audirrHandler = (e) => {dispatch(updateaudirrRate(audirrRate))}
    const irraudHandler = (e) => {dispatch(updateirraudRate(irraudRate))}

    const audaedHandler = (e) => {dispatch(updateaudaedRate(audaedRate))}
    const aedaudHandler = (e) => {dispatch(updateaedaudRate(aedaudRate))}
    const audcadHandler = (e) => {dispatch(updateaudcadRate(audcadRate))}
    const cadaudHandler = (e) => {dispatch(updatecadaudRate(cadaudRate))}
    const audeurHandler = (e) => {dispatch(updateaudeurRate(audeurRate))}
    const euraudHandler = (e) => {dispatch(updateeuraudRate(euraudRate))}
    const audusdHandler = (e) => {dispatch(updateaudusdRate(audusdRate))}
    const usdaudHandler = (e) => {dispatch(updateusdaudRate(usdaudRate))}

    const aedirrHandler = (e) => {dispatch(updateaedirrRate(aedirrRate))}
    const irraedHandler = (e) => {dispatch(updateirraedRate(irraedRate))}
    const cadirrHandler = (e) => {dispatch(updatecadirrRate(cadirrRate))}
    const irrcadHandler = (e) => {dispatch(updateirrcadRate(irrcadRate))}
    const eurirrHandler = (e) => {dispatch(updateeurirrRate(eurirrRate))}
    const irreurHandler = (e) => {dispatch(updateirreurRate(irreurRate))}
    const trlirrHandler = (e) => {dispatch(updatetrlirrRate(trlirrRate))}
    const irrtrlHandler = (e) => {dispatch(updateirrtrlRate(irrtrlRate))}
    const usdirrHandler = (e) => {dispatch(updateusdirrRate(usdirrRate))}
    const irrusdHandler = (e) => {dispatch(updateirrusdRate(irrusdRate))}
    
    //------------------------------
    //---Suggestions Rates
    //------------------------------
    useEffect(() => {
        const max = audirrMax <= 0 ? 0 : (audirrMax + Benefit.Market)
        const min = irraudMin <= 0 ? 0 : irraudMin
        setAudirrMarket(Math.round(max/1000)*1000)
        setIrraudMarket(Math.round(min/1000)*1000)

        dispatch(updateaudirrMarket(audirrMarket))
        dispatch(updateirraudMarket(irraudMarket))
    })

    useEffect(() => {
        const sell = audirrRate * (1 - Benefit.AUDIRR)
        const buy = irraudRate * (1 + Benefit.IRRAUD)
        setAudirrSell(Math.round(sell/1000)*1000)
        setIrraudBuy(Math.round(buy/1000)*1000)

        dispatch(updateaudirrSell(audirrSell))
        dispatch(updateirraudSell(irraudBuy))
    }, [audirrRate, irraudRate])

    useEffect(() => {
        const audaed = audaedRate * irraedRate
        const aedaud = aedaudRate * aedirrRate
        setAudirrAED(Math.round(audaed/1000)*1000)
        setIrraudAED(Math.round(aedaud/1000)*1000)

        dispatch(updateaudirrAED(audirrAED))
        dispatch(updateirraudAED(irraudAED))
    }, [aedaudRate, audaedRate, aedirrRate, irraedRate])

    //------------------------------
    //---Special Rates
    //------------------------------
    const audirrSpecialHandler = (data: {amount: number, over: number}) => {
        const specialRate = data.map(({ amount, over }) => ({ amount, over }))
        console.log("specialRate: ", specialRate)
        setAudirrSpecial(specialRate)
        console.log("audirrSpecial: ", audirrSpecial)
        dispatch(updateaudirrSpecial(audirrSpecial))

        //------------------------------
        //---Save AUD/IRR Special Rates
        //------------------------------

    }

    const irraudSpecialHandler = (data: {amount: number, over: number}) => {
        const specialRate = data.map(({ amount, over }) => ({ amount, over }))
        setIrraudSpecial(specialRate)
        dispatch(updateirraudSpecial(irraudSpecial))

        //------------------------------
        //---Save IRR/AUD Special Rates
        //------------------------------

    }

    //------------------------------
    return (
        <>
            <Helmet>
                <title>Rate</title>
            </Helmet>
            <div>
                <RateHeader />
        {/* ---Body */}
                <RowContainer>
                    <CustomBox>
        {/* ---AUD / IRR Rate */}
                        <BoxContainer style={{width: "32vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>AUD / IRR</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "10vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            Rate
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audirrRate,0)}
                                            onChange={(value)=>{
                                                setAudirrRate(value)
                                            }}
                                            onKeyDown={audirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
            {/* ---AUD / IRR Rate Suggestion */}
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw", marginTop: "2vw"}}>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>Based on Market</Title>
                                    <Content>{FormatNumber(audirrMarket,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>Based on Sell</Title>
                                    <Content>{FormatNumber(audirrSell,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title>Based on AED</Title>
                                    <Content>{FormatNumber(audirrAED,0)}</Content>
                                </BoxContent>

                                <BoxHeader style={{width: "15vw", marginLeft: "1vw", marginTop: "4vw"}}>
                                    <YellowLine>
                                        <Header>Special Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <SpecialRate
                                    onChange={audirrSpecialHandler}
                                    data={audirrSpecial}
                                />
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                    <CustomBox>
        {/* ---IRR / AUD Rate */}
                        <BoxContainer style={{width: "32vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>IRR / AUD</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "10vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            Rate
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irraudRate,0)}
                                            onChange={(value)=>{
                                                setIrraudRate(value)
                                            }}
                                            onKeyDown={irraudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
            {/* ---IRR / AUD Rate Suggestion */}
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw", marginTop: "2vw"}}>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>Based on Market</Title>
                                    <Content>{FormatNumber(irraudMarket,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>Based on Buy</Title>
                                    <Content>{FormatNumber(irraudBuy,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title>Based on AED</Title>
                                    <Content>{FormatNumber(irraudAED,0)}</Content>
                                </BoxContent>

                                <BoxHeader style={{width: "15vw", marginLeft: "1vw", marginTop: "4vw"}}>
                                    <YellowLine>
                                        <Header>Special Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <SpecialRate
                                    onChange={irraudSpecialHandler}
                                    data={irraudSpecial}
                                />
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                    <CustomBox>
        {/* ---AUD Rates */}
                        <BoxContainer style={{width: "27vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>AUD Rates</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / AED
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audaedRate)}
                                            onChange={(value)=>{
                                                setAudaedRate(value)
                                            }}
                                            onKeyDown={audaedHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(aedaudRate)}
                                            onChange={(value)=>{
                                                setAedaudRate(value)
                                            }}
                                            onKeyDown={aedaudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / CAD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audcadRate)}
                                            onChange={(value)=>{
                                                setAudcadRate(value)
                                            }}
                                            onKeyDown={audcadHandler}
                                        />
                                   </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(cadaudRate)}
                                            onChange={(value)=>{
                                                setCadaudRate(value)
                                            }}
                                            onKeyDown={cadaudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / EUR
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audeurRate)}
                                            onChange={(value)=>{
                                                setAudeurRate(value)
                                            }}
                                            onKeyDown={audeurHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(euraudRate)}
                                            onChange={(value)=>{
                                                setEuraudRate(value)
                                            }}
                                            onKeyDown={euraudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / USD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audusdRate)}
                                            onChange={(value)=>{
                                                setAudusdRate(value)
                                            }}
                                            onKeyDown={audusdHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(usdaudRate)}
                                            onChange={(value)=>{
                                                setUsdaudRate(value)
                                            }}
                                            onKeyDown={usdaudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
        {/* ---IRR Rates */}
                         <BoxContainer style={{width: "27vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>IRR Rates</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / AED
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irraedRate,0)}
                                            onChange={(value)=>{
                                                setIrraedRate(value)
                                            }}
                                            onKeyDown={irraedHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(aedirrRate,0)}
                                            onChange={(value)=>{
                                                setAedirrRate(value)
                                            }}
                                            onKeyDown={aedirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / CAD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irrcadRate,0)}
                                            onChange={(value)=>{
                                                setIrrcadRate(value)
                                            }}
                                            onKeyDown={irrcadHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(cadirrRate,0)}
                                            onChange={(value)=>{
                                                setCadirrRate(value)
                                            }}
                                            onKeyDown={cadirrHandler}
                                        />
                                   </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / EUR
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irreurRate,0)}
                                            onChange={(value)=>{
                                                setIrreurRate(value)
                                            }}
                                            onKeyDown={irreurHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(eurirrRate,0)}
                                            onChange={(value)=>{
                                                setEurirrRate(value)
                                            }}
                                            onKeyDown={eurirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / TRL
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irrtrlRate,0)}
                                            onChange={(value)=>{
                                                setIrrtrlRate(value)
                                            }}
                                            onKeyDown={irrtrlHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(trlirrRate,0)}
                                            onChange={(value)=>{
                                                setTrlirrRate(value)
                                            }}
                                            onKeyDown={trlirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / USD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irrusdRate,0)}
                                            onChange={(value)=>{
                                                setIrrusdRate(value)
                                            }}
                                            onKeyDown={irrusdHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(usdirrRate,0)}
                                            onChange={(value)=>{
                                                setUsdirrRate(value)
                                            }}
                                            onKeyDown={usdirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                </RowContainer>
            </div>
        </>
    )
}

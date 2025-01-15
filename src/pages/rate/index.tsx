import { useEffect, useState }      from "react"
import { Helmet }   from "react-helmet"

import { InputNumber }    from "antd"

import { SpecialRateTable } from "src/components/core/Table/specialTable"
import { FormatNumber }     from "src/components/common/format"
import { CustomBox }        from "src/components/core/CustomBox"
import { Benefit }          from "src/definition/domain"

import { RateHeader }   from "./header"

import {
    SaveIrrRate,
    GetIrrRates,
    SaveAudRate,
    GetAudRates,
    SaveAudMargin,
    GetAudMargins,
    SaveSpecialRates,
    GetSpecialRates,
    GetCompetitorsRates
}  from "src/services/rateServices"

import {
    RateType,
    MarginType,
    SpecilaRateType,
    CompetitorType
  } from "src/definition/rate-interfaces"
  
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
//---Rate
//------------------------------
export const Rate = () => {
    //---IRR Rate
    const [audirrRate, setAudirrRate] = useState<number>(0)
    const [irraudRate, setIrraudRate] = useState<number>(0)

    const [aedirrRate, setAedirrRate] = useState<number>(0)
    const [irraedRate, setIrraedRate] = useState<number>(0)
    const [cadirrRate, setCadirrRate] = useState<number>(0)
    const [irrcadRate, setIrrcadRate] = useState<number>(0)
    const [eurirrRate, setEurirrRate] = useState<number>(0)
    const [irreurRate, setIrreurRate] = useState<number>(0)
    const [trlirrRate, setTrlirrRate] = useState<number>(0)
    const [irrtrlRate, setIrrtrlRate] = useState<number>(0)
    const [usdirrRate, setUsdirrRate] = useState<number>(0)
    const [irrusdRate, setIrrusdRate] = useState<number>(0)

    //---AUD Rates
    const [audaedRate, setAudaedRate] = useState<number>(0)
    const [audcadRate, setAudcadRate] = useState<number>(0)
    const [audeurRate, setAudeurRate] = useState<number>(0)
    const [audusdRate, setAudusdRate] = useState<number>(0)

    //---AUD Margin
    const [audaedMargin, setAudaedMargin] = useState<number>(0)
    const [audcadMargin, setAudcadMargin] = useState<number>(0)
    const [audeurMargin, setAudeurMargin] = useState<number>(0)
    const [audusdMargin, setAudusdMargin] = useState<number>(0)

    //---Special Rates
    const [audirrSpecial, setAudirrSpecial] = useState<SpecilaRateType[]>([])
    const [audirrSpecialData, setAudirrSpecialData] = useState([])
    const [irraudSpecial, setIrraudSpecial] = useState<SpecilaRateType[]>([])
    const [irraudSpecialData, setIrraudSpecialData] = useState([])

    //---Suggestion
    const [audirrSell, setAudirrSell] = useState<number>(0)
    const [irraudBuy, setIrraudBuy] = useState<number>(0)
    const [audirrAED, setAudirrAED] = useState<number>(0)
    const [irraudAED, setIrraudAED] = useState<number>(0)
    const [audirrMarket, setAudirrMarket] = useState<number>(0)
    const [irraudMarket, setIrraudMarket] = useState<number>(0)

    //------------------------------
    //---Initiate
    //------------------------------
    //---IRR Rates
    const irrRatesInitiate = async () => {
        try {
            const irrRates: RateType[] = await GetIrrRates()
            irrRates.forEach((rate) => {
                switch (rate.pair) {
                    case "AUDIRR":
                        setAudirrRate(rate.rate)
                        break
                    case "IRRAUD":
                        setIrraudRate(rate.rate)
                        break
                    case "AEDIRR":
                        setAedirrRate(rate.rate)
                        break
                    case "IRRAED":
                        setIrraedRate(rate.rate)
                        break
                    case "CADIRR":
                        setCadirrRate(rate.rate)
                        break
                    case "IRRCAD":
                        setIrrcadRate(rate.rate)
                        break
                    case "EURIRR":
                        setEurirrRate(rate.rate)
                        break
                    case "IRREUR":
                        setIrreurRate(rate.rate)
                        break
                    case "TRLIRR":
                        setTrlirrRate(rate.rate)
                        break
                    case "IRRTRL":
                        setIrrtrlRate(rate.rate)
                        break
                    case "USDIRR":
                        setUsdirrRate(rate.rate)
                        break
                    case "IRRUSD":
                        setIrrusdRate(rate.rate)
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching rates:', error)
        }
    }

    //---AUD Rates
    const audRatesInitiate = async () => {
        try {
            const irrRates: RateType[] = await GetAudRates()
            irrRates.forEach((rate) => {
                switch (rate.pair) {
                    case "AUDAED":
                        setAudaedRate(rate.rate)
                        break
                    case "AUDCAD":
                        setAudcadRate(rate.rate)
                        break
                    case "AUDEUR":
                        setAudeurRate(rate.rate)
                        break
                    case "AUDUSD":
                        setAudusdRate(rate.rate)
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching Rates:', error)
        }
    }

    //---AUD Margins
    const audMarginsInitiate = async () => {
        try {
            const irrRates: MarginType[] = await GetAudMargins()
            irrRates.forEach((margin) => {
                switch (margin.pair) {
                    case "AUDAED":
                        setAudaedMargin(margin.margin)
                        break
                    case "AUDCAD":
                        setAudcadMargin(margin.margin)
                        break
                    case "AUDEUR":
                        setAudeurMargin(margin.margin)
                        break
                    case "AUDUSD":
                        setAudusdMargin(margin.margin)
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching margins:', error)
        }
    }

    //---Competitors Rates
    const competitorsInitiate = async () => {
        try {
            const competitorsRates: CompetitorType[] = await GetCompetitorsRates()
            const audirrMax = Math.max(...competitorsRates.map(c => c.audirr))

            const nonZeroList = competitorsRates.filter(c => c.irraud > 0)
            const irraudMin = Math.min(...nonZeroList.map(c => c.irraud)) 
            
            const max = audirrMax <= 0 ? 0 : (audirrMax + Benefit.Market)
            const min = irraudMin <= 0 ? 0 : irraudMin
            setAudirrMarket(Math.round(max/1000)*1000)
            setIrraudMarket(Math.round(min/1000)*1000)
        } catch (error) {
          console.error('Error fetching competitors:', error)
        }
    }

    //---Special Rates
    const SpecialRatesInitiate = async () => {
        try {
            const specialRates: SpecialRateType[] = await GetSpecialRates("AUDIRR")
            setAudirrSpecial(specialRates)

            const irraudSpecialRates: SpecialRateType[] = await GetSpecialRates("IRRAUD")
            setIrraudSpecial(irraudSpecialRates)
        } catch (error) {
          console.error('Error fetching special rates:', error)
        }
    }

    //------------------------------
    useEffect(() => {
        irrRatesInitiate()
        audRatesInitiate()
        audMarginsInitiate()
        competitorsInitiate()
        SpecialRatesInitiate()
    }, [])

    //---Average Rates
    useEffect(() => {
        setAudirrSpecial(audirrSpecial.sort((a, b) => b.amount - a.amount))
    }, [audirrSpecial])

    //---Suggestions Rates
    useEffect(() => {
        const buy = audirrRate * (1 + Benefit.AUDIRR)
        const sell = irraudRate * (1 - Benefit.IRRAUD)
        setAudirrSell(Math.round(sell/1000)*1000)
        setIrraudBuy(Math.round(buy/1000)*1000)
    }, [audirrRate, irraudRate])

    useEffect(() => {
        const audaed = (audaedRate * (1 + audaedMargin)) * irraedRate
        const aedaud = (audaedRate * (1 + audaedMargin)) * aedirrRate
        setAudirrAED(Math.round(audaed/1000)*1000)
        setIrraudAED(Math.round(aedaud/1000)*1000)

    }, [audaedRate, audaedMargin, aedirrRate, irraedRate])

    //---Special Rates
    useEffect(() => {
        const audirrSpecialRate = audirrSpecial.map(({ amount, over }) => ({ amount, over }))
        const irraudSpecialRate = irraudSpecial.map(({ amount, over }) => ({ amount, over }))
        setAudirrSpecialData(audirrSpecialRate)
        setIrraudSpecialData(irraudSpecialRate)
    }, [audirrSpecial, irraudSpecial])

    //------------------------------
    //---IRR Rates Handler
    //------------------------------
    const irrRatesHandler = async (pair: string, rate: number) => {
        try {
            await SaveIrrRate(pair, rate)
        } catch (error) {
          console.error('Error saving rates:', error)
        }
    }

    const audirrHandler = () => {irrRatesHandler("AUDIRR", audirrRate)}
    const irraudHandler = () => {irrRatesHandler("IRRAUD", irraudRate)}
    const aedirrHandler = () => {irrRatesHandler("AEDIRR", aedirrRate)}
    const irraedHandler = () => {irrRatesHandler("IRRAED", irraedRate)}
    const cadirrHandler = () => {irrRatesHandler("CADIRR", cadirrRate)}
    const irrcadHandler = () => {irrRatesHandler("IRRCAD", irrcadRate)}
    const eurirrHandler = () => {irrRatesHandler("EURIRR", eurirrRate)}
    const irreurHandler = () => {irrRatesHandler("IRREUR", irreurRate)}
    const trlirrHandler = () => {irrRatesHandler("TRLIRR", trlirrRate)}
    const irrtrlHandler = () => {irrRatesHandler("IRRTRL", irrtrlRate)}
    const usdirrHandler = () => {irrRatesHandler("USDIRR", usdirrRate)}
    const irrusdHandler = () => {irrRatesHandler("IRRUSD", irrusdRate)}

    //------------------------------
    //---AUD Rates Handler
    //------------------------------
    const audRatesHandler = async (pair: string, rate: number) => {
        try {
            await SaveAudRate(pair, rate)
        } catch (error) {
          console.error('Error saving rates', error)
        }
    }

    const aedRateHandler = () => {audRatesHandler("AEDAED", audaedRate)}
    const cadRateHandler = () => {audRatesHandler("AUDCAD", audcadRate)}
    const eurRateHandler = () => {audRatesHandler("AUDEUR", audeurRate)}
    const usdRateHandler = () => {audRatesHandler("AUDUSD", audusdRate)}

    //------------------------------
    //---AUD Margins Handler
    //------------------------------
    const audMarginsHandler = async (pair: string, margin: number) => {
        try {
            await SaveAudMargin(pair, margin)
        } catch (error) {
          console.error('Error saving margins', error)
        }
    }

    const aedMarginHandler = () => {audMarginsHandler("AEDAED", audaedMargin)}
    const cadMarginHandler = () => {audMarginsHandler("AUDCAD", audcadMargin)}
    const eurMarginHandler = () => {audMarginsHandler("AUDEUR", audeurMargin)}
    const usdMarginHandler = () => {audMarginsHandler("AUDUSD", audusdMargin)}
    
    //------------------------------
    //---Special Rates Handler
    //------------------------------
    const audirrSpecialHandler = (data: {amount: number, over: number}) => {
        const specialRate = data.map((item) => ({
            ...item,
            rate: audirrRate + Item.over
        }))
        setAudirrSpecial(specialRate)
        SaveSpecialRates(audirrSpecial, "AUDIRR")
    }

    const irraudSpecialHandler = (data: {amount: number, over: number}) => {
        const specialRate = data.map((item) => ({
            ...item,
            rate: irraudRate - Item.over
        }))
        setIrraudSpecial(specialRate)
        SaveSpecialRates(irraudSpecial, "IRRAUD")
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
                                                if (/^\d+$/.test(value))
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
            {/* ---AUD / IRR Special Rates */}
                                <BoxHeader style={{width: "25vw", marginLeft: "1vw", marginTop: "4vw"}}>
                                    <YellowLine>
                                        <Header>Special Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <SpecialRateTable
                                    data={audirrSpecialData}
                                    onChange={audirrSpecialHandler}
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
            {/* ---IRR / AUD Special Rates */}
                                <BoxHeader style={{width: "25vw", marginLeft: "1vw", marginTop: "4vw"}}>
                                    <YellowLine>
                                        <Header>Special Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <SpecialRateTable
                                    data={irraudSpecialData}
                                    onChange={irraudSpecialHandler}
                                />
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                    <CustomBox>
        {/* ---AUD Rates */}
                        <BoxContainer style={{width: "27vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "14vw", marginLeft: "7vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header style={{width: "7vw"}}>Rates</Header>
                                    </YellowLine>
                                    <YellowLine>
                                        <Header style={{width: "5vw"}}>Margin</Header>
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
                                            value={audaedRate}
                                            onChange={(value)=>{
                                                setAudaedRate(value)
                                            }}
                                            onKeyDown={aedRateHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "5vw"}}
                                            min={0}
                                            value={audaedMargin}
                                            onChange={(value)=>{
                                                setAudaedMargin(value)
                                            }}
                                            onKeyDown={aedMarginHandler}
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
                                            value={audcadRate}
                                            onChange={(value)=>{
                                                setAudcadRate(value)
                                            }}
                                            onKeyDown={cadRateHandler}
                                        />
                                   </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "5vw"}}
                                            min={0}
                                            value={audcadMargin}
                                            onChange={(value)=>{
                                                setAudcadMargin(value)
                                            }}
                                            onKeyDown={cadMarginHandler}
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
                                            value={audeurRate}
                                            onChange={(value)=>{
                                                setAudeurRate(value)
                                            }}
                                            onKeyDown={eurRateHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "5vw"}}
                                            min={0}
                                            value={audeurMargin}
                                            onChange={(value)=>{
                                                setAudeurMargin(value)
                                            }}
                                            onKeyDown={eurMarginHandler}
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
                                            value={audusdRate}
                                            onChange={(value)=>{
                                                setAudusdRate(value)
                                            }}
                                            onKeyDown={usdRateHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "5vw"}}
                                            min={0}
                                            value={audusdMargin}
                                            onChange={(value)=>{
                                                setAudusdMargin(value)
                                            }}
                                            onKeyDown={usdMarginHandler}
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

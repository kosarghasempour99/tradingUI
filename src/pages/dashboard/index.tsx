import { useEffect, useState }      from "react"
import { Scanning } from "iconsax-react"
import { Helmet }   from "react-helmet"

import { InputNumber, Input }    from "antd"

import { FormatNumber } from "src/components/common/format"
import { CustomBox }    from "src/components/core/CustomBox"
import { PieChart }     from "src/components/core/chart/PieChart"
import { Color }        from "src/definition/color"
import { SpecialRate }  from "./special"

import { BalanceModal } from "./modal"

import {
    GetAverageRate,
    GetIrrRates,
    GetAudRates,
    GetAudMargins,
    GetSpecialRates,
    SaveCompetitorsRate,
    GetCompetitorsRates
}  from "src/services/rateServices"

import {
    GetOrdersBalance,
    GetAssetBalance
}  from "src/services/balanceServices"

import {
    PairType,
    RateType,
    MarginType,
    SpecilaRateType,
    CompetitorType
} from "src/definition/rate-interfaces"
  
import {
    OrdersBalanceType,
    AssetBalanceType,
    BranchBalanceType,
    BranchShowBalanceType
} from "src/definition/balance-interfaces"
  
import {
    RowContainer,
    BoxTop,
    BoxTitle,
    BoxSide,
    BoxContainer,
    BoxName,
    BoxHeader,
    YellowLine,
    BoxContent,
    Name,
    Header,
    Title,
    Content,
} from "./style"

//------------------------------
//---Dashboard
//------------------------------
export const Dashboard = () => {
    //---Balance
    const [audReceiveBalance, setAudReceiveBalance] = useState<number>(0)
    const [audUrgentBalance, setAudUrgentBalance] = useState<number>(0)
    const [irrReceiveBalance, setIrrReceiveBalance] = useState<number>(0)
    const [irrUrgentBalance, setIrrUrgentBalance] = useState<number>(0)

    const [audBalance, setAudBalance] = useState<number>(0)
    const [audBranchBalance, setAudBranchBalance] = useState<BranchBalanceType>([])
    const [audBranchDetail, setAudBranchDetail] = useState<BranchShowBalanceType>([])

    const [aedBalance, setAedBalance] = useState<number>(0)
    const [aedBranchBalance, setAedBranchBalance] = useState<BranchBalanceType>([])
    const [aedBranchDetail, setAedBranchDetail] = useState<BranchShowBalanceType>([])

    const [eurBalance, setEurBalance] = useState<number>(0)
    const [eurBranchBalance, setEurBranchBalance] = useState<BranchBalanceType>([])
    const [eurBranchDetail, setEurBranchDetail] = useState<BranchShowBalanceType>([])

    const [usdBalance, setUsdBalance] = useState<number>(0)
    const [usdBranchBalance, setUsdBranchBalance] = useState<BranchBalanceType>([])
    const [usdBranchDetail, setUsdBranchDetail] = useState<BranchShowBalanceType>([])

    const [equalAUDBalance, setEqualAUDBalance] = useState<number>(0)
    const [availableAED, setAvailableAED] = useState<number>(0)

    const [balances, setBalances] = useState([])
    const audColor = Color.BLUE
    const aedColor = Color.GREEN
    const eurColor = Color.YELLOW
    const usdColor = Color.RED_LIGHT
    const customColors = [audColor, aedColor, eurColor, usdColor]


    //---Average Rates
    const [days, setDays] = useState<number>(2)
    const [audirrAverage, setAudirrAverage] = useState(0)
    const [irraudAverage, setIrraudAverage] = useState(0)

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

    //---AUD Margin
    const [audaedMargin, setAudaedMargin] = useState<number>(0)
    const [audcadMargin, setAudcadMargin] = useState<number>(0)
    const [audeurMargin, setAudeurMargin] = useState<number>(0)
    const [audusdMargin, setAudusdMargin] = useState<number>(0)

    //---AUD Rates
    const [audaedRate, setAudaedRate] = useState<number>(0)
    const [aedaudRate, setAedaudRate] = useState<number>(0)
    const [audcadRate, setAudcadRate] = useState<number>(0)
    const [cadaudRate, setCadaudRate] = useState<number>(0)
    const [audeurRate, setAudeurRate] = useState<number>(0)
    const [euraudRate, setEuraudRate] = useState<number>(0)
    const [audusdRate, setAudusdRate] = useState<number>(0)
    const [usdaudRate, setUsdaudRate] = useState<number>(0)

    //---Special Rates
    const [audirrSpecial, setAudirrSpecial] = useState<SpecilaRateType[]>([])
    const [irraudSpecial, setIrraudSpecial] = useState<SpecilaRateType[]>([])

    //---Competitors
    const [audirrMoneyMex, setAudirrMoneyMex] = useState<number>(0)
    const [irraudMoneyMex, setIrraudMoneyMex] = useState<number>(0)
    const [audirrRosecap, setAudirrRosecap] = useState<number>(0)
    const [irraudRosecap, setIrraudRosecap] = useState<number>(0)
    const [audirrSeyhoon, setAudirrSeyhoon] = useState<number>(0)
    const [irraudSeyhoon, setIrraudSeyhoon] = useState<number>(0)
    const [audirrJavadi, setAudirrJavadi] = useState<number>(0)
    const [irraudJavadi, setIrraudJavadi] = useState<number>(0)
    const [audirrExpress, setAudirrExpress] = useState<number>(0)
    const [irraudExpress, setIrraudExpress] = useState<number>(0)
    const [audirrKangroos, setAudirrKangroos] = useState<number>(0)
    const [irraudKangroos, setIrraudKangroos] = useState<number>(0)
    const [audirrRoomi, setAudirrRoomi] = useState<number>(0)
    const [irraudRoomi, setIrraudRoomi] = useState<number>(0)
    const [audirrAfshar, setAudirrAfshar] = useState<number>(0)
    const [irraudAfshar, setIrraudAfshar] = useState<number>(0)
   
    const [audirrMax, setAudirrMax] = useState<number>(0)
    const [irraudMin, setIrraudMin] = useState<number>(0)

    const [loading, setLoading] = useState(true)

    //------------------------------
    //---Initiate
    //------------------------------
    //---Orders Balance
    const ordersBalanceInitiate = async () => {
        try {
            const ordersbBalance: OrdersBalanceType[] = await GetOrdersBalance()
            ordersbBalance.forEach((balance) => {
                switch (balance.currency) {
                    case "AUD":
                        setAudReceiveBalance(balance.balance)
                        setAudUrgentBalance(balance.urgent)
                        break
                    case "IRR":
                        setIrrReceiveBalance(balance.balance)
                        setIrrUrgentBalance(balance.urgent)
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching rates:', error)
        } finally {
            setLoading(false)
        }
    }

    //---Asset Balance
    const assetBalanceInitiate = async () => {
        try {
            const assetBalance: AssetBalanceType[] = await GetAssetBalance()
            assetBalance.forEach((balance) => {
                switch (balance.currency) {
                    case "AUD":
                        const audBranch: BranchBalanceType = {
                            melbourne: balance.melbourne,
                            sydney: balance.sydney,
                            tehran: balance.tehran
                        }
                        setAudBranchBalance(audBranch)
                        break
                    case "AED":
                        const aedBranch: BranchBalanceType = {
                            melbourne: balance.melbourne,
                            sydney: balance.sydney,
                            tehran: balance.tehran
                        }
                        setAedBranchBalance(aedBranch)
                        break
                    case "EUR":
                        const eurBranch: BranchBalanceType = {
                            melbourne: balance.melbourne,
                            sydney: balance.sydney,
                            tehran: balance.tehran
                        }
                        setEurBranchBalance(eurBranch)
                        break
                    case "USD":
                        const usdBranch: BranchBalanceType = {
                            melbourne: balance.melbourne,
                            sydney: balance.sydney,
                            tehran: balance.tehran
                        }
                        setUsdBranchBalance(usdBranch)
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching rates:', error)
        } finally {
            setLoading(false)
        }
    }

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
        } finally {
            setLoading(false)
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
        } finally {
            setLoading(false)
        }
    }

    //---AUD Rates
    const audRatesInitiate = async () => {
        try {
            const irrRates: RateType[] = await GetAudRates()
            irrRates.forEach((rate) => {
                switch (rate.pair) {
                    case "AUDAED":
                        setAudaedRate(rate.rate * ( 1 - audaedMargin))
                        setAedaudRate(rate.rate * ( 1 + audaedMargin))
                        break
                    case "AUDCAD":
                        setAudcadRate(rate.rate * ( 1 - audcadMargin))
                        setCadaudRate(1 / (rate.rate * ( 1 + audcadMargin)))
                        break
                    case "AUDEUR":
                        setAudeurRate(rate.rate * ( 1 - audeurMargin))
                        setEuraudRate(1 / (rate.rate * ( 1 + audeurMargin)))
                        break
                    case "AUDUSD":
                        setAudusdRate(rate.rate * ( 1 - audusdMargin))
                        setUsdaudRate(1 / (rate.rate * ( 1 + audusdMargin)))
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching Rates:', error)
        } finally {
            setLoading(false)
        }
    }

    //---Special Rates
    const SpecialRatesInitiate = async () => {
        try {
            const audirrSpecialRates: SpecialRateType[] = await GetSpecialRates("AUDIRR")
            setAudirrSpecial(audirrSpecialRates)

            const irraudSpecialRates: SpecialRateType[] = await GetSpecialRates("IRRAUD")
            setIrraudSpecial(irraudSpecialRates)
        } catch (error) {
          console.error('Error fetching special rates:', error)
        } finally {
            setLoading(false)
        }
    }

    //---Competitor Rates
    const competitorRatesInitiate = async () => {
        try {
            const competitorRates: CompetitorType[] = await GetCompetitorsRates()
            competitorRates.forEach((competitor) => {
                switch (competitor.name) {
                    case "MoneyMex":
                        setAudirrMoneyMex(competitor.audirr)
                        setIrraudMoneyMex(competitor.irraud)
                        break
                    case "Rosecap":
                        setAudirrRosecap(competitor.audirr)
                        setIrraudRosecap(competitor.irraud)
                        break
                    case "Seyhoon":
                        setAudirrSeyhoon(competitor.audirr)
                        setIrraudSeyhoon(competitor.irraud)
                        break
                    case "Javadi":
                        setAudirrJavadi(competitor.audirr)
                        setIrraudJavadi(competitor.irraud)
                        break
                    case "Express":
                        setAudirrExpress(competitor.audirr)
                        setIrraudExpress(competitor.irraud)
                        break
                    case "Kangroos":
                        setAudirrKangroos(competitor.audirr)
                        setIrraudKangroos(competitor.irraud)
                        break
                    case "Roomi":
                        setAudirrRoomi(competitor.audirr)
                        setIrraudRoomi(competitor.irraud)
                        break
                    case "Afshar":
                        setAudirrAfshar(competitor.audirr)
                        setIrraudAfshar(competitor.irraud)
                        break
                    default:
                    break
                }
              })        
        } catch (error) {
          console.error('Error fetching Rates:', error)
        } finally {
            setLoading(false)
        }
    }

    //------------------------------
    useEffect(() => {
        ordersBalanceInitiate()
        assetBalanceInitiate()
        irrRatesInitiate()
        audRatesInitiate()
        audMarginsInitiate()
        SpecialRatesInitiate()
        competitorRatesInitiate()
    }, [])

    //---Average Rates
    const AverageRateInitiate = async (days: number) => {
        try {
            const averageRates: PairType[] = await GetAverageRate(days)
            setAudirrAverage(averageRates.audirr)
            setIrraudAverage(averageRates.irraud)
        } catch (error) {
          console.error('Error fetching avereagre rates:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        AverageRateInitiate(days)
    }, [days])

    //---Balance
    useEffect(() => {
        const aud = audBranchBalance.melbourne + audBranchBalance.sydney + audBranchBalance.tehran
        const audDetail = [
            { branch: "Melbourne", balance: audBranchBalance.melbourne },
            { branch: "Sydney", balance: audBranchBalance.sydney },
            { branch: "Tehran", balance: audBranchBalance.tehran }
        ]
        const aed = aedBranchBalance.melbourne + aedBranchBalance.sydney + aedBranchBalance.tehran
        const aedDetail = [
            { branch: "Melbourne", balance: aedBranchBalance.melbourne },
            { branch: "Sydney", balance: aedBranchBalance.sydney },
            { branch: "Tehran", balance: aedBranchBalance.tehran }
        ]
        const eur = eurBranchBalance.melbourne + eurBranchBalance.sydney + eurBranchBalance.tehran
        const eurDetail = [
            { branch: "Melbourne", balance: eurBranchBalance.melbourne },
            { branch: "Sydney", balance: eurBranchBalance.sydney },
            { branch: "Tehran", balance: eurBranchBalance.tehran }
        ]
        const usd = usdBranchBalance.melbourne + usdBranchBalance.sydney + usdBranchBalance.tehran
        const usdDetail = [
            { branch: "Melbourne", balance: usdBranchBalance.melbourne },
            { branch: "Sydney", balance: usdBranchBalance.sydney },
            { branch: "Tehran", balance: usdBranchBalance.tehran }
        ]
        setAudBalance(aud)
        setAudBranchDetail(audDetail)
        setAedBalance(aed)
        setAedBranchDetail(aedDetail)
        setEurBalance(eur)
        setEurBranchDetail(eurDetail)
        setUsdBalance(usd)
        setUsdBranchDetail(usdDetail)
    }, [audBranchBalance, aedBranchBalance, eurBranchBalance, usdBranchBalance])

    useEffect(() => {
        const aud = audBalance + (aedBalance / aedaudRate) + (eurBalance * euraudRate) + (usdBalance / usdaudRate)
        setEqualAUDBalance(aud)
    }, [audBalance, aedBalance, eurBalance, usdBalance, aedaudRate, euraudRate, usdaudRate])

    useEffect(() => {
        const aed = aedBranchBalance.tehran
            + (usdBranchBalance.tehran / usdaudRate) * audaedRate
            + (eurBranchBalance.tehran / euraudRate) * audaedRate
        setAvailableAED(aed)
    }, [aedBranchBalance, , usdaudRate, euraudRate, audaedRate])

    //---Competitorm Max & Min Rates
    useEffect(() => {
        const audirrList = [audirrMoneyMex, audirrRosecap, audirrSeyhoon, audirrJavadi, audirrExpress, audirrKangroos, audirrRoomi, audirrAfshar]
        const audirrMax = Math.max(...audirrList)
        setAudirrMax(audirrMax)
    }, [audirrMoneyMex, audirrRosecap, audirrSeyhoon, audirrJavadi, audirrExpress, audirrKangroos, audirrRoomi, audirrAfshar])

    useEffect(() => {
        const irraudList = [irraudMoneyMex, irraudRosecap, irraudSeyhoon, irraudJavadi, irraudExpress, irraudKangroos, irraudRoomi, irraudAfshar]
        const nonZeroList = irraudList.filter(c => c > 0)
        const irraudMin = nonZeroList.length > 0 ? Math.min(...nonZeroList): 0
        setIrraudMin(irraudMin)
    }, [irraudMoneyMex, irraudRosecap, irraudSeyhoon, irraudJavadi, irraudExpress, irraudKangroos, irraudRoomi, irraudAfshar])

    //---Chart
    useEffect(() => {
        const currencies = [
            {x: "AUD", y: audBalance},
            {x: "AED", y: aedBalance},
            {x: "EUR", y: eurBalance},
            {x: "USD", y: usdBalance}
        ]
        setBalances(currencies)
    }, [audBalance, aedBalance, eurBalance, usdBalance])    

    //------------------------------
    //---Competitor Rates Handler
    //------------------------------
    const competitorsHandler = async (name: string, pair: string, rate: PairType) => {
        try {
            await SaveCompetitorsRate(name, pair, rate)
        } catch (error) {
          console.error('Error saving rates:', error)
        }
    }

    const audirrMoneyMexHandler = () => {competitorsHandler("MoneyMex", "AUDIRR", audirrMoneyMex)}
    const irraudMoneyMexHandler = () => {competitorsHandler("MoneyMex", "IRRAUD", irraudMoneyMex)}
    const audirrRosecapHandler = () => {competitorsHandler("Rosecap", "AUDIRR", audirrRosecap)}
    const irraudRosecapHandler = () => {competitorsHandler("Rosecap", "IRRAUD", irraudRosecap)}
    const audirrSeyhoonHandler = () => {competitorsHandler("Seyhoon", "AUDIRR", audirrSeyhoon)}
    const irraudSeyhoonHandler = () => {competitorsHandler("Seyhoon", "IRRAUD", irraudSeyhoon)}
    const audirrJavadiHandler = () => {competitorsHandler("Javadi", "AUDIRR", audirrJavadi)}
    const irraudJavadiHandler = () => {competitorsHandler("Javadi", "IRRAUD", irraudJavadi)}
    const audirrExpressHandler = () => {competitorsHandler("Express", "AUDIRR", audirrExpress)}
    const irraudExpressHandler = () => {competitorsHandler("Express", "IRRAUD", irraudExpress)}
    const audirrKangroosHandler = () => {competitorsHandler("Kangroos", "AUDIRR", audirrKangroos)}
    const irraudKangroosHandler = () => {competitorsHandler("Kangroos", "IRRAUD", irraudKangroos)}
    const audirrRoomiHandler = () => {competitorsHandler("Roomi", "AUDIRR", audirrRoomi)}
    const irraudRoomiHandler = () => {competitorsHandler("Roomi", "IRRAUD", irraudRoomi)}
    const audirrAfsharHandler = () => {competitorsHandler("Afshar", "AUDIRR", audirrAfshar)}
    const irraudAfsharHandler = () => {competitorsHandler("Afshar", "IRRAUD", irraudAfshar)}
    
    //------------------------------
    //---Show Modals
    //------------------------------
    const [audModalShow, setAudModalShow] = useState(false)
    const showAudModal = () => setAudModalShow(true)

    const [aedModalShow, setAedModalShow] = useState(false)
    const showAedModal = () => setAedModalShow(true)

    const [eurModalShow, setEurModalShow] = useState(false)
    const showEurModal = () => setEurModalShow(true)

    const [usdModalShow, setUsdModalShow] = useState(false)
    const showUsdModal = () => setUsdModalShow(true)

    //------------------------------
    return (
        <>
            <Helmet>
                <title>NeoEx</title>
            </Helmet>
            <div>
        {/* ---Title, Balance and Urgent */}
                <BoxTop>
                    <BoxTitle>
                        <BoxSide/>
                        <Scanning
                            size="20px"
                            color="#808080"
                        />                  
                        <Name>Dashboard</Name>
                    </BoxTitle>
                    <BoxContent style={{width: "40vw", marginTop: "10px",   justifyContent: "flex-start"}}>
                        <BoxName>
                            AUD Payment Balance: 
                        </BoxName>
                        <BoxName style={{ color: Color.RED}}>
                            ${FormatNumber(audReceiveBalance,2)}
                        </BoxName>
                    </BoxContent>
                    <BoxContent style={{width: "40vw", marginTop: "10px",   justifyContent: "flex-start"}}>
                        <BoxName>
                            IRR Payment Balance:
                        </BoxName>
                        <BoxName style={{ color: Color.RED}}>
                            {FormatNumber(irrReceiveBalance,0)}
                        </BoxName>
                    </BoxContent>
                </BoxTop>
                <BoxTop>
                    <BoxContent
                        style = {{
                            width: "40vw",
                            marginLeft: "20vw",
                            marginBottom: "1vw"
                        }}>
                        <BoxName style={{ color: Color.RED_LIGHT }}>
                            Urgent: ${FormatNumber(audUrgentBalance,2)}
                        </BoxName>
                    </BoxContent>
                    <BoxContent
                        style = {{
                            width: "40vw",
                            marginLeft: "10vw",
                            marginBottom: "1vw"
                        }}>
                        <BoxName style={{ color: Color.RED_LIGHT }}>
                            Urgent: {FormatNumber(irrUrgentBalance,0)}
                        </BoxName>
                    </BoxContent>
                </BoxTop>
                <BoxContainer style={{marginLeft: "1vw"}}/>
        {/* ---Body */}
                <RowContainer>
                    <CustomBox>
            {/* ---Assets */}
                        <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
                {/* ---Show Equal Balance */}
                            <CustomBox>
                                <BoxHeader style={{width: "10vw", marginLeft: "1vw"}}>
                                    <YellowLine>
                                        <Header>Assets</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <CustomBox>
                                        <Title>Equal AUD Balance</Title>
                                        <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED}}>
                                            {FormatNumber(equalAUDBalance,2)}
                                        </Content>
                                        <Title style={{marginTop: "2vw"}}>AED Available</Title>
                                        <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED}}>
                                            {FormatNumber(availableAED,2)}
                                        </Content>
                                    </CustomBox>
                                </BoxContent>
                                </CustomBox>
                {/* ---Show Chart */}
                            <CustomBox>
                                <BoxContent style={{width: "20vw", marginLeft: "5vw"}}>
                                    <PieChart
                                        data={balances}
                                        colors={customColors}
                                    />
                                </BoxContent>
                            </CustomBox>
                {/* ---Show Equal Balance */}
                            <CustomBox>
                                <BoxContent
                                    style={{width: "15vw", justifyContent: "flex-start",
                                        marginLeft: "1vw", marginTop: "1vw",
                                        cursor: "pointer"
                                    }}
                                    onClick={showAudModal}
                                >
                                    <div style={{ width: "10px", height: "10px", backgroundColor: audColor}}></div>
                                    <Title style={{width: "4vw", cursor: "pointer"}}>
                                        AUD
                                    </Title>
                                    <Content>
                                        {FormatNumber(audBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent
                                    style={{width: "15vw", justifyContent: "flex-start",
                                        marginLeft: "1vw", cursor: "pointer"
                                    }}
                                    onClick={showAedModal}
                                >
                                    <div style={{ width: "10px", height: "10px", backgroundColor: aedColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        AED
                                    </Title>
                                    <Content>
                                        {FormatNumber(aedBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent
                                    style={{width: "15vw", justifyContent: "flex-start",
                                        marginLeft: "1vw", cursor: "pointer"
                                    }}
                                    onClick={showEurModal}
                                >
                                    <div style={{ width: "10px", height: "10px", backgroundColor: eurColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        EUR
                                    </Title>
                                    <Content>
                                        {FormatNumber(eurBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent
                                    style={{width: "15vw", justifyContent: "flex-start",
                                        marginLeft: "1vw", cursor: "pointer"
                                    }}
                                    onClick={showUsdModal}
                                >
                                    <div style={{ width: "10px", height: "10px", backgroundColor: usdColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        USD
                                    </Title>
                                    <Content>
                                        {FormatNumber(usdBalance,2)}
                                    </Content>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>

        {/* ---Special rates */}
                        <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
                            <CustomBox>
                                <BoxName style={{marginTop: "2vw", marginBottom: "1vw"}}>
                                    Special rates
                                </BoxName>
                                <BoxContent style={{marginLeft: "1vw", marginTop: "1vw", marginBottom: "2vw"}}>
            {/* ---AUD / IRR Special rates */}
                                    <CustomBox>
                                        <BoxHeader style={{width: "20vw", marginLeft: "1vw"}}>
                                            <YellowLine>
                                                <Header style={{width: "5vw", fontSize: "12px"}}>
                                                    AUD / IRR
                                                </Header>
                                            </YellowLine>
                                        </BoxHeader>
                                        <BoxContent style={{marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                            <SpecialRate
                                                dataSource={audirrSpecial}
                                            />
                                        </BoxContent>
                                    </CustomBox>
            {/* ---IRR / AUD Special rates */}
                                    <CustomBox>
                                        <BoxHeader style={{width: "20vw", marginLeft: "5vw"}}>
                                            <YellowLine>
                                                <Header style={{width: "5vw", fontSize: "12px"}}>
                                                    IRR /AUD
                                                </Header>
                                            </YellowLine>
                                        </BoxHeader>
                                        <BoxContent style={{marginLeft: "5vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                            <SpecialRate
                                                dataSource={irraudSpecial}
                                            />
                                        </BoxContent>
                                    </CustomBox>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>

                    <CustomBox>
        {/* ---Rate */}
                        <BoxContainer style={{width: "36vw", marginRight: "1vw"}}>
            {/* ---Show Rates */}
                            <CustomBox>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                    <YellowLine>
                                        <Header>Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>AUD / IRR</Title>
                                    <Content style={{color: Color.RED_LIGHT, fontSize: "14px"}}>
                                        {FormatNumber(audirrRate,0)}
                                    </Content>
                                    <Content style={{color: Color.RED_LIGHT, fontSize: "14px"}}>
                                        {FormatNumber(irraudRate,0)}
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / AED</Title>
                                    <Content>{FormatNumber(audaedRate)}</Content>
                                    <Content>{FormatNumber(aedaudRate)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / CAD</Title>
                                    <Content>{FormatNumber(audcadRate)}</Content>
                                    <Content>{FormatNumber(cadaudRate)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / EUR</Title>
                                    <Content>{FormatNumber(audeurRate)}</Content>
                                    <Content>{FormatNumber(euraudRate)}</Content>
                                </BoxContent>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / USD</Title>
                                    <Content>{FormatNumber(audusdRate)}</Content>
                                    <Content>{FormatNumber(usdaudRate)}</Content>
                                </BoxHeader>

                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>AED / IRR</Title>
                                    <Content>{FormatNumber(aedirrRate,0)}</Content>
                                    <Content>{FormatNumber(irraedRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>CAD / IRR</Title>
                                    <Content>{FormatNumber(cadirrRate,0)}</Content>
                                    <Content>{FormatNumber(irrcadRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>EUR / IRR</Title>
                                    <Content>{FormatNumber(eurirrRate,0)}</Content>
                                    <Content>{FormatNumber(irreurRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>TRL / IRR</Title>
                                    <Content>{FormatNumber(trlirrRate,0)}</Content>
                                    <Content>{FormatNumber(irrtrlRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title>USD / IRR</Title>
                                    <Content>{FormatNumber(usdirrRate,0)}</Content>
                                    <Content>{FormatNumber(irrusdRate,0)}</Content>
                                </BoxContent>
                            </CustomBox>
            {/* ---Show Average Rates */}
                            <CustomBox>
                                <BoxHeader
                                    style={{
                                        width: "13vw",
                                        marginLeft: "1vw",
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <Title>For</Title>
                                    <InputNumber
                                        size = "small"
                                        variant="filled"
                                        style = {{
                                            width: "4vw", height: "1.5vw",
                                            marginLeft: "1vw",
                                            fontFamily: "Montserrat", fontWeight: "600",
                                        }}
                                        min={1}
                                        max={365}
                                        value={days}
                                        onChange={(value)=>{
                                            setDays(value)
                                        }}
                                    />
                                    <Title>days</Title>
                                </BoxHeader>
                                <BoxContent style={{width: "14vw", marginRight: "2vw"}}>
                                    <Title>Average AUD / IRR</Title>
                                    <Content>{audirrAverage?.toLocaleString("en-us")}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "14vw", marginRight: "2vw", marginBottom: "20vw"}}>
                                    <Title>Average IRR / AUD</Title>
                                    <Content>{irraudAverage?.toLocaleString("en-us")}</Content>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>

        {/* ---Competitors */}
                        <BoxContainer style={{width: "36vw", marginRight: "1vw"}}>
                            <CustomBox>
                                <BoxName style={{marginTop: "2vw", marginBottom: "1vw"}}>
                                    Competitors
                                </BoxName>
                                <BoxContent>
        {/* ---Show Competitors Rates */}
                                    <CustomBox>
                                        <BoxHeader style={{width: "13vw", marginLeft: "8vw"}}>
                                            <YellowLine>
                                                <Header style={{width: "5vw", fontSize: "12px"}}>
                                                    AUD / IRR
                                                </Header>
                                            </YellowLine>
                                            <YellowLine>
                                                <Header style={{width: "5vw", fontSize: "12px"}}>
                                                    IRR / AUD
                                                </Header>
                                            </YellowLine>
                                        </BoxHeader>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                MoneyMex
                                            </Title>
                                            <InputNumber
                                                size="small"
                                                variant="filled"
                                                min={0}
                                                value={FormatNumber(audirrMoneyMex,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrMoneyMex(value)
                                                }}
                                                onKeyDown={audirrMoneyMexHandler}
                                            />
                                            <InputNumber
                                                size="small"
                                                variant="filled"
                                                min={0}
                                                value={FormatNumber(irraudMoneyMex,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudMoneyMex(value)
                                                }}
                                                onKeyDown={irraudMoneyMexHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Rosecap
                                            </Title>
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrRosecap,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrRosecap(value)
                                                }}
                                                onKeyDown={audirrRosecapHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudRosecap,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudRosecap(value)
                                                }}
                                                onKeyDown={irraudRosecapHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Seyhoon
                                            </Title>
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrSeyhoon,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrSeyhoon(value)
                                                }}
                                                onKeyDown={audirrSeyhoonHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudSeyhoon,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudSeyhoon(value)
                                                }}
                                                onKeyDown={irraudSeyhoonHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Javadi
                                            </Title>
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrJavadi,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrJavadi(value)
                                                }}
                                                onKeyDown={audirrJavadiHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudJavadi,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudJavadi(value)
                                                }}
                                                onKeyDown={irraudJavadiHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Express
                                            </Title>
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrExpress,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrExpress(value)
                                                }}
                                                onKeyDown={audirrExpressHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudExpress,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudExpress(value)
                                                }}
                                                onKeyDown={irraudExpressHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Kangroos
                                            </Title>
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrKangroos,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrKangroos(value)
                                                }}
                                                onKeyDown={audirrKangroosHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudKangroos,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudKangroos(value)
                                                }}
                                                onKeyDown={irraudKangroosHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Roomi
                                            </Title>
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrRoomi,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrRoomi(value)
                                                }}
                                                onKeyDown={audirrRoomiHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudRoomi,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudRoomi(value)
                                                }}
                                                onKeyDown={irraudRoomiHandler}
                                            />
                                        </BoxContent>
                                        <BoxContent style={{width: "20vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                            <Title style={{width: "3vw"}}>
                                                Afshar
                                            </Title>
                                            <Input
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(audirrAfshar,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setAudirrAfshar(value)
                                                }}
                                                onKeyDown={audirrAfsharHandler}
                                            />
                                            <InputNumber
                                                variant="filled"
                                                size="small"
                                                min={0}
                                                value={FormatNumber(irraudAfshar,0)}
                                                style={{ width: "5vw" }}
                                                onChange={(value)=>{
                                                    setIrraudAfshar(value)
                                                }}
                                                onKeyDown={irraudAfsharHandler}
                                            />
                                        </BoxContent>
                                    </CustomBox>

            {/* ---Show Max Market Rates */}
                                    <CustomBox>
                                        <BoxContent
                                            style={{
                                                width: "15vw",
                                                marginLeft: "3vw",
                                                marginRight: "1vw",
                                                justifyContent: "flex-start"
                                            }}
                                        >
                                            <YellowLine>
                                                <Header style={{width: "5vw", fontSize: "10px"}}>
                                                    Max AUD / IRR
                                                </Header>
                                            </YellowLine>
                                                <Content style={{fontSize: "10px", marginLeft: "1vw"}}>
                                                    {audirrMax?.toLocaleString("en-us")}
                                                </Content>
                                        </BoxContent>
                                        <BoxContent
                                            style={{
                                                width: "15vw",
                                                marginLeft: "3vw",
                                                marginRight: "2vw",
                                                marginBottom: "10vw",
                                                justifyContent: "flex-start"
                                            }}
                                        >
                                            <Header style={{width: "5vw", fontSize: "10px"}}>
                                                Min IRR / AUD
                                            </Header>
                                            <Content style={{fontSize: "10px", marginLeft: "1vw"}}>
                                                {irraudMin?.toLocaleString("en-us")}
                                            </Content>
                                        </BoxContent>
                                    </CustomBox>
                                </BoxContent>                                
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                </RowContainer>

                <BalanceModal
                    title=" AUD Balances"
                    isVisible={audModalShow}
                    dataSource={audBranchDetail}
                    onOk={() => setAudModalShow(false)}
                />

                <BalanceModal
                    title=" AED Balances"
                    isVisible={aedModalShow}
                    dataSource={aedBranchDetail}
                    onOk={() => setAedModalShow(false)}
                />

                <BalanceModal
                    title=" EUR Balances"
                    isVisible={eurModalShow}
                    dataSource={eurBranchDetail}
                    onOk={() => setEurModalShow(false)}
                />

                <BalanceModal
                    title=" USD Balances"
                    isVisible={usdModalShow}
                    dataSource={usdBranchDetail}
                    onOk={() => setUsdModalShow(false)}
                />
            </div>
        </>
    )
}

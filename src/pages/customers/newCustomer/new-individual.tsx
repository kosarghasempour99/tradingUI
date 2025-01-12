import { useEffect, useState }      from "react"
import { useNavigate} from "react-router-dom"

import {
    DatePicker,
    Input,
    Select,
    Button
} from 'antd'

import { CustomBox }    from "src/components/core/CustomBox"

import {
    GetCountries
}  from "src/services/commonServices"

import { CountryType }  from "src/definition/customer-interfaces"
import { Color }        from "src/definition/color"

import {
    RowContainer,
    BoxContainer,
    BoxContent,
    Title
} from "../../style"

//------------------------------
//---New Individual Customer
//------------------------------
export const NewIndividual = () => {
    const navigate = useNavigate()

    //---General Information
    const [countries, setCountries] = useState<CountryType[]>([])
    const [countriesOptions, setCountriesOptions] = useState([])

    //---Personal Information
    const [country, setCountry] = useState<string>("")
    const [countryCode, setCountryCode] = useState<string>("")
    const [phoneCOde, setPhoneCode] = useState<string>("")
    const [phoneType, setPhoneType] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [middleName, setMiddleName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>()
    const [email, setEmail] = useState<string>("")

    //------------------------------
    //---Initiate
    //------------------------------
    //---Countries
    const countyriesInitiate = async () => {
        try {
            const initCountries: CountryType[] = await GetCountries()
            setCountries(initCountries)
        } catch (error) {
            console.error('Error fetching countries:', error)
        }
    }
    
    //------------------------------
    useEffect(() => {
        countyriesInitiate()
    }, [])

    //---COuntries Option
    useEffect(() => {
        const options = countries.map((country) => ({
            value: country.name,
            label: country.name
        }))
        setCountriesOptions(options)
    }, [countries])

    //------------------------------
    //---Country Handler
    //------------------------------
    const countryHandler = (value) => {
        const selectedCountry = countries.find((country) => country.name === value)
        setCountry(selectedCountry.name)
        setCountryCode(selectedCountry.code)
        setPhoneCode(selectedCountry.phoneCode)
        setPhoneType(selectedCountry.phoneType)
        }
    
    //------------------------------
    //---Email Handler
    //------------------------------
    const emailHandler = (value) => {
        const email = value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (emailRegex.test(email)) {
            setEmail(email)
        }
        else {
            setEmail("")
        }
    }

      //------------------------------
      //---Func Error Handling
      //------------------------------
      const errorHandler = () => {
        let error = false
        console.log(country, phoneCOde, phone, firstName, middleName, lastName, dateOfBirth, email)
      }
    
      const cancelHandler = () => {
        navigate("/new-order")
    }

    //------------------------------
    return (
        <div>
    {/* ---Body */}
            <RowContainer>
        {/* ---Side */}
                <CustomBox>
                    <Button
                        variant="solid"
                        size="large"
                        style={{
                            width: "8vw",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            fontWeight: "700",
                            color: Color.WHITE,
                            backgroundColor: Color.BLUE_DARK,
                            marginTop: "2vw",
                            cursor: "pointer",
                        }}
                        onClick={errorHandler}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="solid"
                        size="large"
                        style={{
                            width: "8vw",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            fontWeight: "700",
                            color: Color.BLUE_DARK,
                            backgroundColor: Color.WHITE,
                            marginTop: "1vw",
                            cursor: "pointer",
                        }}
                        onClick={cancelHandler}
                    >
                        Cancel
                    </Button>
                </CustomBox>
        {/* ---Information */}
                <CustomBox>
                    <RowContainer style={{width: "87vw"}}>
                        <BoxContainer style={{width: "30vw"}}>
                            <CustomBox>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Country:
                                    </Title>
                                    <Select
                                        showSearch
                                        placeholder="Countries..."
                                        optionFilterProp="label"
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={countriesOptions}
                                        style={{ width: "15vw" }}
                                        onChange={countryHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Mobile:
                                    </Title>
                                    <Input
                                        addonBefore={phoneCOde}
                                        placeholder={phoneType}
                                        value={phone}
                                        maxLength={10}
                                        style={{width: "15vw"}}
                                        onChange={(e) => {
                                            const input = e.target.value
                                            if (/^\d*$/.test(input)) {
                                                setPhone(input)
                                        }}}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        First Name:
                                    </Title>
                                    <Input
                                        placeholder="First Name"
                                        value={firstName}
                                        style={{width: "15vw"}}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Middle Name:
                                    </Title>
                                    <Input
                                        placeholder="Middle Name"
                                        value={middleName}
                                        style={{width: "15vw"}}
                                        onChange={(e) => setMiddleName(e.target.value)}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Last Name:
                                    </Title>
                                    <Input
                                        placeholder="Last Name"
                                        value={lastName}
                                        style={{width: "15vw"}}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Date of Birth:
                                    </Title>
                                    <DatePicker
                                        format="DD MMM YYYY"
                                        placeholder="Date of Birth"
                                        value={dateOfBirth}
                                        style={{width: "15vw"}}
                                        onChange={(date, dateString) => setDateOfBirth(dateString)}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Email:
                                    </Title>
                                    <Input
                                        placeholder="yourEmail@example.com"
                                        value={email}
                                        style={{width: "15vw"}}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={emailHandler}
                                    />
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                        <BoxContainer style={{width: "55vw", marginRight: "1vw"}}>
                            <p>01-2</p>
                        </BoxContainer>
                    </RowContainer>
                    <RowContainer style={{width: "87vw"}}>
                        <BoxContainer style={{width: "100%", marginRight: "1vw"}}>
                            <p>02</p>
                        </BoxContainer>
                    </RowContainer>
                </CustomBox>
            </RowContainer>
        </div>
    )
}

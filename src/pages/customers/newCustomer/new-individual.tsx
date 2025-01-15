import { useEffect, useState }      from "react"
import { useNavigate}   from "react-router-dom"
import moment          from "moment"

import { Edit }  from "iconsax-react"

import {
    DatePicker,
    Input,
    Select,
    Button
} from 'antd'

import { CustomBox }    from "src/components/core/CustomBox"
import { GetCountries }  from "src/services/commonServices"

import { AddressType, ExtraAddressType }  from "src/definition/customer-interfaces"
import { CountryType }  from "src/definition/interfaces"
import { Color }        from "src/definition/color"

import { ExtraAddressModal }    from "./modal/extra-address"
import { AddressModal }         from "./modal/address"

import {
    RowContainer,
    BoxContainer,
    BoxContent,
    Title,
    Content
} from "../../style"

//------------------------------
//---New Individual Customer
//------------------------------
export const NewIndividual = () => {
    const navigate = useNavigate()

    //---General Information
    const [countries, setCountries] = useState<CountryType[]>([])
    const [countriesOptions, setCountriesOptions] = useState([])
    const [countrySelectedOption, setCountrySelectedOption] = useState([])
    const [countriesInfo, setCountriesInfo] = useState([])

    //---Personal Information
    const [country, setCountry] = useState<string>("")
    const [countryCode, setCountryCode] = useState<string>("")
    const [phoneCode, setPhoneCode] = useState<string>("")
    const [phoneType, setPhoneType] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [middleName, setMiddleName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>()
    const [email, setEmail] = useState<string>("")

    const [address, setAddress] = useState<AddressType>()
    const [extraAddress, setExtraAddress] = useState<ExtraAddressType>([])
    
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

    //---Countries Option
    useEffect(() => {
        const options = countries.map((country) => ({
            value: country.code,
            label: country.name
        }))
        setCountriesOptions(options)

        const info = countries.map((country) => ({
            code: country.code,
            name: country.name,
            phoneCode: country.phoneCode,
            phoneType: country.phoneType
        }))
        setCountriesInfo(info)
    }, [countries])

    //---Phone Info
    useEffect(() => {
        const selectedCountry: CountryType = countries.find((item) => item.code === countryCode)
        setCountry(selectedCountry?.name)
        setPhoneCode(selectedCountry?.phoneCode)
        setPhoneType(selectedCountry?.phoneType)

        const selectedOption = {
            value: selectedCountry?.code,
            label: selectedCountry?.name
        }
        setCountrySelectedOption([selectedOption])
    },[countryCode])
    
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
      //---Error Handling
      //------------------------------
      const errorHandler = () => {
        let error = false
        navigate("/new-order")
      }
    
      const cancelHandler = () => {
        navigate("/new-order")
    }

    //------------------------------
    //---Show Modals
    //------------------------------
    const [addressModalShow, setAddressModalShow] = useState(false)
    const [extraAddressModalShow, setExtraAddressModalShow] = useState(false)

    const showAddressModal = () => setAddressModalShow(true)
    const showExtraAddressModal = () => setExtraAddressModalShow(true)

    const SaveAddress = (selectedAddress:{
        countryCode: string
        state: string
        suburb: string
        zipCode: string
        address: string
    }) => {
        const country = countries.find((item) => item.code === selectedAddress.countryCode)
        const newAddress: AddressType = {
            country: country.name,
            state: selectedAddress.state,
            suburb: selectedAddress.suburb,
            zipCode: selectedAddress.zipCode,
            address: selectedAddress.address
        }
        setAddress(newAddress)
        setAddressModalShow(false)
    }

    const SaveExtraAddress = (selectedAddress:{
        countryCode: string
        phoneCode: string
        phone: string
        state: string
        suburb: string
        zipCode: string
        address: string
    }) => {
        const country = countries.find((item) => item.code === selectedAddress.countryCode)
        const newAddress: ExtraAddressType = {
            country: country.name,
            phoneCode: country.phoneCode,
            phone: selectedAddress.phone,
            state: selectedAddress.state,
            suburb: selectedAddress.suburb,
            zipCode: selectedAddress.zipCode,
            address: selectedAddress.address
        }
        setExtraAddress((previewAddress) => [...previewAddress, newAddress])
        setExtraAddressModalShow(false)
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
                                        onChange={(value) => setCountryCode(value)}
                                    />
                                    <Title style={{marginLeft: "1vw", color: Color.RED, fontSize: "18px"}}>*</Title>
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Mobile:
                                    </Title>
                                    <Input
                                        addonBefore={phoneCode}
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
                                    <Title style={{marginLeft: "1vw", color: Color.RED, fontSize: "18px"}}>*</Title>
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
                                    <Title style={{marginLeft: "1vw", color: Color.RED, fontSize: "18px"}}>*</Title>
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
                                    <Title style={{marginLeft: "1vw", color: Color.WHITE, fontSize: "18px"}}>*</Title>
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
                                    <Title style={{marginLeft: "1vw", color: Color.RED, fontSize: "18px"}}>*</Title>
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", textAlign: "right", marginRight: "1vw"}}>
                                        Date of Birth:
                                    </Title>
                                    <DatePicker
                                        format="DD MMM YYYY"
                                        placeholder="DD MMM YYYY"
                                        value={dateOfBirth ? moment(dateOfBirth, "DD MMM YYYY") : null}
                                        style={{width: "15vw"}}
                                        onChange={(date, dateString) => setDateOfBirth(dateString)}
                                    />
                                    <Title style={{marginLeft: "1vw", color: Color.RED, fontSize: "18px"}}>*</Title>
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
                                    />
                                    <Title style={{marginLeft: "1vw", color: Color.WHITE, fontSize: "18px"}}>*</Title>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                        <BoxContainer style={{width: "55vw", marginRight: "1vw", flexDirection: "column", alignItems: "flex-start"}}>
                            <CustomBox>
                                <BoxContent style={{marginLeft: "1vw", marginTop: "1vw", justifyContent: "flex-start"}}>
                                    <Title style={{width: "6vw"}}>
                                        Address
                                    </Title>
                                    <Content style={{color: Color.RED, fontSize: "20px", cursor: "pointer"}}
                                        onClick={showAddressModal}
                                    >
                                        +
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{ marginLeft: "1vw", display: "flex", alignItems: "center", gap: "1vw" }}>
                                    {address ? (
                                        <>
                                        <Edit size="20" color={Color.RED} title="Edit Address" style={{ cursor: "pointer" }} 
                                            onClick={showAddressModal}
                                        />
                                        <Content>
                                            {address.address}, {address.suburb}, {address.state} {address.zipCode}, {address.country}
                                        </Content>
                                        </>
                                    ) : (
                                        <Title>No addresses available...</Title>
                                    )}
                                </BoxContent>
                                <BoxContent style={{marginLeft: "1vw", marginTop: "3vw", justifyContent: "flex-start"}}>
                                    <Title style={{width: "8vw"}}>
                                        Extra Address
                                    </Title>
                                    <Content style={{color: Color.RED, fontSize: "20px", cursor: "pointer"}}
                                        onClick={showExtraAddressModal}
                                    >
                                        +
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{ marginLeft: "1vw", display: "flex", alignItems: "center", gap: "1vw" }}>
                                    <CustomBox>
                                        {extraAddress.length > 0 ? (
                                            extraAddress.map((address, index) => (
                                                <BoxContent key={index}>    
                                                    <Edit size="20" color={Color.RED} title="Edit Address" style={{ cursor: "pointer" }} 
                                                        onClick={showExtraAddressModal}
                                                    />
                                                    <Content style={{marginLeft: "1vw"}}>
                                                        {address.address}, {address.suburb}, {address.state} {address.zipCode}, {address.country},
                                                        ({address.phoneCode}) {address.phone}
                                                    </Content>
                                                </BoxContent>
                                        ))
                                        ) : (
                                            <Title>No extra addresses available...</Title>
                                        )}
                                    </CustomBox>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </RowContainer>
                    <RowContainer style={{width: "87vw"}}>
                        <BoxContainer style={{width: "100%", marginRight: "1vw", flexDirection: "column", alignItems: "flex-start"}}>
                        <CustomBox>
                                <BoxContent style={{marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title style={{width: "6vw", color: Color.BLUE_DARK}}>
                                        Document
                                    </Title>
                                    <Content style={{color: Color.RED, fontSize: "20px"}}>
                                        +
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{marginLeft: "1vw"}}>
                                    <Title>
                                        No documents uploaded...
                                    </Title>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </RowContainer>
                </CustomBox>
            </RowContainer>

            <AddressModal
                isVisible={addressModalShow}
                countriesOptions={countrySelectedOption}
                onSave={SaveAddress}
                onCancel={() => setAddressModalShow(false)}
            />

            <ExtraAddressModal
                isVisible={extraAddressModalShow}
                countriesInfo={countriesInfo}
                onSave={SaveExtraAddress}
                onCancel={() => setExtraAddressModalShow(false)}
            />
        </div>
    )
}

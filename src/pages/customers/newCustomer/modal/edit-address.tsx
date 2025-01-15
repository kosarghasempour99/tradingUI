import React, { useState, useEffect }  from 'react'

import {
    Modal,
    Button,
    Input,
    Select
} from 'antd'

import { GetStates, GetSuburbs } from "src/services/commonServices"

import { CustomBox }    from "src/components/core/CustomBox"
import { CountryType }  from "src/definition/customer-interfaces"
import { Color }        from "src/definition/color"

import {
    BoxContent,
    BoxHeader,
    YellowLine,
    Header,
    Title
} from "../../../style"

//------------------------------
interface CustomModalProps {
    isVisible: boolean
    centered?: boolean
    countriesOptions: CountryType[]
    country_code: string
    current_state: string
    current_suburb: string
    current_zipCode: string
    current_address: string
    onSave: () => void
    onCancel: () => void
    onDel: () => void
}

//------------------------------
//---Edit Address Modal
//------------------------------
export const EditAddressModal: React.FC<CustomModalProps> = ({
    isVisible,
    centered = false,
    countriesOptions = [],
    country_code,
    current_state,
    current_suburb,
    current_zipCode,
    current_address,
    onSave,
    onCancel,
    onDel
}) => {
    const [countryCode, setCountryCode] = useState("")
    const [state, setState] = useState("")
    const [suburb, setSuburb] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [address, setAddress] = useState("")

    const [stateOptions, setStateOptions] = useState<{ label: string; value: string }[]>([])
    const [suburbOptions, setSuburbOptions] = useState<{ label: string; value: string }[]>([])
  
    //------------------------------
    //---Options Handler
    //------------------------------
    useEffect(() => {
        setCountryCode(country_code)
        setState(current_state)
        setSuburb(current_suburb)
        setZipCode(current_zipCode)
        setAddress(current_address)
    },[isVisible])

    //---States Option
    const statesInitiate = async (Code: string) => {
        try {
            const states: string[] = await GetStates(Code)
            const options = states.map((state) => ({
                value: state,
                label: state
            }))
            setStateOptions(options)
        } catch (error) {
            console.error('Error fetching states:', error)
        }
    }

    useEffect(() => {
        if (countryCode) {
            statesInitiate(countryCode)
        }
    }, [countryCode])
    
    useEffect(() => {
        if (stateOptions.length > 0) {
            const firstState = stateOptions[0].value
            setState(firstState)
        }
    }, [stateOptions])

    //---Suburbs Option
    const suburbsInitiate = async (code: string, state: string) => {
        try {
            const suburbs: string[] = await GetSuburbs(code, state)
            const options = suburbs.map((suburb) => ({
                value: suburb,
                label: suburb
            }))
            setSuburbOptions(options)
        } catch (error) {
            console.error('Error fetching states:', error)
        }
    }

    useEffect(() => {
        if (state) {
            suburbsInitiate(countryCode, state)
        }
    }, [state])
    
    useEffect(() => {
        if (suburbOptions.length > 0) {
            const firstSuburb = suburbOptions[0].value
            setSuburb(firstSuburb)
        }
    }, [suburbOptions])

    //------------------------------
    //---Save Handler
    //------------------------------
    const saveHandler = () => {
        onSave({
          state,
          suburb,
          zipCode,
          address
        })
    }

    //------------------------------
    return (
        <Modal
            // title={title}
            title={
                <BoxHeader style={{width: "25vw", marginLeft: "1vw"}}>
                    <YellowLine>
                        <Header>Add Address</Header>
                    </YellowLine>
                </BoxHeader>
            }
            open={isVisible}
            footer={[
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
                        marginTop: "2vw",
                        cursor: "pointer",
                    }}
                    onClick={onCancel}
                >
                    Cancel
                </Button>,
                <Button
                    variant="solid"
                    size="large"
                    style={{
                        width: "8vw",
                        fontFamily: "Montserrat",
                        fontSize: "12px",
                        fontWeight: "700",
                        color: Color.WHITE,
                        backgroundColor: Color.RED,
                        marginTop: "2vw",
                        cursor: "pointer",
                    }}
                    onClick={onDel}
                >
                    Delete
                </Button>,
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
                    onClick={saveHandler}
                >
                    Save
                </Button>
        ]}
            centered={centered}
        >
            <CustomBox>
                <BoxContent style={{ width: "30vw", marginTop: "1vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "4vw"}}>
                        Country:
                    </Title>
                    <Select
                        showSearch
                        value={country_code}
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        disabled={!countriesOptions || countriesOptions.length === 0}
                        options={countriesOptions}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(value) => {
                            setCountryCode(value)
                            setState("")
                            setSuburb("''")
                          }}
                    />
                </BoxContent>
                <BoxContent style={{ width: "30vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "4vw"}}>
                        State:
                    </Title>
                    <Select
                        showSearch
                        value={state}
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        disabled={!stateOptions || stateOptions.length === 0}
                        options={stateOptions}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(value) => setState(value)}
                    />
                </BoxContent>
                    <BoxContent style={{ width: "30vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                        {countryCode === "IR" || 
                        countryCode === "AE" ||
                        countryCode === "TR"?
                        (
                            <Title style={{width: "4vw"}}>
                                City:
                            </Title>
                        ): (                            
                            <Title style={{width: "4vw"}}>
                                Suburb:
                            </Title>
                        )}
                    <Select
                        showSearch
                        value={suburb}
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        disabled={!suburbOptions || suburbOptions.length === 0}
                        options={suburbOptions}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(value) => setSuburb(value)}
                    />
                    </BoxContent>                
                <BoxContent style={{ width: "30vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "5vw"}}>
                        Zip Code:
                    </Title>
                    <Input
                        placeholder=""
                        value={zipCode}
                        style={{width: "5vw"}}
                        onChange={(e) => {
                            const value = e.target.value
                            if (/^\d+$/.test(value) )
                                setZipCode(value)
                        }}
                    />
                </BoxContent>
                <BoxContent style={{ width: "30vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "5vw"}}>
                        address:
                    </Title>
                    <Input
                        placeholder=""
                        value={address}
                        style={{width: "15vw"}}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </BoxContent>
            </CustomBox>
        </Modal>
    )
}
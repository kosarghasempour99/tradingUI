import React, { useState, useEffect }  from 'react'

import {
    Modal,
    Button,
    Input,
    Select
} from 'antd'

import { GetStates, GetCities } from "src/services/commonServices"

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
    onSave: () => void
    onCancel: () => void
}

//------------------------------
//---Address Modal
//------------------------------
export const AddressModal: React.FC<CustomModalProps> = ({
  isVisible,
  centered = false,
  countriesOptions = [],
  onSave,
  onCancel
}) => {
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")

    const [statesList, setStatesList] = useState([])
    const [stateOptions, setStateOptions] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [cityOptions, setCityOptions] = useState([])

    //------------------------------
    //---Options Handler
    //------------------------------
    const statesInitiate = async (country: string) => {
        try {
            const states: [] = await GetStates(country)
            setStatesList(states)
        } catch (error) {
            console.error('Error fetching states:', error)
        }
    }

    const citiesInitiate = async (country: string, state: string) => {
        try {
            const cities: [] = await GetCities(country, state)
            setCitiesList(cities)
        } catch (error) {
            console.error('Error fetching states:', error)
        }
    }

    //---States Option
    useEffect(() => {
        statesInitiate(country)
        const options = statesList.map((state) => ({
            value: state,
            label: state
        }))
        setStateOptions(options)
    }, [country])
    
    //---States Option
    useEffect(() => {
        citiesInitiate(country, state)
        const options = citiesList.map((city) => ({
            value: city,
            label: city
        }))
        setCityOptions(options)
    }, [state])

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
            onOk={onSave}
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
                        backgroundColor: Color.BLUE_DARK,
                        marginTop: "2vw",
                        cursor: "pointer",
                    }}
                    onClick={onSave}
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
                        placeholder="Countries..."
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={countriesOptions}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(value) => setCountry(value)}
                    />
                </BoxContent>
                <BoxContent style={{ width: "30vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "4vw"}}>
                        State:
                    </Title>
                    <Select
                        showSearch
                        placeholder="States..."
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={stateOptions}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(e) => setState(e.target.value)}
                    />
                </BoxContent>
                <BoxContent style={{ width: "30vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "4vw"}}>
                        City:
                    </Title>
                    <Select
                        showSearch
                        placeholder="Cities..."
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={cityOptions}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(e) => setCity(e.target.value)}
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
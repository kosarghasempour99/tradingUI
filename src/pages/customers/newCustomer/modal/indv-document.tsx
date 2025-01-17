import React, { useState, useEffect }  from 'react'

import {
    Modal,
    Button,
    Input,
    Select
} from 'antd'

import { UploadFile }   from "src/components/core/Upload"
import { CustomBox }    from "src/components/core/CustomBox"
import { Color }        from "src/definition/color"
import { IndividualDocuments }  from "src/definition/const"


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
    onSave: () => void
    onCancel: () => void
}

//------------------------------
//---Individual Document Modal
//------------------------------
export const IndvDocumentModal: React.FC<CustomModalProps> = ({
  isVisible,
  centered = false,
  onSave,
  onCancel
}) => {
    const [document, setDocument] = useState("")
    const [socumentOption, setDocumentOption] = useState([])
  
    //------------------------------
    //---Options Handler
    //------------------------------
    useEffect(() => {
        const newOptions = IndividualDocuments.map((item) => ({
            value: item,
            label: item
        }))
        setDocumentOption(newOptions)
    },[isVisible])

    //------------------------------
    //---Save Handler
    //------------------------------
    const saveHandler = () => {
        onSave()
    }

    //------------------------------
    return (
        <Modal
            title={
                <BoxHeader style={{width: "25vw", marginLeft: "1vw"}}>
                    <YellowLine>
                        <Header>Add Address</Header>
                    </YellowLine>
                </BoxHeader>
            }
            open={isVisible}
            centered={centered}
            onCancel={onCancel}
            width={"50vw"}
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
                    onClick={saveHandler}
                >
                    Save
                </Button>
        ]}
        >
            <CustomBox>
                <BoxContent style={{ width: "30vw", marginTop: "1vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                    <Title style={{width: "7vw"}}>
                        Document Type:
                    </Title>
                    <Select
                        showSearch
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        disabled={!socumentOption || socumentOption.length === 0}
                        options={socumentOption}
                        style={{width: "15vw", marginLeft: "1vw"}}
                        onChange={(value) => {
                            setDocument(value)
                          }}
                    />
                    <UploadFile />
                </BoxContent>
           </CustomBox>
        </Modal>
    )
}
import React from 'react'
import { Modal, Button } from 'antd'

import { BranchShowBalanceType }    from 'src/definition/balance-interfaces'
import { FormatNumber } from "src/components/common/format"
import { Color }        from "src/definition/color"

import {
    BoxHeader,
    YellowLine,
    Header,
    Title,
    Content,
} from "../style"

//------------------------------
interface CustomModalProps {
    title: string
    isVisible: boolean
    centered?: boolean
    dataSource: BranchShowBalanceType[]
    onOk: () => void
}

//------------------------------
//---Balance Modal
//------------------------------
export const BalanceModal: React.FC<CustomModalProps> = ({
  title,
  isVisible,
  centered = false,
  dataSource = [],
  onOk
}) => {
    return (
        <Modal
            // title={title}
            title={
                <BoxHeader style={{width: "25vw", marginLeft: "1vw"}}>
                    <YellowLine>
                        <Header>{title}</Header>
                    </YellowLine>
                </BoxHeader>
            }
            open={isVisible}
            onOk={onOk}
            footer={
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
                    onClick={onOk}
                >
                    OK
                </Button>
            }
            centered={centered}
        >
            <div>
                {dataSource.length > 0 ? (
                    dataSource.map((item, index) => (
                        <BoxHeader key={index} style={{width: "15vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                            <Title style={{width: "8vw"}}>
                                {item.branch}
                            </Title>
                            <Content>
                                ${FormatNumber(item.balance,2)}
                                </Content>
                        </BoxHeader>
                    ))
                ) : (
                    <BoxHeader style={{width: "15vw", marginLeft: "1vw", justifyContent: "flex-start", marginTop: "1vw"}}>
                        <Title style={{width: "8vw"}}>
                            -
                        </Title>
                        <Content>
                            -
                        </Content>
                    </BoxHeader>
                )}
            </div>
        </Modal>
    )
}
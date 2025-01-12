import React from 'react'
import { Modal, Button } from 'antd'

import { BranchShowBalanceType }    from 'src/definition/balance-interfaces'
import { FormatNumber } from "src/components/common/format"

import {
    BoxHeader,
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
            title={title}
            open={isVisible}
            onOk={onOk}
            footer={
            <Button key="submit" type="primary" onClick={onOk}>
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
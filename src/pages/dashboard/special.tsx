import { Space, Table, Tag }    from 'antd'
import type { TableProps }      from 'antd'
import React                    from 'react'

import { FormatNumber } from "src/components/common/format"

//------------------------------
interface DataType {
  key: string
  amount: number
  over: number
}

interface BaseRateProc {
    fixedRate: number
    dataSource: DataType[]
  }
  
//------------------------------
//---Orders Header
//------------------------------
export const SpecialRate: React.FC <BaseRateProc> = ({fixedRate, dataSource}) => { 
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: "10vw",
            align: "center",
        },
        {
            title: 'Rate',
            key: 'rate',
            width: "10vw",
            align: "center",
            render: (_, record) => (
                <span>{FormatNumber(fixedRate + record.over,0)}</span>
              ),
        }
    ]

//------------------------------
    return (
        <Table<DataType>
            columns={columns} dataSource={dataSource}
        />
    )
}

import { Table }    from 'antd'
import type { TableProps }      from 'antd'
import React                    from 'react'

import { SpecialRateType }  from "src/definition/interfaces"
import { FormatNumber }     from "src/components/common/format"

//------------------------------
interface BaseRateProc {
    dataSource: SpecialRateType[]
  }
  
//------------------------------
//---Orders Header
//------------------------------
export const SpecialRate: React.FC <BaseRateProc> = ({dataSource}) => {
    //---Add Key
    const enrichedDataSource = dataSource.map((item, index) => ({
        ...item,
        key: item.key || index.toString(),
    }))

    //------------------------------
    const columns: TableProps<SpecialRateType>['columns'] = [
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: "10vw",
            align: "center",
            render: (_, record) => (
                <span>{FormatNumber(record.amount,0)}</span>
              ),
        },
        {
            title: 'Rate',
            key: 'rate',
            width: "10vw",
            align: "center",
            render: (_, record) => (
                <span>{FormatNumber(record.rate,0)}</span>
              ),
        }
    ]

//------------------------------
    return (
        <Table<SpecialRateType>
            columns={columns}
            dataSource={enrichedDataSource}
            pagination={false}
            bordered
        />
    )
}

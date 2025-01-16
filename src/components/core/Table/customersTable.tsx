import React, { useState }  from 'react'

import type { TableProps, TableColumnsType }  from 'antd'
import { Table }            from 'antd'

import { FormatNumber } from 'src/components/common/format'
import { CustomerType } from 'src/definition/interfaces'
import { KVC }          from 'src/definition/const'

type OnChange = NonNullable<TableProps<CustomerType>['onChange']>
type Filters = Parameters<OnChange>[1]
type GetSingle<T> = T extends (infer U)[] ? U : never

//------------------------------
//---Customers Table
//------------------------------
export const CustomersTable: React.FC<{data: CustomerType[]}> = ({data}) => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({})

  //------------------------------
  const handleChange: OnChange = (pagination, filters) => {
    setFilteredInfo(filters)
  }

  //------------------------------
  const columns: TableColumnsType<CustomerType> = [
    { title: 'Code', dataIndex: 'code', key: 'code', ellipsis: true, width: "6vw" },
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName', ellipsis: true, width: "20vw" },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      filters: [
        { text: 'Australia', value: 'Australia' },
        { text: 'Emirates', value: 'Emirates' },
        { text: 'Iran', value: 'Iran' }
      ],
      filteredValue: filteredInfo.country || null,
      onFilter: (value, record) => record.country.includes(value as string),
      ellipsis: true,
      width: "7vw"
    },
    { title: 'Phone', dataIndex: 'phone', key: 'phone', ellipsis: true, width: "10vw" },
    { title: 'Email', dataIndex: 'email', key: 'email', ellipsis: true, width: "20vw" },
    {
      title: 'KVC',
      dataIndex: 'kvc',
      key: 'kvc',
      filters: [
        { text: KVC.OK, value: KVC.OK },
        { text: KVC.FAILED, value: KVC.FAILED },
      ],
      filteredValue: filteredInfo.kvc || null,
      onFilter: (value, record) => record.kvc.includes(value as string),
      ellipsis: true, 
      width: "5vw"
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      ellipsis: true,
      width: "7vw",
      render: (text: number) => <span>${FormatNumber(text,0)}</span>
    },
    { title: 'Description', dataIndex: 'description', key: 'description', ellipsis: true, width: "20vw" },
  ]

  //------------------------------
    return (
    <>
        <Table<CustomerType>
          columns={columns}
          dataSource={data}
          onChange={handleChange}
        />
    </>
  )
}

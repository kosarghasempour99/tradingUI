import React, { useEffect, useState } from "react"

import { EditableTable }    from "src/components/core/Table/EditableTable"
import { FormatNumber }     from "src/components/common/format"

import { SpecialRateType } from "src/definition/interfaces"

//------------------------------
interface BaseRateProc {
  onChange: (data: SpecialRateType[]) => void
  data: SpecialRateType[]
}

//------------------------------
//---Special Rate Table
//------------------------------
export const SpecialRateTable: React.FC <BaseRateProc> = ({onChange, data}) => { 
  const [dataSource, setDataSource] = useState<SpecialRateType[]>(
    data.length === 0 ? [
      {
        key: "defaultRow",
        amount: 2000,
        over: 0
      }  
    ] : data
  )

  //------------------------------
  const handleAdd = () => {
    const newRow = {
      key: Date.now(),
      amount: 2000,
      over: 0
    }
    setDataSource([...dataSource, newRow])
  }

  //------------------------------
  const handleUpdate = (updatedRow: SpecialRateType) => {
    const updateData = dataSource.map((row) =>
      row.key === updatedRow.key ? { ...updatedRow } : row
    )
     setDataSource(updateData)

    //---Send Special Rate to Parent
    const extractedData: SpecialRateType[] = updateData.map(({ amount, over, rate }) => ({ amount, over, rate}))
    onChange(extractedData)
  }

  //------------------------------
  const handleDelete = (key: React.Key) => {
    if (key === "defaultRow") return
      setDataSource((prev) => prev.filter((item) => item.key !== key))
  }

  //------------------------------
  const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      editable: true,
      width: "10vw",
      align: "center",
      render: (value: number) => FormatNumber(value, 0)
    },
    {
      title: "Over",
      dataIndex: "over",
      editable: true,
      width: "10vw",
      align: "center",
      render: (value: number) => FormatNumber(value, 0)
    },
    {
      title: "",
      dataIndex: "action",
      render: (_: any, record: SpecialRateType) => (
        <a onClick={() => handleDelete(record.key)}>-</a>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (_: any, record: SpecialRateType) => (
        <a onClick={() => handleAdd()}>+</a>
      ),
    }
  ]

  //------------------------------
  return (
    <EditableTable<SpecialRateType>
      columns={columns}
      dataSource={dataSource}
      lable="New Special Rate"
      onRowUpdate={handleUpdate}
      onRowDelete={handleDelete}
      onAddRow={handleAdd}
    />
  )
}

import React, { useEffect, useState } from "react"

import { EditableTable }    from "src/components/core/Table/EditableTable"
import { FormatNumber }     from "src/components/common/format"

//------------------------------
interface DataType {
  key: React.Key
  amount: number
  over: number
}

interface ReturnType {
  amount: number
  over: number
}

interface BaseRateProc {
  onChange: (data: {amount: number, over: number}[]) => void
  data: DataType[]
}

//------------------------------
//---Special Rate
//------------------------------
export const SpecialRate: React.FC <BaseRateProc> = ({onChange, data = []}) => { 
  const [dataSource, setDataSource] = useState<DataType[]>(
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
  const handleUpdate = (updatedRow: DataType) => {
    const updateData = dataSource.map((row) =>
      row.key === updatedRow.key ? { ...updatedRow } : row
    )
     setDataSource(updateData)

    //---Send Special Rate to Parent
    const extractedData: ReturnType[] = updateData.map(({ amount, over }) => ({ amount, over }))
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
      render: (_: any, record: DataType) => (
        <a onClick={() => handleDelete(record.key)}>-</a>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (_: any, record: DataType) => (
        <a onClick={() => handleAdd()}>+</a>
      ),
    }
  ]

  //------------------------------
  return (
    <EditableTable<DataType>
      columns={columns}
      dataSource={dataSource}
      lable="New Special Rate"
      onRowUpdate={handleUpdate}
      onRowDelete={handleDelete}
      onAddRow={handleAdd}
    />
  )
}

import React, { useContext, useEffect, useRef, useState } from "react"

import type { GetRef, InputRef, TableProps }  from "antd"
import { Form, Input, Table }                 from "antd"

type FormInstance<T> = GetRef<typeof Form<T>>

const EditableContext = React.createContext<FormInstance<any> | null>(null)

//------------------------------
interface EditableRowProps {
  index: number
}

interface EditableTableProps<T> {
  columns: Array<TableProps<T>['columns'][number] & { editable?: boolean; dataIndex: string }>
  dataSource: T[]
  lable: string
  onRowUpdate: (row: T) => void
  onRowDelete?: (key: React.Key) => void
  onAddRow?: () => void
}

interface EditableCellProps<T> {
  title: React.ReactNode
  editable: boolean
  dataIndex: keyof T
  record: T
  handleSave: (record: T) => void
}

//------------------------------
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

//------------------------------
const EditableCell = <T extends object>({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}: EditableCellProps<T> & React.PropsWithChildren<{}>) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef<InputRef>(null)
  const form = useContext(EditableContext)!

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({ [dataIndex]: record[dataIndex] })
  }

  const save = async () => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log("Save failed:", errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{ required: true, message: `${title} is required.` }]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingInlineEnd: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

//------------------------------
//---Editable Table
//------------------------------
export const EditableTable = <T extends { key: React.Key }>({
  columns,
  dataSource,
  onRowUpdate
}: EditableTableProps<T>) => {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  }

  const modifiedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: T) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: onRowUpdate,
      }),
    }
  })

//------------------------------
return (
    <div>
      <Table<T>
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={modifiedColumns as ColumnTypes}
        pagination={false}
        style={{ marginLeft: "1vw", marginRight: "1vw", marginTop: "1vw", marginBottom: "2vw", fontFamily: "Montserrat"}}
      />
    </div>
  )
}

import React, { useState } from 'react'
import type { UploadProps } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'

const { Dragger } = Upload

interface UploadFileProps {
  uploadUrl: string
  isVisible?: boolean
}

//------------------------------
//---Upload File
//------------------------------
export const UploadFile: React.FC<UploadFileProps> = ({ uploadUrl, isVisible = true }) => {
  const [fileList, setFileList] = useState([])

    //------------------------------
    const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: uploadUrl,
    fileList,
    onChange(info) {
        setFileList([...info.fileList])
        const { status } = info.file
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    },
  }

  if (!isVisible) {
    return null
  }

    //------------------------------
    return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Dragger>
  )
}

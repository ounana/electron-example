import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Tag } from 'antd'

export default function App() {
  const [files, setFiles] = useState([])
  function open() {
    const { fs } = window
    try {
      const result = fs.readdirSync('C://')
      setFiles(result)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <Button onClick={open}>C盘</Button>
      <div>{files.map((file, index) => <Tag key={index}>{file}</Tag>)}</div>
    </div>
  )
}
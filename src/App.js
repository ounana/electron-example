import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Tag } from 'antd'

export default () => {
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
  function click() {
    const { electron } = window
    console.log(electron)
  }
  return (
    <div>
      <Button onClick={open}>C盘</Button>
      <div>{files.map((file, index) => <Tag key={index}>{file}</Tag>)}</div>
      <Button onClick={click}>btn</Button>
    </div>
  )
}
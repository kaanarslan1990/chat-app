import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {init} from "../socketApi"
// import styles from "./styles.module.css";


function Container() {
  useEffect(() => {
    init()
  })
  return (
    <div className="App">
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container
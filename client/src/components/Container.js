import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {init, subscribeChat} from "../socketApi"
import {useChat} from '../context/ChatContext'
// import styles from "./styles.module.css";


function Container() {
  const {setMessages} = useChat();
  useEffect(() => {
    init()

    subscribeChat((message) => {
      setMessages(prevState => [...prevState, {message}])
    })
  })
  return (
    <div className="App">
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container
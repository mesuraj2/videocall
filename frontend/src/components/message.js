import React,{useState,useEffect} from 'react'
import "./message.css"

import io from "socket.io-client"



const socket = io.connect('http://localhost:5000')

export default function My_message(props) {
  
  
  // const [state, setState] = useState({naam:'',message:''})
  const [state, setState] = useState('')
    const [chat, setChat] = useState([])

    const onTextChange= e=>{
      setState(e.target.value)
    }

const onMessageSubmit=(e)=>{
  e.preventDefault();
  let naam=props.naam
  let message=state
  // console.log(state)
  socket.emit('message',{naam,message});
  setState('')
}
useEffect(() => {
  // console.log(props.naam)
  socket.on('message',({naam,message})=>{
    setChat([...chat,{naam,message}]);
  })
})


  return (
    <>
    <div className='chat'>
    {chat.map((chat,index) => {
      return (
    <li key={index} className="list_item" >
      <h3 className="name">{chat.naam}</h3>
  <span>{chat.message} </span>
    </li>
  )
    })}
    
    </div>
    <form onSubmit={onMessageSubmit}>
      {/* <input type="text" onChange={e=>onTextChange(e)} value={state.naam} name="naam" /> */}
    <input type="text" className="chat_input" placeholder="enter your message" name="message" onChange={e=>onTextChange(e)} value={state} />
    <button className='char_input'>send </button>
    </form>
  </>
  )
}

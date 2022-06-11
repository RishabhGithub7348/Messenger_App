import React, {useState, useEffect} from 'react';
// import Button from '@material-ui/core/Button';
import { FormControl , InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import { collection,orderBy, query,onSnapshot ,serverTimestamp, addDoc} from "firebase/firestore";
import './App.css';
import db from './firebase';
import FlipMove  from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {


   
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState([
    
    ]);

   const [username, setUsername]  = useState('');
   

  // useEffect (() =>{
  //   onSnapshot(collection(db,`messages`), orderBy('timestamp', 'desc'), (snapshot) => {
  //     setMessages(snapshot.docs.map((doc) => doc.data()));
  //   })
  // })
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc =>({ id: doc.id, message: doc.data()
       }) ))
    })
  },[])


   useEffect(() =>{
     setUsername(prompt('Please enter your name'))  
   },[])



  const sendMessage = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, `messages`), {
      message: input,
      username: username,
      timestamp: serverTimestamp()
   });
  
  

    //  setMessages([
    //    ...messages, {username:username, text:input}
    //   ]);
     setInput('')
  }

  return (
    <div className="App">
      <br></br>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
   <h1>Telegram Messenger</h1>
   <h2>Welcome {username}</h2>
   
   <form className='app__form' >
   <FormControl className='app__formControl' >
   <InputLabel >Enter a message...</InputLabel>
   <Input className='app__input' value={input} onChange={event =>setInput(event.target.value)} />

  <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
    <SendIcon/>
  </IconButton>
  


   {/* <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Messaage </Button> */}
   </FormControl>
   
   </form>
  
  <FlipMove>
  {
     messages.map(({id, message}) =>(
       <Message key={id} username={username} message={message} />
       
     ))
   }
  </FlipMove>
    </div>  
  );
}

export default App; 

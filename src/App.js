import { Button, Input } from '@material-ui/core';
import './App.css';
import db from "./firebase";
import {React , useState , useEffect , preventDefault  } from 'react'
import Text from "./Text"
import firebase from 'firebase'
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [input2, setTodo2] = useState("");
  function clikcme(event){
    event.preventDefault();
    setInput('')
  db.collection('todo').add({
    todo:input,
    timestamp : firebase.firestore.FieldValue.serverTimestamp()
  
  })
    
  }
  useEffect(()=>{
    db.collection('todo').orderBy('timestamp', 'desc').onSnapshot(
      snapshot =>{
        console.log(snapshot.docs.map(doc => doc.data().todo))
        setTodo(snapshot.docs.map(doc =>  ({id:doc.id , todo:doc.data().todo})));
      }
    )
  } ,[]);
  // alert("Hi")
  // hello = prompt("What is your name")
  return (
    
    <div className="App">
      
      <h1>ChatApp👀 </h1>
        {/* <Input/> */}
        {/* <Input 
              value={input2}
              onChange={(event) => setTodo2(event.target.value)}>

        </Input> */}
        <form>
          <Input 
                value={input}
                onChange={(event) => setInput(event.target.value)}></Input>
          <Button variant="contained" color="primary" href="#contained-buttons" onClick ={clikcme}  disabled = {!input}>
              Send ✔
          </Button>
          {todos.map((todo) => (
            <Text todo = {todo} name = "User"/>
          ))}
        </form>
      
    </div>
  );
}

export default App;

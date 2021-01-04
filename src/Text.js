import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
     
     
  } from "@material-ui/core";
  import React from "react";
//   import db from "./firebase";

  function Todo(props) {
    
    return (
      <centre>
        <List>
          <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary={props.name} />
          </ListItem>
          {/* <p>{props.todo}</p> */}
         
        </List>
      </centre>
    );
  }
  
  export default Todo;
  
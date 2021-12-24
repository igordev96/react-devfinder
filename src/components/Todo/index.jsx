import axios from "axios";
import { ListItem } from "./styles";

export function Todo(props) {

  function deleteHandler(event){
    props.setTodos(props.todos.filter((el) => {
      return el.id !== props.todo.id
    }))
    axios.delete(`/api/tasks/${props.todo.id}`)
  }

  function checkedHandler(){
    props.setTodos(props.todos.map((item) => {
      if(item.id === props.todo.id){
        return {
          ...item, 
          checked: !item.checked
        }
      }
      return item;
    }))
  }

  return (
    <ListItem>
      <button 
        className={`check ${props.checked ? ' true' : ''}`}  
        onClick={checkedHandler} 
      /> 
      <li 
        className={`${props.checked ? 'checked' : ''}`}
      >
        {props.text}
      </li>
      <button 
        className="delete" 
        onClick={deleteHandler} 
      />
    </ListItem>
  )
}
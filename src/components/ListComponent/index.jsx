import { List } from './styles'
import { Todo } from '../Todo'

export function ListComponent(props) {
  return (
      <List>
        {/* <li> <input type="checkbox" /> Banana</li>
        <li> <input type="checkbox" /> Apple</li>
        <li> <input type="checkbox" /> Orange</li> */}
        {props.todos.map((todo) => 
            <Todo
              checked={todo.checked} 
              key={todo.id}
              text={todo.text}
              todos={props.todos}
              todo={todo}
              setTodos={props.setTodos}
            />
          )}
      </List>
  );
}
import { Box } from './styles';
import { ListComponent } from '../ListComponent';
import { NewItem } from '../NewItem';
import { useState } from 'react';

export function Card(){
  const [active, setActive] = useState(false);
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);



  return (
    <>
      <Box>
        <h1>To do</h1>
        <ListComponent 
          todos={todos}
          setTodos={setTodos}
        />
        <NewItem 
          active={active} 
          setActive={setActive} 
          item={item}
          setItem={setItem}
          todos={todos}
          setTodos={setTodos}
        />
      </Box>
    </>
  );
}
import { useEffect } from "react";
import { Btn, Container } from "./styles";
import axios from "axios";

// axios.get("/api/tasks")
//     .then(res => {
//       setTodos([...res.data.tasks])
//     })

export function NewItem(props) {
  useEffect(() => {
    const getAPI = async () => {
      const response = await axios.get("/api/tasks")
      props.setTodos(response.data.tasks)
    };
    getAPI();
    // eslint-disable-next-line
  }, [])

  function addItem() {
    props.setActive(!props.active);

    const idRandom = Math.floor(Math.random()*1000);
     
    if (props.active && props.item!=="") {
      props.setTodos([...props.todos, {
      text: props.item,
      id: idRandom,
      checked: false
    }])
    axios.post("/api/tasks", 
      {
        text: props.item,
        id: idRandom,
        checked: false
      }
    )
    props.setItem("")
    }
  }

  return (
    <Container isActive={props.active}>
      <Btn 
        onClick={addItem}
      >
        {props.active ? "Add" : "New Item"}
      </Btn>
      <input 
        type="text"
        value={props.item}
        onChange={event => props.setItem(event.target.value)}
      />
    </Container>
  );
}
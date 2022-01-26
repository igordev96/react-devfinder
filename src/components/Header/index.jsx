import { useState, useRef, useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { Container } from "./style";
import axios from "axios";

export function Header({ setInfo, setDate }) {
  const [devInput, setDevInput] = useState("igordev96");
  const inputRef = useRef();
  const button = useRef();

  const enterHandler = (e) => {
    if (e.charCode === 13) {
      button.current.click();
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${devInput}`);
      setInfo(res.data);
      setDate(res.data.created_at.slice(0, 10).split("-").reverse().join("/"));
      setDevInput("");
    } catch (err) {
      console.log(err);
      alert("The user does NOT exist");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [devInput]);

  useEffect(() => button.current.click(), []);

  return (
    <Container>
      <GiMagnifyingGlass className="glass" />
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={devInput}
        onKeyPress={enterHandler}
        onChange={(el) => setDevInput(el.target.value)}
        ref={inputRef}
      />
      <button ref={button} onClick={getUser}>
        Search
      </button>
    </Container>
  );
}

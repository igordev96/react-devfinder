import { useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { Container } from "./style";

export function Header({setDevInput}) {
  const [temp, setTemp] = useState('');

  return (
    <Container>
      <GiMagnifyingGlass className="glass" />
      <input 
        type="text" 
        placeholder="Search GitHub username..."
        value={temp}
        onChange={(el) => setTemp(el.target.value)}
      />
      <button 
        onClick={() => {
          setDevInput(temp);
          setTemp('');
        }}
      >
        Search
      </button>
    </Container>
  );
}
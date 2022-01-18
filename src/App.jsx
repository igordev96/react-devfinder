import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { GlobalStyle, Container } from "./styles/global";
import { useState } from "react";

export function App() {
  const [info, setInfo] = useState({});
  const [date, setDate] = useState("");
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header setInfo={setInfo} setDate={setDate} />
        <Card info={info} date={date} />
      </Container>
    </>
  );
}

import { Header } from './components/Header';
import { Card } from './components/Card';
import { GlobalStyle, Container } from './styles/global';
import { useState } from 'react';

export function App() {
  const [devInput, setDevInput] = useState('igordev96');
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header
          setDevInput={setDevInput} 
        />
        <Card
          devInput={devInput}
          setDevInput={setDevInput} 
        />
      </Container>
    </>
  );
}
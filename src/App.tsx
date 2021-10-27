import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [users, setUsers] = useState<User[]>([] as User[]);

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const user = { name, age, hobby };

    setUsers([...users, user]);
    setName("");
    setAge(0);
    setHobby("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Primeiro contato com TypeScript</h1>
      </header>
      <main>
        <Input
          label="Nome"
          placeholder="Insira um nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Idade"
          placeholder="Insira uma idade"
          value={age}
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          label="Hobby"
          placeholder="Insira um hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleSubmit(name, age, hobby)}>Enviar</button>
        <ul>
          {users.map((usr, index) => {
            return (
              <li key={index}>
                <Card name={usr.name} age={usr.age} hobby={usr.hobby} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;

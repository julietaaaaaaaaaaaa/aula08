import { useState } from "react";

export default function Registrar() {
const[nome, setNome] = useState([]);

const[email, setEmail] = useState([]);

const registrar = async (event)=> {
  event.preventDefault();

  try{
    await fetch('http://localhost:3000/usuarios',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    });
  }catch{
    alert("ocorreu um erro na aplicação");
  }
}  

return (
     <main>
<form onSubit={registrar}>
  <div>
  <label htmlFor="nome">Nome:</label>
  <input
type="text"
value={nome}
onChange={(event)=>setNome(event.target.value)}/>
  </div>

  <div>
    <label htmlFor="email">E-mail:</label>
    <input
    type="email"
    id="email"
    value={email}
    onChange={(event) => {setEmail(event.target.value)}}
    placeholder="Digite seu e-mail"
          
          />
        </div>

        <button type="submit">Registrar</button>


</form>
     </main>   
  );
}
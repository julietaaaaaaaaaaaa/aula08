import { useState } from "react";

export default function Registrar() {
const[nome, setNome] = useState([]);

const[email, setEmail] = useState([]);

const registrar = async(event)=> {
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
<form action="">
<input
type="text"
value={nome}
onChange={(event)=>setNome(event.target.value)}/>
<input
type="email"
value={email}
onChange={(event)=>setEmail(event.target.value)}/>

</form>

     </main>   
  );
}
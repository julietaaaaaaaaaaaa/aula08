import { useEffect, useState } from "react";
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import {Button} from '@mui/material';


export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarUsuario();
}, [usuarios])

const deletar = async(id)=>{
  try{
    awaitfetch ('http://localhost:3000/usuarios'+ id,{
      method:'DELETE'
    });

  }catch{
alert("Ish lascou!");

  }

}
const exportarPDF = ()=>{
  const doc = new jsPDF();
  const tabelaDados = usuarios.map((usuario)=>[
    usuario.id,
    usuario.nome,
    usuario.email,
  ]);
  doc.text("lista de usuários", 10, 10);
  doc.autoTable({
    head:[["id","nome", "e-mail"]],
    body:tabelaDados,
  });
  doc.save("alunosIFMS.pdf");
};
  return (
    <>
    <Button variant="contained"onClick={()=> exportarPDF()}>
      gerar pdf
      </Button>
    <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
      </tr>
      {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.email}</td>
          <td><button onClick={()=> deletar(usuario.id)}>x</button></td>
        </tr>
      )}
    </table>
    </>
  );
}
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/credenciales";

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () =>{
    await signInWithEmailAndPassword(auth,email,password);
  };

  const register = async () =>{
    await createUserWithEmailAndPassword(auth,email,password);
  };

  return(
    <div>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />

      <button onClick={login}>Login</button>
      <button onClick={register}>Registro</button>
    </div>
  );
}

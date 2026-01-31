import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth,email,password);
    alert("logueado");
  };

  return (
    <>
      <input onChange={e=>setEmail(e.target.value)} />
      <input type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
}

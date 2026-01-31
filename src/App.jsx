import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";

function App() {

  const { user,logout } = useAuth();

  if(!user) return <Login />;

  return(
      <>
       <h1>Bienvenido {user.email}</h1>
       <button onClick={logout} >LogOut</button>





      </>
  )
}

export default App;

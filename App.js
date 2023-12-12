import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {

  const{user, loginWithRedirect,isAuthenticated,logout} = useAuth0();
  console.log("current user" , user);
  return (
    <div className="App">
      <header className="App-header">
        {
          isAuthenticated  ? (<button className="btn"onClick={()=> logout()}> logout</button> ): 
          (<button className="btn" onClick={(e)=> loginWithRedirect()}>
            loginWithRedirect
          </button>)
        }
      </header>   
    </div>
  );
}

export default App;

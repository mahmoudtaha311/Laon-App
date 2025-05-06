import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";

import { userContext } from "./Contexts/UserContext";
function App() {
  
  return (
    <userContext.Provider value={{userName:"Mahmoud",email:"test.com",role:"admin"}}>
      <div className="App" style={{ marginTop: "80px" }}>
        <LoanForm />
      </div>
    </userContext.Provider>
  );
}

export default App;

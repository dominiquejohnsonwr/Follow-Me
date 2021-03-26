import './App.css';
import { Route, Link } from "react-router-dom"
import Nav from "./components/Nav"
import NewUser from "./components/NewUser"
import UserDetail from "./components/UserDetail"

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">Home</Route>
      <Route path="/new">Add User</Route>
    </div>
  );
}

export default App;

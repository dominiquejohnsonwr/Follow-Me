import GHLogo from "./github2.webp"
import './App.css';
import { Route } from "react-router-dom"
import Nav from "./components/Nav"
import NewUser from "./components/NewUser"
import UserDetail from "./components/UserDetail"
import UserList from "./components/UserList"
import {useEffect, useState} from "react"
import {baseURL, config} from "./services"
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let response = await axios.get(baseURL, config)
    setUsers(response.data.records)
  }

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <div className="title">
          <h1>Follow Me</h1>
        </div>
        
        <div className="user-list">
          {users.map((user) => {
            return <UserList user={user} key={user.id} getData={getData}/>
          })}
        </div>
      </Route>
      
      <Route path="/new">
        <NewUser
          getData={getData}
        />
      </Route>
      
      <Route path="/view/:id">
        <UserDetail
          getData={getData}
        />
      </Route>

      <footer>
        <div className="footer">
          <p>Project created by Dominique Johnson for General Assembly SEI 2021</p>
          <div>
            <a href="https://github.com/dominiquejohnsonwr">
              <img src={GHLogo} width="50" height="50" alt="Git Hub logo"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

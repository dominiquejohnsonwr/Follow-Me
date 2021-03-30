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
    console.log(response.data.records)
    setUsers(response.data.records)
}



  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
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
        <UserDetail />
      </Route>
    </div>
  );
}

export default App;

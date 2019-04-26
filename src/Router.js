import React from 'react';
import { 
  Route,
  Switch,
  Link,
  BrowserRouter
} from "react-router-dom";

export default function Router(){
  return(
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/login">login</Link>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  )
}

function Login(){
  return(
    <h1>Login Page</h1>
  )
}
function Home(){
  return(
    <h1>Home Page</h1>
  )
}
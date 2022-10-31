
// import './App.css';
import Home from './comp/Home'
// import { Box } from "@chakra-ui/react"
import Login from "./comp/login";
import {NavLink} from "./comp/Nav"
// import {Route,Link, NavLink} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './comp/Footer'

function App() {
  return (
 
 <div className="App">
<Home/>


<h1>hi there</h1>
<Login/>

<Footer/>

</div>

  );
}


export default App;

import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// import  Nav from './components/Navbar/Nav.js'
import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { createContext } from "react";
const myContext = createContext();
class App extends Component {
    state = { isdarkMode: false };
    changeMode = () => {
        this.setState((pre) => ({ isdarkMode: !pre.isdarkMode }));
    };
    render() {
        return (
            <myContext.Provider
                value={{
                    isdarkMode: this.state.isdarkMode,
                    changeMode: this.changeMode,
                }}
            >
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route  exact path="/contact" component={Contact}/>
                </Switch>
            </myContext.Provider>
        );
    }
}
export default App;
export { myContext };

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
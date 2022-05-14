import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react"
import "./App.css";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav";
//import Navigate from "./Pages/Navigate";
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Search from './Pages/Search';
import { Container } from "@mui/material";

function App() {
  return (
  <BrowserRouter>
          <Header />
           <div className="app">
            <Container>
               <Switch>
              <Route path="/" component={Trending} exact/> 
              <Route path="/movies" component= {Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} /> 
               {/* </Route> */}
              
              </Switch>
              </Container>
              </div>
              <SimpleBottomNavigation />
          </BrowserRouter>
  );   
       }
export default App;
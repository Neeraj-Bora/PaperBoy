import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News'
import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


export default class App extends Component{
  constructor(){
    super();
    this.state={
      country:'in'
    }
  }
  changeCountry=(curr)=>{
    this.setState({country:curr})
  }
  render(){
    
    return(
      <div>
        <Router>
          <Navbar changeCountry={this.changeCountry} country={this.state.country}/>
          <Routes>
            <Route exact path='/' element={<News key='in' pageSize={3} country={this.state.country} category='general' />}/>
            <Route exact path={`/${this.state.country}`} element={<News key={`${this.state.country}general`} pageSize={3} country={this.state.country} category='general' />}/>
            <Route exact path={`/${this.state.country}/business`} element={<News key={`${this.state.country}business`} pageSize={3} country={this.state.country} category='business'/>}/>
            <Route exact path={`/${this.state.country}/entertainment`} element={<News key={`${this.state.country}entertainment`} pageSize={3} country={this.state.country} category='entertainment'/>}/>
            <Route exact path={`/${this.state.country}/health`} element={<News key={`${this.state.country}health`} pageSize={3} country={this.state.country} category='health'/>}/>
            <Route exact path={`/${this.state.country}/science`} element={<News key={`${this.state.country}science`} pageSize={3} country={this.state.country} category='science'/>}/>
            <Route exact path={`/${this.state.country}/sports`} element={<News key={`${this.state.country}sports`} pageSize={3} country={this.state.country} category='sports'/>}/>
            <Route exact path={`/${this.state.country}/technology`} element={<News key={`${this.state.country}technology`} pageSize={3} country={this.state.country} category='technology'/>}/>

          </Routes>
        </Router>
      </div>
    )
  }
}

import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News'
import React,{Component,useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
//   constructor(){
//     super();
//     this.state={
//       country:'in'
//     }
//   }
//   changeCountry=(curr)=>{
//     this.setState({country:curr})
//   }
  render(){
    
    return (
      <div>
        <Router>
          <Navbar /*changeCountry={this.changeCountry} country={this.state.country}*/
          />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="general" pageSize={3} category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={this.setProgress} key="business" pageSize={3} category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={3}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} key="health" pageSize={3} category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} key="science" pageSize={3} category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} key="sports" pageSize={3} category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} key="technology" pageSize={3} category="technology" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

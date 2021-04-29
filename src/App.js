import logo from './logo.png';
import './App.css';
import React from 'react';
import { Route, Link} from 'react-router-dom';
import First from './First'
import Second from './Second'




class App extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){

  }




  render() {
    return (
      <div className="App">
        <Route exact path="/" component={First} />
        <Route exact path="/second" component={Second} />
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props):
    this.state = {
      loading:true
    }
  }

  componentDidMount(){
    setTimeout(() =>{

      this.setState({loading : false})
    }, 3000);
  }

  render(){
    console.log('render APP');

    return(

      <div className="App">
          <header className = "App-header">
                {this.state.loading && ( 
                <img src=(logo) className= "app-logo" alt="logo" />)}

                {!this.state.loading && Contador numeroInicial={100/>}}
            </header> 
      </div>
    )


      
    
  }
}
export default App;

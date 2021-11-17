import React from "react";
import Square from './components/Square'
import Circle from './components/Circle'
import Triangle from './components/Triangle'
import Rectangle from './components/Rectangle'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className= "title">Geometrizando</h1>
        
        <Square
         color='green'
         title='Quadrado 1'/>

         <Circle 
          color= 'blue'
          title = 'Circulo 1'
         />

          <Triangle
          title = 'Triangulo 1'
          color = 'red'
          />

          <Rectangle
          title=' Retangulo 01'
          color='black'
          />
      </div>


      
    )
  }
}

export default App;
import React from "react";

class Rectangle extends React.Component{
    render(){
        return(
            <div>
                <span>{this.props.title} </span>
                <div className = 'rectangle' style={{background: this.props.color}} ></div>
            </div>    
        )
    }
}

export default Rectangle;
import React from "react";

class Triangle extends React.Component{
    render(){
        return(
            <div>
                <span>{this.props.title}</span>
                <div style ={{borderBottomColor: this.props.color}} className ='triangle'  ></div>
            </div>
        )
    }
}

export default Triangle;
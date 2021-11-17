import React from "react";

class Circle extends React.Component{
    render (){
        return(
            <div>
                <span>{this.props.title}</span>
            <   div style ={{background: this.props.color}} className="circle"> </div>
            </div>
        )
    }
}

export default Circle;
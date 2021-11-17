import React from "react";

class square extends React.Component{
    render (){
        return(
         <div>               
            <span>{this.props.title}</span>
            <div style={{background: this.props.color}} className="square"  ></div>
          </div>
        )
    }
}

export default square;
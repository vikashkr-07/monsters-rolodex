import React, { Component } from "react";
import "./input-box.css"

class InputField extends Component{
    render(){
        return(
            <div>
                <input
                 className={`${"search-box"} ${this.props.className}`}
                 type='search'
                 placeholder={this.props.placeholder}
                 onChange={this.props.onSearchHandler} />
            </div>
        )
    }
}
export default InputField;
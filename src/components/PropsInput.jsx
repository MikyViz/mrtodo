import { Component } from "react";

class PropsInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg: []
        }
    }

    valueTaker = (e) => {
        if (e.key === 'Enter') {
         const newMsg = [...this.state.msg, e.target.value]
        this.setState({
            msg: newMsg
        })
        e.target.value = ''
        }
        
        
    }

    render(){
        return (<div
        ><input type="text" placeholder="todo" onKeyDown={this.valueTaker} />
       {this.state.msg.map((item, index) => {
        return <p key={index}>{item || "🦀"}</p>
       })}        
        </div>)
    }
}

export default PropsInput;
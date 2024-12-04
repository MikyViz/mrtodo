import { Component } from "react";

class ByClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor: 'black',
            fColor: 'white',
        }
    }
    
    painter = () => {
        this.setState({
            bgColor: this.state.bgColor === 'black' ? 'white' : 'black',
            fColor: this.state.fColor === 'white' ? 'black' : 'white',
        })
    }
    render(){
        const foo = 'Через класс';
        const bar = <h1>{foo}</h1>
        return (<div
        onClick={this.painter}
        style={{ backgroundColor: this.state.bgColor, color: this.state.fColor, }}>{bar}</div>)
    }

}

export default ByClass;

// import { useState } from "react";
// const foo = 'Через функцию';
// const bar = <h1>{foo}</h1>
// const Header = () => {
//     const [bgColor, setBgColor] = useState('black');
//     const [fColor, setFColor] = useState('white');
//     const painter = () => {
//         setBgColor (bgColor === 'black' ? 'white' : 'black');
//         setFColor (fColor === 'white' ? 'black' : 'white');
//         console.log('2pizza');
//     }
//     // const painter = () => {
//     //     setBgColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
//     //   };
      
//     return (<div
//         onClick={painter}
//         style={{ backgroundColor: bgColor, color: fColor, }}>{bar}</div>)
// }
// export default Header;
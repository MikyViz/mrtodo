import { useState } from "react";

const foo = 'Через функцию';
const bar = <h1>{foo}</h1>
const Header = () => {
    const [bgColor, setBgColor] = useState('black');
    const [fColor, setFColor] = useState('white');
    const painter = () => {
        setBgColor (bgColor === 'black' ? 'white' : 'black');
        setFColor (fColor === 'white' ? 'black' : 'white');
    }
    // const painter = () => {
    //     setBgColor(prevColor => (prevColor === 'black' ? 'white' : 'black'));
    //   };
      
    return (<div
        onClick={painter}
        style={{ backgroundColor: bgColor, color: fColor, }}>{bar}</div>)
}
export default Header;
import Head from 'next/head';
import React, {useState} from 'react';


const ArrowFunction = () => <h1>I am arrow </h1>
  
 function CompA(props) {
  return (
    <>
    <ArrowFunction/>
     <h1>Comp A </h1>
    <p>Hello dear Comp A</p>
    <p>this is value from Home {props.myProps}</p>
    
    </>
  )
}


//class
//  class CompC extends React.Component {
//    render() {
//      return(
//        <h1> Hello C</h1>
//      )
//    }
//  }
function Home() {
const [value, setValue] = useState(10)
console.log("Hi");
const incrementValue =(incrementor) => {
  setValue(value + incrementor);
}
  return (
    <>
    {value}
      <h1>Hello World!</h1>
      <button onClick={() => incrementValue(+1)}> + </button>
      <button onClick={() => incrementValue(-1)}> - </button>
      <CompA
       myProps= {value}
      />
    </>
    
  );
}
export default Home;
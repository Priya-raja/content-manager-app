import Head from 'next/head';
import React, {useState} from 'react';


const ArrowFunction = () => <h1>I am arrow </h1>
  
 function CompA() {
  return (
    <>
    <ArrowFunction/>
     <h1>Comp A </h1>
    <p>Hello dear Comp A</p>
    
    </>
  )
}


//class
 class CompC extends React.Component {
   render() {
     return(
       <h1> Hello C</h1>
     )
   }
 }
function Home() {
const [value, setValue] = useState(10)
console.log("Hi");
const incrementValue =() => {
  setValue(value + 1);
}

  return (
    <>
    {value}
      <h1>Hello World!</h1>
      <button onClick={incrementValue}> + </button>
      <button> - </button>
      <CompA />
    </>
    
  );
}
export default Home;
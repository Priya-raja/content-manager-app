import Head from 'next/head';

 function CompA() {
  return (
    <>
     <h1>Comp A </h1>
    <p>Hello dear Comp A</p>
    <CompB/>
    </>
  )
}
function CompB() {
  return (
    <>
     <h1>Comp B </h1>
     <p>I'm also Comp B </p>
    </>
    
  )
}

function Home() {

  return (
    <>
      <h1>Hello World!</h1>
      <CompA />
    </>
    
  );
}
export default Home;
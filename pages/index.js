import Head from 'next/head';
import React from 'react';
import Navbar from "components/Navbar"
import ResourceHighlight from "components/ResourceHighlight"
import Newsletter from "components/Newsletter"
import ResourceList from "components/ResourceList"
import Layout from "components/Layout"
import Footer from "components/Footer"

function Home({resources}) {
  return (
    
    <Layout>
      <ResourceHighlight
        resources = {resources.slice(0,2)}
        >
      </ResourceHighlight>
      <Newsletter/>
      <ResourceList
      resources = {resources.slice(2)}
      >
      </ResourceList>
      <Footer/>
    </Layout>
    
  )
}
//will be called everytime u visit the page
//the data is always fresh
export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}
//will be called at build time, called only once 
// export async function getStaticProps() {

//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props: {
//       resources: data
//     }
//   }
// }
export default Home;
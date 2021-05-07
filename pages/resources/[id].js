import React from 'react'
import Layout from 'components/Layout'

const ResourceDetail = ({resourceId}) => {
    return (
        <Layout>
            <section className="hero ">
            <div className="hero-body">
            <div className="container">                    
             <section className="section">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                        <h2 className="subtitle is-4">{resourceId} </h2>
                        <h1 className="title">Title</h1>
                        <p>description</p>
                    </div>
                    </div>
                </div>
            </section>
                            
            </div>
            </div>
  </section>
      </Layout>      
        
    )
}
export function getServerSideProps({params}) {
    // console.log(query);
    return {
        props: {
            resourceId: params.id
        }
    }
}

export default ResourceDetail

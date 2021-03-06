import React from 'react';
import Link from 'next/link';

const ResourceHighlight = ( {resources} ) => {
    return (
        <section className="hero ">
            <div className="hero-body">
            <div className="container">
                {resources.map(item => {
                        return ( 
                            <section key ={item.id} className="section">
                                <div className="columns">
                                    <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">{item.createdAt}</h2>
                                        <h1 className="title">{item.title}</h1>
                                        <p>{item.description}</p>
                                        <Link href={`resources/${item.id}`}>
                                        <a className="button is-link">
                                            Details</a>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
                
                

                

                
            </div>
            </div>
  </section>
    )
}

export default ResourceHighlight

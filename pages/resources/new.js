import React from 'react'
import Layout from 'components/Layout'

const ResourceCreate = () => {
    return (
         <Layout>
             <div className="container">
                 <div className="columns">
                     <div className="column is-8 is-offset-2">
                         <div className="resource-form">
                             <h1 className="title"> Add new Resource </h1>
                             <form>
                             <div className="field">
                                <label className="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input"/>
                            </div>
                        </div>
                             </form>
                       </div>
                     </div>
                 </div>
             </div>
</Layout>
        
    )
}

export default ResourceCreate

import Layout from '../layouts/Main';
import {Link} from '../routes'
import {getCategories} from '../api/categories'
import React from "react";

const styleCard = {

}

export default class Categories extends React.Component{
    // https://www.api.mediaverse-dev.nl/api/v1/categories

    static async getInitialProps({ query }) {
        const res = await getCategories(query.id)
        const json = await res.json()
        return { categories: json.data }
    }

    render(){
        return (
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>Categories</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                                <li className="breadcrumb-item"><a>Categories</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <hr/>
                        {this.props.categories.map((c) =>
                             <div key={c.id} className="col-4" >
                                 <div className="card mb-3 p-3" style={styleCard}>
                                     <div className="card-block">
                                         <h4 className="card-title text-center">{c.value}</h4>
                                         <Link route='category' params={{id: c.id}} prefetch={true}>
                                             <a className="btn btn-primary btn-block">bekijken</a>
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                        )}
                    </div>
                </div>
            </Layout>
        );
    }
}
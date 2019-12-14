import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../layouts/Main';
import {getCategory} from '../api/categories'
import {Link, Router} from "../routes";


class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.currentPage,
            cardModeInline: true
        };
        // this.switchCardMode = this.switchCardMode.bind(this);

        // this.handleClick = this.handleClick.bind(this);
    }

    static async getInitialProps({query}) {
        const res = await getCategory(query.id, query.page)
        const json = await res.json()

        const currentPage = query.page

        return {
            category: json.data,
            products: json.data.products.data,
            paginate: {
                limit: json.data.products.limit,
                from: json.data.products.from,
                to: json.data.products.to,
                total: json.data.products.total,
                perPage: json.data.products.per_page,
                lastPage: json.data.products.last_page,
            },
            currentPage: currentPage,
        }
    }

    // state = {cardModeInline : false};

    switchCardMode (val){
        console.log('change state')
        console.log(val)
        // this.setState( {
        //     cardModeInline : this.cardModeInline
        // })
    }

    render () {
        const { router } = this.props
        const {cardModeInline} = this.state
        // console.log(this.props.currentPage, 'props')
        // console.log(cardModeInline, 'state')

        return (
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1><b>{this.props.category.value}</b></h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                                <li className="breadcrumb-item"><Link route='categories'><a>Categories</a></Link></li>
                                <li className="breadcrumb-item"><a>{this.props.category.value}</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">Header</div>
                                <div className="card-body text-primary">
                                    <h5 className="card-title">Primary card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">{this.props.paginate.total} Items found </span>
                                    <select className="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option>Cheapest</option>
                                    </select>
                                    <div className="btn-group">
                                        <button onClick={() => this.setState({ cardModeInline: false})}
                                                className={"btn btn-outline-secondary " + (cardModeInline ? "" : "active")}
                                                data-toggle="tooltip" title="meerdere items per rij"
                                                data-original-title="List view" >
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        <button onClick={() => this.setState({ cardModeInline: true})} data-toggle="tooltip"
                                                title="1 item per rij"
                                                className={"btn btn-outline-secondary " + (cardModeInline ? "active" : "")}
                                                data-original-title="Grid view">
                                            <i className="fa fa-th"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/*{JSON.stringify(this.cardModeInline)}*/}
                                {/*aa*/}
                                {this.props.products.map((p) =>
                                    (function () {
                                        if (cardModeInline) {
                                        // if (this.state.cardModeInline) {
                                            return (
                                                <div key={p.id} className="col-3">
                                                    <div className="card mb-4 ">
                                                        <style jsx>{`
                                                            img {
                                                              height: 120px;
                                                            } 
                                                        `}</style>
                                                    <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"/>
                                                    <div className="card-body">
                                                        <h4 className="card-title">{p.title}</h4>
                                                        <p className="card-text">{p.description}</p>
                                                        <p className="card-text">Prijs: &euro;{p.default_price.toFixed(2)}</p>
                                                        <Link route='product' params={{id: p.id}}>
                                                            <a className="btn btn-primary btn-block">bijken</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        } else {
                                            return (
                                                <div key={p.id} className="col-12">
                                                    <div className="card mb-4 ">
                                                        <style jsx>{`
                                                            img {
                                                              height: 200px;
                                                            } 
                                                            .card-body{
                                                                padding-right: 50px;
                                                            }
                                                        `}</style>
                                                        <div className="row">
                                                            <img className="card-img-top col-4" src="https://via.placeholder.com/150" alt="Card image cap"/>
                                                            <div className="card-body col-8">
                                                                <h4 className="card-title">{p.title}</h4>
                                                                <p className="card-text">{p.description}</p>
                                                                <p className="card-text">Prijs: &euro;{p.default_price.toFixed(2)}</p>
                                                                <Link route='product' params={{id: p.id}}>
                                                                    <a className="btn btn-primary btn-block">bijken</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })()


                                )}
                            </div>

                            <hr/>


                            <ul className="pagination">
                                {/*<li className="page-item  ">*/}
                                {/*/!*<li className="page-item disabled">*!/*/}
                                {/*    <Link>*/}

                                {/*        <a className="page-link" onClick={this.previousPage} >Previous</a>*/}
                                {/*    </Link>*/}
                                {/* </li>*/}
                                {/*<li className="page-item">*/}
                                {/*    <a className="page-link" href="#">1</a>*/}
                                {/*</li>*/}

                                {Array.apply(null, { length: this.props.paginate.lastPage }).map((e, i ) =>
                                    <li key={i} className={`page-item ${(this.props.currentPage == i+1) ? 'active' : null}`} >
                                        <Link scroll={false}  route='category' params={{id: this.props.url.query.id, page: i+1}}>
                                            <a onClick={this.handleClick} className="page-link">{i+1} {this.props.currentPage == i+1 ? <span className="sr-only">(current)</span> : ''}</a>
                                        </Link>
                                    </li>
                                )}

                                {/*<li className="page-item">*/}
                                {/*    <a className="page-link" href="#">Next</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>


                    </div>

                </div>

            </Layout>
        )
    }
}

export default withRouter(Categories)
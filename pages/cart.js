import Layout from '../layouts/Main';
import {Link} from "../routes";
import {Component} from "react";


class Cart extends Component {

    render () {
        return (
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>Winkelwagen</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                                <li className="breadcrumb-item"><a>Winkelwagen</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">
                                    <h2>Producten</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h2>Totaal: &euro;100</h2>
                                    <h3>Btw <small className="muted">(btw 21%)</small>: &euro;21</h3>
                                    <h3>totaal <small className="muted">(incl. btw)</small>: &euro;121</h3>
                                    <button className="btn btn-block btn-primary">betalen</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                </div>

            </Layout>
        );
    };
}

export default Cart;
import Layout from '../layouts/Main';
import {Link} from "../routes";

export default function About() {
    return (
        <Layout>
            <style  jsx>{`
                .faqHeader {
                    font-size: 27px;
                    margin: 20px 0px;
                }
                .card-block{
                    padding: 20px;
                }
                #accordion .card{
                    margin-bottom: 15px;
                }
            `}</style>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                            <li className="breadcrumb-item"><a>Faq</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="" id="accordion">
                            <h2 className="faqHeader">General questions</h2>
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                                           href="#collapseOne">Is account registration required?</a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="card-block">
                                        Account registration at <strong>PrepBootstrap</strong> is only required if you will be
                                        selling or buying themes.
                                        This ensures a valid communication channel for all parties involved in any transactions.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4>
                                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                                           href="#collapseTwo">Is account registration required?</a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse in">
                                    <div className="card-block">
                                        Account registration at <strong>PrepBootstrap</strong> is only required if you will be
                                        selling or buying themes.
                                        This ensures a valid communication channel for all parties involved in any transactions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>

        </Layout>
    );
}
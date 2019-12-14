import React from 'react'
import Layout from '../layouts/Main';
import {Link} from "../routes";
import SlideShow from "../components/SildeShow"

export default function Home() {

    return (
        <Layout>
            <div className="jumbotron">
                <div className="container">
                    <h1>Voorbeeld webshop</h1>
                    <h1>{process.env.TEST_VAR}</h1>
                    <h1>test</h1>
                    <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As
                        you scroll, it will remain fixed to the top of your browser's viewport.</p>

                    <Link route='home'>
                        <a className="btn btn-lg btn-primary" >Shop</a>
                    </Link>
                </div>
            </div>

            <div className="container">

                <p>This is the <b>Index</b> page</p>

                <div className="row">
                    <div className="col-4">

                        <div className="card">
                            <div className="card-body">
                                <h2>Categorieen</h2>
                                <ul>
                                    <li>sadasd</li>
                                    <li>sadasd</li>
                                    <li>sadasd</li>
                                    <li>sadasd</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <h2>Voorbeeld card</h2>
                                <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As
                                    you scroll, it will remain fixed to the top of your browser's viewport.</p>

                                <Link route='home'>
                                    <a className="btn btn-lg btn-primary" >Shop</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron">
                <style jsx>{`
                    .jumbotron {
                       margin-top: 50px;
                       margin-bottom: 50px;
                    }                
                `}</style>

                <div className="container">
                    <h2 className="text-center">populaire items</h2>
                    <p className="text-center">je ziet meer van merken die je volgt</p>
                    <div className="row">
                        <SlideShow></SlideShow>
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h3>product naam</h3>*/}
                        {/*            <p>product beschrijving</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h3>product naam</h3>*/}
                        {/*            <p>product beschrijving</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h3>product naam</h3>*/}
                        {/*            <p>product beschrijving</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h3>product naam</h3>*/}
                        {/*            <p>product beschrijving</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>

        </Layout>
    );
}
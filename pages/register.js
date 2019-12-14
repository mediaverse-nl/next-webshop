import Layout from '../layouts/Main';
import {Link} from "../routes";
import React from "react";

export default function Register() {
    return (
        <Layout>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1>Registreer uw account hier</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                            <li className="breadcrumb-item"><a>Registreren</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">

                                <form className="form-horizontal" method="post" action="#">
                                    <div className="form-group">
                                        <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                 <input type="text" className="form-control" name="name" id="name" placeholder="Enter your Name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="email" id="email" placeholder="Enter your Email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="username" id="username" placeholder="Enter your Username"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm
                                            Password</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <input type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm your Password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group ">
                                        <button type="button" className="btn btn-primary btn-lg btn-block login-button">
                                            Registreren
                                        </button>
                                    </div>
                                    <div className="login-register">
                                        <p className="text-center">
                                            heeft u al een account log dan
                                            <b>
                                                <Link route='login'>
                                                     <a> hier </a>
                                                </Link>
                                            </b>
                                            in
                                        </p>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                <hr/>

            </div>

        </Layout>
    );
}
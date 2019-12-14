import React, {Component} from 'react'
import AuthService from '../utils/AuthService'
import Layout from '../layouts/Main';

const auth = new AuthService('https://api.mediaverse-dev.nl')

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        if (auth.loggedIn()) {
            // this.props.url.replaceTo('/auth/dashboard')   // redirect if you're already logged in
        }
    }
    //polyfill, css, js functions als fetch
    handleSubmit (e) {
        e.preventDefault()
        // yay uncontrolled forms!
        auth.login(this.refs.email.value, this.refs.password.value)
            .then(res => {
                console.log('login function')
                console.log(res)
                // console.log(Promise.resolve(res))
                // console.log(res, 'res')
                // console.log('end login')

                // this.props.url.replaceTo('/auth/dashboard')
            })
            // .catch(e => console.log(e))  // you would show/hide error messages with component state here
    }

    render () {
        return (
            <Layout>
                <style jsx>{`
                   
                    .login-container {
                      margin-top: 10vh;
                      padding: 15px;
                      border: 1px solid #CCD1D1;
                      border-radius: 5px;
                      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                      // max-width: 50%;
                    } 
                    .ads {
                      background-color: #eee;
                      border-top-left-radius: 5px;
                      border-bottom-left-radius: 5px;
                      color: #fff;
                      // padding: 15px;
                      text-align: center;
                    } 
                    .ads h1 {
                      margin-top: 20%;
                    } 
                    #fl {
                      font-weight: 600;
                    } 
                    #sl {
                      font-weight: 100 !important;
                    } 
                    .profile-img {
                      text-align: center;
                    } 
                    .profile-img img {
                      border-radius: 50%;
                      /* animation: mymove 2s infinite; */
                    } 
                    @keyframes mymove {
                      from {border: 1px solid #F2F3F4;}
                      to {border: 8px solid #F2F3F4;}
                    } 
                    .login-form {
                      padding: 15px;
                    } 
                    .login-form h3 {
                      text-align: center;
                      padding-top: 15px;
                      padding-bottom: 15px;
                    } 
                    .form-control {
                      font-size: 14px;
                    } 
                    .forget-password a {
                      font-weight: 500;
                      text-decoration: none;
                      font-size: 14px;
                    } 
                `}</style>
                {/*<form onSubmit={this.handleSubmit} >*/}
                {/*    <input type="text" ref="email" value={'admin@admin.com'} />*/}
                {/*    <input type="password" ref="password"  />*/}
                {/*    <input type="submit" value="Submit"/>*/}
                {/*</form>*/}

                <div className="container ">

                    <br/>
                    <br/>
                    <hr/>

                    <div className="row">
                        <div className="col-md-6 ads">
                            <h1><span id="fl">Webshop Naam</span> <span id="sl">Logo </span></h1>
                        </div>
                        <div className="col-md-6 login-form">
                            <div className="profile-img">
                                {/*<img*/}
                                {/*    src=" "*/}
                                {/*    alt="profile_img" height="140px" width="140px;" />*/}
                            </div>
                            <h1 className="text-center">Inloggen</h1>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" placeholder="Gebruikersnaam" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="password" placeholder="Wachtwoord" />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Inloggen</button>
                                </div>
                                <div className="form-group forget-password">
                                    <p className="text-center"> <a href="#">Wachtwoord vergeten?</a></p>
                                </div>
                            </form>
                        </div>

                    </div>

                    <hr/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </Layout>
        )
    }
}

export default Login
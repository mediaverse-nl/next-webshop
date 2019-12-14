import Layout from '../layouts/Main';
import {Link} from "../routes";
import GoogleMapReact from 'google-map-react';
import {Component} from "react";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
    constructor (props) {
        super(props)
        this.state = {
            submitting: false,
            submitted: false
        }
    }

    submitForm (data) {
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            res.status === 200 ? this.setState({ submitted: true }) : ''
        })
    }

    static defaultProps = {
        api: 'AIzaSyCkb7vvU9U7_uvJxXdADV4P1BMZv_6Zfas',
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render () {
        const title = 'Contact Page'

        return (
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>Contact</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                                <li className="breadcrumb-item"><a>Contact</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    asd
                    <form>
                        {({ validateForm, getPayload }) => {
                            return (
                                <form className="board-form" onSubmit={e => {
                                    e.preventDefault()
                                    validateForm() && this.submitForm(getPayload())
                                }}>
                                    <h2>Contact</h2>
                                    <div className="f fw grid-row--s">
                                        <div className="mb1 pb05">
                                            <Input name="name" label="Name" required />
                                        </div>
                                        <div className="mb1 pb05">
                                            <Input name="email" label="Email" required />
                                        </div>
                                    </div>

                                    <ProgressButton
                                        className="button green"
                                        formNoValidate={true}
                                        inProgress={this.state.submitting}
                                        inProgressText='Submitting'
                                        isDone={this.state.submitted}
                                        isDoneText='Submitted'>
                                        Submit Form
                                    </ProgressButton>

                                </form>
                            )
                        }}
                    </form>

                    <p>This is the <b>Contact</b> page</p>

                    <div style={{ height: '200px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: this.props.api }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                     test2
                </div>
            </Layout>
        );
    };
}

export default Contact;
import Layout from '../layouts/Main';
import {Link} from "../routes";

export default function About() {
    return (
        <Layout>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1>About</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link route='home'><a>Home</a></Link></li>
                            <li className="breadcrumb-item"><a>About</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container">
                <p>This is the <b>About</b> page</p>
            </div>

        </Layout>
    );
}
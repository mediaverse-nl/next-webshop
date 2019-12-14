import {Link} from '../routes'

const linkStyle = {
    marginRight: 15
};

const Header = () => (

    <footer className="bg-dark text-white mt-4">

        <style jsx>{` 
            footer{
                position: absolute;
                bottom: 0; 
                width: 100%;
                height: 200px;
            }
        `}</style>

        <div className="container py-3">
            <div className="row">
                <div className="col-md-3">
                    <h5>Footer</h5>
                </div>
                <div className="col-md-3">
                    <Link route='home'>
                        <a style={linkStyle}>Home</a>
                    </Link>
                    <Link route='faq'>
                        <a style={linkStyle}>faq</a>
                    </Link>
                    <Link route="categories">
                        <a style={linkStyle}>Categories</a>
                    </Link>
                    <Link route="about">
                        <a style={linkStyle}>About</a>
                    </Link>
                    <Link route="contact">
                        <a style={linkStyle}>Contact</a>
                    </Link>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-6">I stay at the bottom of the viewport! <span className="small"><br/>Unless the page content pushes me further.</span>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3 text-right small align-self-end">©2017 Brand, Inc.</div>
            </div>
        </div>
    </footer>

);

export default Header;
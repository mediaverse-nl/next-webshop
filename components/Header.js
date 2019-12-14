import {Link} from '../routes'

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
            <Link route='home'>
                <a className="navbar-brand">
                    <img src="http://placehold.it/150x50?text=Logo" alt=""/>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link route='home'>
                            <a className="nav-link" style={linkStyle}>Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link route="categories">
                            <a  className="nav-link" style={linkStyle}>Categories</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link route="about">
                            <a className="nav-link"style={linkStyle}>About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link route="contact">
                            <a className="nav-link" style={linkStyle}>Contact</a>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link route="login">
                            <a className="nav-link" style={linkStyle}>Inloggen</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link route="register">
                            <a className="nav-link">Registreren</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link route="cart">
                            <a className="nav-link">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
                            <span className="header__price snipcart-total-price"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
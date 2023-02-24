import { Link } from "react-router-dom";

import Logo from '../../img/Logo.png';

const Navigation = () => {
    return (
        <nav>
            <img src={Logo} alt="Logo" />
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
        </nav>
    );
}

export default Navigation;
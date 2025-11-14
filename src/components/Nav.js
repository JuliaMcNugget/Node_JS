import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/store">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    );
}
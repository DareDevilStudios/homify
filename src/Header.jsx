import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <nav className="navbar bg-secondary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <span className="text-white navbar-brand mb-0 h1 fs-2">Contacts</span>
                <div className="d-flex">
                    <Link to="/" className="btn btn-outline-info me-3">Home</Link>
                    <Link to="/addcontacts" className="btn btn-outline-info me-3">Add new contact</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;
import React from "react";
import { Link } from "react-router-dom"

const Contact = ({contact,deleter}) => {

    const deleted = (id) => {
        deleter(id)
    }

    return (

        contact.map((cont) => (
            <div className="card mt-4 ms-3" style={{width:"18rem"}}>
                <div className="card-body">
                    <Link to={`/details/${cont.id}`} state={{contact:contact}}>
                        <h5 className="card-title">{cont.name}</h5>
                        <p className="card-text">{cont.email}</p>
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleted(cont.id)}>Delete</button>
                </div>
            </div>
            
        ))

     );
}
 
export default Contact;
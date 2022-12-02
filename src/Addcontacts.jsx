import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Addcontacts = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const add = (e) => {
        e.preventDefault()
        // console.log(name)
        // console.log(email)
        props.adder(name, email)
        alert("new contacts are added")
        navigate('/')
    }

    return ( 
        <div className="w-25 mx-auto mt-5">
            <form onSubmit={add}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
     );
}
 
export default Addcontacts;
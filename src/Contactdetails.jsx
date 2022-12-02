import React from 'react'
import nature from './image.jpg'
import { useLocation,useParams } from 'react-router-dom'

const Contactdetails = (props) => {
    const location = useLocation()
    const contact = location.state.contact
    console.log(location)
    const {id} = useParams()
    console.log(id)
    const result = contact.filter((cont) => {
        if(cont.id === id)
            return cont
    })
    console.log(result);
  return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '100vh'}}>
        <div className="card" style={{width: "18rem"}}>
            <img src={nature} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{result[0].name}</h5>
                <p className="card-text">{result[0].email}</p>
            </div>
        </div>
    </div>
  )
}

export default Contactdetails

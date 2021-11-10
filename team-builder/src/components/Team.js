import React from 'react'


export default function team(props) {
    const { details } = props
    return (
        <div className='container'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
    
}

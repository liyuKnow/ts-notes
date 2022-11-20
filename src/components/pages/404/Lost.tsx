import React from 'react'
import { Navigate } from 'react-router-dom'

const Lost = () => {
    return (
        <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
            <h1 className=''>You Are Lost</h1>
            <p>Return Home</p>
            <a href='/' className="btn btn-info">Go Back To Home</a>
        </div>
    )
}

export default Lost
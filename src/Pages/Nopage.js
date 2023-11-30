import React from 'react'
import { Link } from 'react-router-dom';

function Nopage() {
  return (
    <section className='page-section cta text-center'>
        <h1>404 page Not found</h1>
        <p>Sorry this page does not exist </p>
        <Link to="/" className='text-info'>Go Back to Home</Link>
    </section>
  )
}

export default Nopage;
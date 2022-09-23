// eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='text-center'>
      <nav className="navbar navbar-expand-lg fixed-top py-0 navbar-dark bg-dark " id='navbar'>
        <Link className="navbar-brand text-danger font-weight-bold" to="/">Goat</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Shop<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/dailydeals">Daily Deals</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/offerzone">Offer Zone</Link>
            </li>
            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul className="dropdown-menu bg-dark text-white" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item text-white" >Gifting</Link></li>
            <li><Link className="dropdown-item text-white" >Blog</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item text-white" >Earn Rs.100</Link></li>
          </ul>
        </li>
          </ul>
          <form className="form-inline my-0 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav></div>
  )
}

export default Header
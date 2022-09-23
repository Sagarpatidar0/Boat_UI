// eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='text-center'>
      <nav className="navbar navbar-expand-lg fixed-top py-0 navbar-dark bg-dark " id='navbar'>
        <Link className="navbar-brand text-danger font-weight-bold" to="/">Goat</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
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
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu bg-dark text-white" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item text-white" href="#">Gifting</a></li>
            <li><a class="dropdown-item text-white" href="#">Blog</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item text-white" href="#">Earn Rs.100</a></li>
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
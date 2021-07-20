import React from 'react';
import logo from '../../images/logo-1.svg';
import "./style.css"

const Topbar = () => {
    return ( 
      <header>
        <nav style={{backgroundColor:"#032541",height: "70px",padding: "0 7rem"}} className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/#"><img style={{width:"150px"}} src={logo} alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
     );
}
 
export default Topbar;
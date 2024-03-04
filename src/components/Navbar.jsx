// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from  '../assets/logo-3G7yoXPE.jpg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav_main">
        <div className="container-fluid px-md-5 px-4 mx-md-3">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categorias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true" href='#'>Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href='#'>Contatos</a>
              </li>
            </ul>
            <form className="d-flex nav-last" role='search'>
                  
                      <i className='fa-solid fa-magnifying-glass '
                      >
                      </i>
              <i className='fa-solid fa-user'></i>
              
              <i className='bx bxs-shopping-bag' ></i>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

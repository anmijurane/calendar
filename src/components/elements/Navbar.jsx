import React from 'react'
import { IoMdExit } from 'react-icons/io';

export function Navbar() {
  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-start">
            <a className="navbar-item">
              Andres Jurado
            </a>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-danger">
                <IoMdExit className='mr-2' />
                <strong>Exit</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Perpustakaan</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Pengunjung</Link>
            </li>
            <li className="navbar-item">
              <Link to="/vendors" className="nav-link">Buku</Link>
            </li>
            <li className="navbar-item">
              <Link to="/add-product" className="nav-link">Add Pengunjung</Link>
            </li>
            <li className="navbar-item">
              <Link to="/add-vendor" className="nav-link">Add Buku</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
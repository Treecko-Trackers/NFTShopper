<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
=======
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
>>>>>>> d9d315aea62c4e17e77532d1e963d67b4463674e

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>NFT Shopper</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>

          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">Cart</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}

          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">Cart</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

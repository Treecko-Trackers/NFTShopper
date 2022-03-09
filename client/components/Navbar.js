import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { fetchUsers } from '../store/users';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ handleClick, isLoggedIn }) => {
  const dispatch = useDispatch();
  const { username, isAdmin } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>NFT Shopper</h1>
      <nav>
        {!isLoggedIn ? (
          <div>
            {/* The navbar will show these links before you log in */}

            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">Cart</Link>
          </div>
        ) : isAdmin ? (
          <div>
            <h2>hello Admin {username}</h2>
            <Link to="/nfts">Home</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/nfts">Nfts</Link>
            <Link to="/test"></Link>
            <Link to="/cart">Cart</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <h2>Hello, {username}</h2>
            {/* The navbar will show these links after you log in */}
            <Link to="/nfts">Home</Link>
            <Link to="/cart">Cart</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

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

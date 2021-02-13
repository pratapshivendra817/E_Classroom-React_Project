import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../actions/auth';
import { Navbar, Nav } from 'react-bootstrap';

class Navbarr extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  render() {
    const { auth } = this.props;

    return (
      <Navbar bg='light' variant='light'>
        <Navbar.Brand>E-Classroom</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
        <Nav className='ml-auto'>
          {auth.isLoggedin && (
            <Nav.Link href='/profile'>
              <img
                src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                alt='user-dp'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />

              {auth.user.name}
            </Nav.Link>
          )}

          {!auth.isLoggedin && <Nav.Link href='/login'>Log-in</Nav.Link>}

          {auth.isLoggedin && (
            <Nav.Link onClick={this.logOut}>Log-out</Nav.Link>
          )}

          {!auth.isLoggedin && (
            <Nav.Link href='/signup'>Create-account</Nav.Link>
          )}
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbarr);
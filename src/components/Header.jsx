import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-dark p-3">
        <Container>
          <Navbar.Brand>
          <h4 className='text-warning'>
              <FontAwesomeIcon beat icon={faVideo} className='me-3' />
                Media Player
          </h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header

import { Container, Navbar, Nav, Form, Row, Col } from 'react-bootstrap';

import { Streamer } from '../../Images/Logo/streamer.svg';
import { useState } from 'react';


export default function NavigationBar() {

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        windows.loaction = '/search?q=${query}';
    }

    return(
        <Navbar expand='sm' className='navbar-dark stiky-top'>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src={Streamer} alt='Streamer+' className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll>
            <Nav.Link href="trending/tv/week">Tv Shows</Nav.Link>
            <Nav.Link href="trending/movies/week">Movies</Nav.Link>
          </Nav>
          <Form className='search' onSubmit={handleSubmit}> 
            <Row>
                <Col>
                    <Form.Control type='text' placeholder='Search' className='mr-sm-2' onChange= {e} => setQuery(e.target.value)}/>
                </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
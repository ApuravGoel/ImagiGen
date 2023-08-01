import logo from './logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand><Link style={{color:'inherit',textDecoration:'none'}}to={'/'}><img style={{height:'70px',width:'90px'}}src={logo}/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link style={{color:'inherit',textDecoration:'none'}}to={'/Create'} ><Button variant="primary">Create</Button>{' '}</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{padding : '50px'}}>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/Create'} element={<Create/>}/>
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



const Header = () => {
  return (
    <>
      <Navbar bg="light" className="skicky">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="../images/icon/logo.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="" href="#home">
                <img src="../images/icon/home.png" 
                width="30" 
                height="30"></img>
              </Nav.Link>
              <Nav.Link className="me-2" href="#following">
                {" "}
                <img
                  src="../images/icon/following.png"
                  width="30"
                  height="30"
                ></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

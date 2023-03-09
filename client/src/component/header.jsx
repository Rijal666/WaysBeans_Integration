import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cssModules from "./App.module.css";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NavDropdown,Dropdown, Badge } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';



function BasicExample() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // const [totalQty, setTotalQty] = useState(0);


  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  const handleToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  }
  const handleToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  }
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  // handle login
  let dataLogin = {
    email:"",
    password:""
  }
  // const cekuser=localStorage.getItem("loginUser")
  const [loginUser, setLoginUser] = useState({})
  useEffect(()=> {
    const cekuser = JSON.parse(localStorage.getItem("loginUser")) || {};
    setLoginUser(cekuser);
  },[])

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(
      (user) =>user.email === dataLogin.email && user.password === dataLogin.password
    );


    console.log(user)
    if(!user) {
      alert("user not found");
    }else {
      localStorage.setItem("loginUser",JSON.stringify(user))
      setLoginUser(user);
      // setLogin(true);
      handleClose(true);
      window.location.reload()
    }
  }

  // handle register 
  let dataRegister = {
    email:"",
    password:"",
    fullname:""
  }

  const handleRegister = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(dataRegister);
    localStorage.setItem("users", JSON.stringify(users));
    handleCloseRegister(true);
  };

    // LOGOUT
  const Navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem("loginUser")
    setLoginUser({})
    // setLogin({});
    Navigate ("/")
    window.location.reload()
  }
  return (
<>
  {/* navbar */}
    <Navbar bg="light" expand="lg" className={cssModules.con}>
      <Container >
        <Navbar.Brand href="/">
          <img src='/img/icon.png' alt='...' className={cssModules.icon}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={cssModules.Btn}>
            {!loginUser?.email ? (
              <>
                    <button onClick={handleShow}>Login</button>
                    <button className={cssModules.tol} onClick={handleShowRegister}>Register</button>
              
              </>
                  ) : loginUser.email === "asep@gmail.com" ? (
                    <>
                  <Nav style={{marginRight:"50px"}}>
                  <NavDropdown title={<img src='/img/Ellipse 1.png' alt='#' className={cssModules.icon2}/>}>
                  <Dropdown.Item href='/Add_Product'><img src='/img/Bean.png' alt='#'/><span>Add Product</span></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='/List_Product'><img src='/img/Bean.png' alt='#'/><span>List Product</span></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}><img src='/img/logout 1.png' alt='#'/><span>Logout</span></Dropdown.Item>
                  </NavDropdown>
                  </Nav>
                    </>
            ) : (
              <>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="ms-auto" style={{marginRight:"50px", gap:"30px"}}>
                  <Nav.Link href="/cart" >
                    <div style={{display:"flex"}}>
                    <img src='/img/Vector.png' alt='#'className={cssModules.icon2}/>
                    <Badge pill className="bg-danger" style={{
                      width:"10px",
                      height:"16px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      position:"absolute",
                      right:"225px",
                      top:"20px"
                    }}>99</Badge>
                    </div>
                  </Nav.Link>
                  <NavDropdown title={<img src='/img/Ellipse 1.png' alt='#' className={cssModules.icon2}/>}>
                  <Dropdown.Item href='/Detail_Profile'><img src='/img/Bean.png' alt='#'/><span>Profile</span></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}><img src='/img/logout 1.png' alt='#'/><span>Logout</span></Dropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  {/* modal login */}
    <Modal show={showLogin} onHide={handleClose} centered>
      <Modal.Title className={cssModules.header}>Login</Modal.Title>
    <Modal.Body>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Email"
            autoFocus style={{padding: "10px", backgroundColor:"#d7cfca"}}
            onChange={(e) => (dataLogin.email = e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
          type="password"
          placeholder="password"
          autoFocus style={{padding: "10px", backgroundColor:"#d7cfca"}}
          onChange={(e) =>(dataLogin.password = e.target.value)}
        />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleLogin} className={cssModules.btn} >
        Login
      </Button>
      <p className='w-100 d-flex justify-content-center' style={{gap: "3px"}}>
        Don't have an account ? klik <Button variant="link" onClick={handleToRegister} style={{textDecoration: "none", color: "black", fontWeight: "700",paddingTop: "0px", paddingLeft:"0px"}}>Here</Button>
      </p>
    </Modal.Footer>
  </Modal>

  {/* modal register */}

    <Modal show={showRegister} onHide={handleCloseRegister} centered>
      <Modal.Title className={cssModules.header}>Register</Modal.Title>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Email"
            autoFocus style={{padding: "10px", backgroundColor:"#d7cfca"}}
            onChange={(e) => (dataRegister.email = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
          type="password"
          placeholder="password"
          autoFocus style={{padding: "10px", backgroundColor:"#d7cfca"}}
          onChange={(e) => (dataRegister.password = e.target.value)}
        />
        </Form.Group>
        <Form.Group>
          <Form.Control
          type="text"
          placeholder="Full Name"
          autoFocus style={{padding: "10px", backgroundColor:"#d7cfca"}}
          onChange={(e) => (dataRegister.fullname = e.target.value)}
        />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleRegister} className={cssModules.btn} >
        Register
      </Button>
      <p className='w-100 d-flex justify-content-center' style={{gap: "3px"}}>
        Already have an account ? klik <Button variant="link" onClick={handleToLogin} style={{textDecoration: "none", color: "black", fontWeight: "700",paddingTop: "0px", paddingLeft:"0px"}}>Here</Button>
      </p>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default BasicExample;
import {Navbar, Container, Nav} from "react-bootstrap"
import * as React from "react";
import {useNavigate} from "react-router-dom"
import {useAuth} from "./hooks/useAuth";
import {useAppDispatch} from "./store/hooks";
import {logout} from "./store/user/userSlice"
import {removeToken} from "./helpers/localstorage.helper";


const Header = () =>{
    const isAuth = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        removeToken('token')
        navigate('/')
    }

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Test Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="main">Main</Nav.Link>
                            {isAuth ? (
                                <>
                                    <Nav.Link href="profile">Profile</Nav.Link>
                                    <Nav.Link onClick={logoutHandler}>Log out</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link href="auth">Log in</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )

}

export default Header
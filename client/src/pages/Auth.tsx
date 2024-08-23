import {FC, useState} from "react";
import {Button, Col, Container, Form, NavLink, Row} from "react-bootstrap";
import {AuthService} from "../services/auth.service";
import * as React from "react";
import {setToken} from "../helpers/localstorage.helper";
import {useAppDispatch} from "../store/hooks";
import {login} from "../store/user/userSlice"
import {useNavigate} from "react-router-dom"

const Auth: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLogined, setIsLogined] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.registration({ email, password })
            if (data){
                alert('User is successfully Registered!')
                setIsLogined(!isLogined)
            }
        } catch (err: any){
            const error = err.response?.data.message
            alert(error.toString())
        }
    }

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) =>{
        try {
            e.preventDefault()
            const data = await AuthService.login({ email, password })
            if (data){
                setToken('token', data.token)
                dispatch(login(data))
                console.log(data)
                alert("Success login!")
                navigate("/")
            }
        } catch (err: any){
            const error = err.response?.data.message
            alert(error.toString())
        }
    }

    return (
        <Container>
            <Row >
                <h1 className="d-flex justify-content-md-center mt-5">
                    {isLogined ? 'Login' : 'Registration'}
                </h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form onSubmit={
                        isLogined ? loginHandler : registerHandler
                    }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                          onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br/>
                        {!isLogined ? (
                            <Button variant="link" onClick={() => setIsLogined(!isLogined)}>Already have an account?</Button>

                        ) : (
                            <Button variant="link" onClick={() => setIsLogined(!isLogined)}>Don't you have an account?</Button>
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>)
}

export default Auth;
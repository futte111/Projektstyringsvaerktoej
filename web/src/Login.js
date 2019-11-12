import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import {withRouter} from "react-router-dom";
import {observer} from "mobx-react";


const Login = withRouter(({history, match}) => {
    return(
        <div className="login">
            <Container>
                <Row>

                    <Col>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand >Login</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Navbar>
                    </Col>

                </Row>
                <Row>
                    <Col>{/*1 of 3*/}

                    </Col>
                    <Col xs={6}>{/*2 of 3*/}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={()=>history.push("/stakeholdercomponent")}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col>{/*3 of 3*/}

                    </Col>
                </Row>
            </Container>
        </div>
    )
});

export default observer(Login)
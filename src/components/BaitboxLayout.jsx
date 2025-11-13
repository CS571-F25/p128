import React, { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";

function BaitboxLayout() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="guides">Guides</Nav.Link>
                        <Nav.Link as={Link} to="LiscencesAndRules">Liscences & Rules</Nav.Link>
                        <Nav.Link as={Link} to="Bookmarks">Bookmarks</Nav.Link>
                        <Nav.Link as={Link} to="ProgressTracker">Progress tracker</Nav.Link>
                        <Nav.Link as={Link} to="Tournaments">Tournaments</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default BaitboxLayout;
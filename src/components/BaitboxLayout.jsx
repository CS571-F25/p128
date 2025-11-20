import React, { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";

function BaitboxLayout() {
    return (
        <div>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Badger Baitbox
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="Guides">Guides</Nav.Link>
                        <Nav.Link as={Link} to="LicensesAndRules">Licenses & Rules</Nav.Link>
                        <Nav.Link as={Link} to="Bookmarks">Bookmarks</Nav.Link>
                        <Nav.Link as={Link} to="ProgressTracker">Progress tracker</Nav.Link>
                        <Nav.Link as={Link} to="Tournaments">Tournaments</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div 
                style={{
                    addingTop: "80px",
                    paddingInline: "1rem"
                }}>
                <Outlet/>
            </div>
        </div>
    );
}

export default BaitboxLayout;
import { Card, Button, Row, Container, Col } from 'react-bootstrap'
import { Link } from "react-router";

import './Home.css';  

export default function Home (props){
    return <div className="home-root">
        <Container>
            <Row xs={1} md={2} lg={3} className="home-hero-row">
                <Col>
                    <div className="home-hero-text">
                        <h1 className="home-hero-title">Welcome to Badger Baitbox!</h1>
                        <p className="home-hero-subtitle">On this site you can:</p>
                        <ul className="home-hero-list">
                            <li>Read Guides to learn Fishing</li>
                            <li>Signup for listed Tournaments</li>
                        </ul>
                        <div style={{display: "flex"}} className="home-hero-buttons">
                            <Button as={Link} to="/Guides/basics">Learn the basics</Button>
                            <Button as={Link} to="/LicensesAndRules">Check out the rules</Button>
                            <Button as={Link} to="/Tournaments">Signup for Tournaments</Button>
                        </div>
                    </div>

                </Col>
                <Col>
                <Card className="home-hero-image-card"><img src="HomeBass.png"></img></Card>
                </Col>
            </Row>
        </Container>
        <div className="home-section">
            <h2 className="home-section-title">What you'll find inside</h2>
            <Row>
                <Col>
                    <p className="home-feature-label">Learn the basics:</p>
                    <Card className="home-feature-card">
                        <p>Short, beginner friendly guides to rods, lures, and simple rigs</p>
                        <Button variant="primary" as={Link} to="/Guides">Go to Guides</Button>
                    </Card>
                </Col>
                <Col>
                    <p className="home-feature-label">Know the rules:</p>
                    <Card className="home-feature-card">
                        <p>A quick overview of seasons, limits, and license types</p>
                        <Button variant="primary" as={Link} to="/LicensesAndRules">See Rules</Button>
                    </Card>
                </Col>
                <Col>
                    <p className="home-feature-label">Test your skills:</p>
                    <Card className="home-feature-card">
                        <p>Mock tournaments to register with</p>
                        <Button variant="primary" as={Link} to="/Tournaments">See Tournaments</Button>
                    </Card>
                </Col>
            </Row>
            <Container className="home-why">
                <h3>Why fishing in Wisconsin?</h3>
                <p>Fishing in Wisconsin is a tradition and well known. There are many different lakes, rivers, 
                    and locations to fish in. With these different locations, there is a large variety of 
                    different fish.</p>
            </Container>
        </div>

    </div>
}
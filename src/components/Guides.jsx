import { Card, Button, Row, Container, Col } from 'react-bootstrap'
import { Link } from "react-router";

import { guides } from "./Guides/guidesData";
import './Guides/Guides.css';  

export default function Guides(props) {
    return (
        <div>
            <h1>Guides</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {guides.map(guide => (
                        <Col key ={guide.id}>
                            <Card className="guide-card" style={{ backgroundImage: `url("${guide.image}")`}}>
                                <div className="overlay"></div>
                                <Card.Body className="card-content">
                                    <Card.Title style={{color: "#F2F2F2"}}>{guide.title}</Card.Title>
                                    <Card.Text style={{color: "#E6E6E6"}}>{guide.summary}</Card.Text>
                                    <Button as={Link} to={`/Guides/${guide.id}`} variant="light">Read Guide</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <p>Will add more guides later</p>
            </Container>
        </div>
    );
}
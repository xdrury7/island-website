import { Col, Container, Card, Row, Button, } from "react-bootstrap";
import Resort from '../images/resort.jpg'
import Hostel from '../images/hostel.jpeg'
import BnB from '../images/bed-and-breakfast.jpg'

export function Accomadation() {

    return (
        <Container>
            <div id="resort">
                <Row className="my-4">
                    <Col>
                        <Card>
                            <Row className="g-0">
                                <Col md={6}>
                                    <Card.Img src={Resort} className="h-100 object-fit-cover" />
                                </Col>
                                <Col md={6}>
                                    <Card.Body>
                                        <Card.Title>Tanitis 4 star resort</Card.Title>
                                        <Card.Text>
                                        Indulge in the ultimate escape at our four-star oceanfront resort, where pristine beaches meet unparalleled luxury. Each meticulously designed suite offers breathtaking views of Yellow Leaf Bay, while our world-class amenities ensure every moment of your stay is nothing short of extraordinary.
                                        </Card.Text>
                                        <Button variant="dark" className="me-2">Book Now</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div id="other-options">
                <Row className="my-5">
                    <Col>
                        <h2 className="text-center mb-4">Local Hotels and Bed n' Breakfasts</h2>
                    </Col>
                </Row>
            </div>

            <Row lg={2}>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={Hostel} />
                            <Card.Body>
                                <Card.Title>Hotels</Card.Title>
                                <Card.Text>
                                Small, family-owned hotels
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={BnB} />
                            <Card.Body>
                                <Card.Title>Bed and Breakfasts</Card.Title>
                                <Card.Text>
                                Local and Affordable
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>

            <Card className="mt-4 text-muted">
              <Card.Body>
                <em>Note: All types of lodging are strictly regulated and regularly inspected by the Tanitian government.</em>
              </Card.Body>
            </Card>
        </Container>
    );
}
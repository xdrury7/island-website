import { Col, Container, Row, Card } from "react-bootstrap";
import CustomNavbar from '../components/custom_nav'

export function Travel() {

    return (
        <Container>
            <div id="travel-to">
                <Row className="my-4">
                    <Col>
                        <h1>Travel accommodations to Taniti</h1>
                    </Col>
                </Row>
            </div>

            <Row className="my-4">
                <Col>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-airplane me-2"></i>
                                Airplane
                            </Card.Title>
                            <Card.Text>
                            Taniti is served by a small airport that can accommodate small jets and propeller planes.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-water me-2"></i>
                                Cruise Ship
                            </Card.Title>
                            <Card.Text>
                            Cruise ship that docks in Yellow Leaf Bay for one night per week
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-building me-2"></i>
                                Full Size Airport coming soon
                            </Card.Title>
                            <Card.Text>
                            Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div id="get-around">
                <Row className="my-5">
                    <Col>
                        <h2>Getting Around in Taniti</h2>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-car-front me-2"></i>
                                Rental Car
                            </Card.Title>
                            <Card.Text>
                            Rental cars can be rented from a local rental agency near the airport.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-bus-front me-2"></i>
                                Public Bus Transportation
                            </Card.Title>
                            <Card.Text>
                            Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-bicycle me-2"></i>
                                Bike
                            </Card.Title>
                            <Card.Text>
                            Bikes and helmets are available to rent from several vendors (helmets are required by law)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-person-walking me-2"></i>
                                Walking
                            </Card.Title>
                            <Card.Text>
                            Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
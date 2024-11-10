import { Col, Container, Row, Image, Card} from "react-bootstrap";
import Taniti from "../images/Taniti.jpg"


export function Home() {

    return (
        <Container>
          <Row className="my-5">
            <Col md={8}>
              <Image src={Taniti} fluid className="w-100" />
              <div className="my-4">
                <p>Welcome to Taniti, a hidden gem in the Pacific where pristine beaches meet lush rainforests and ancient traditions blend with modern comfort. Our intimate island paradise, spanning less than 500 square miles, offers everything from white sandy beaches along Yellow Leaf Bay to an active volcano nestled in our mountainous interior. Whether you're seeking adventure in our tropical rainforests, wanting to explore local culture in Taniti City, or looking to unwind at one of our diverse accommodations—from luxury resorts to charming bed & breakfasts—you'll find your perfect escape here. The heart of island life beats strongest in Merriton Landing, our vibrant tourist district, where traditional Pacific hospitality meets contemporary entertainment and dining options.</p>
              </div>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Header>Current Weather in Taniti</Card.Header>
                <Card.Body>
                  <div id="weather-widget">
                    <h3>75°F</h3>
                    <p>Partly Cloudy</p>
                    <p>Humidity: 65%</p>
                    <p>Wind: 8 mph</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
}
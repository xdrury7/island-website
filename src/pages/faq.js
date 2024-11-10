import { Container, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import Island from '../images/faq-island.jpg'
import { alignPropType } from 'react-bootstrap/esm/types';

export function FAQ() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center mb-4">FAQs</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Image src={Island} fluid className="w-50 mb-4" style={{ alignItems: 'center' }} />
          <Container className="py-5">
            <h1 className="text-center mb-4">Frequently Asked Questions</h1>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What type of power outlets does Taniti use?</Accordion.Header>
                <Accordion.Body>
                  All power outlets on the island are 120 volts, the same as in the United States.
                  No adapters are needed for U.S. visitors.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>What currency is accepted on Taniti?</Accordion.Header>
                <Accordion.Body>
                  The U.S. dollar is our official currency. Most businesses also accept euros and yen,
                  and major credit cards are widely accepted. Currency exchange services are available
                  at several local banks.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>What languages are spoken on Taniti?</Accordion.Header>
                <Accordion.Body>
                  English is commonly spoken by younger Tanitians, especially in tourist areas.
                  However, in rural areas and among older residents, English is less common.
                  Our hospital staff includes many multilingual employees to assist visitors.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>What are the alcohol regulations?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Legal drinking age is 18</li>
                    <li>No alcohol sales or service between midnight and 9:00 a.m.</li>
                    <li>Note: While the drinking age exists, enforcement is relatively relaxed</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>What medical facilities are available?</Accordion.Header>
                <Accordion.Body>
                  Taniti has one main hospital and several medical clinics throughout the island.
                  The hospital is staffed with multilingual personnel to assist international visitors.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>How safe is Taniti?</Accordion.Header>
                <Accordion.Body>
                  Taniti is generally very safe with very low rates of violent crime. However,
                  with increasing tourism, visitors should be aware of occasional petty crimes
                  like pickpocketing, particularly in busy tourist areas.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>Are businesses always open?</Accordion.Header>
                <Accordion.Body>
                  Taniti observes numerous national holidays during which many tourist attractions
                  and restaurants close. We recommend checking local holiday schedules when planning
                  your visit to avoid disappointment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>What food is available on the Island?</Accordion.Header>
                <Accordion.Body>
                Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Are the markets on Taniti?</Accordion.Header>
                <Accordion.Body>
                Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Card className="mt-4 text-muted">
              <Card.Body>
                <em>Note: This information is subject to change. Please verify crucial details
                  with local authorities or your accommodation provider upon arrival.</em>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
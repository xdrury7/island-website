import { Col, Container, Row, Card } from "react-bootstrap";
import CustomNavbar from '../components/custom_nav'
import Bowling from '../images/bowling.jpeg'
import BoatTour from '../images/boat-tour.jpeg'
import RainForest from '../images/rainforest.jpeg'
import Relax from '../images/relax.jpg'
import Volcano from '../images/volcano.jpeg'
import FishingTour from '../images/fishing-tour.jpeg'
import DanceClub from '../images/danceclub.jpg'
import Micro from '../images/microbrewery.jpeg'
import Snorkel from '../images/snorkeling.jpg'
import ZipLine from '../images/zipline.jpg'
import History from '../images/history-museum.jpeg'
import Art from '../images/art.jpg'
import Arcade from '../images/arcade.jpg'
import Archi from '../images/archi.jpg'
import Helo from '../images/heli-tour.jpg'
import Movies from '../images/movies.png'
import Golf from '../images/golf.jpeg'

export function Activities() {

    const activities = [
        {
            title: "Beach Relaxation",
            image: Relax,
            description: "Enjoy white sandy beaches that encircle Yellow Leaf Bay, perfect for swimming, sunbathing, and relaxation.",
            price: "FREE"
        },
        {
            title: "Rainforest Exploration",
            image: RainForest,
            description: "Discover the lush tropical rainforest with marked trails and abundant wildlife.",
            price: "FREE"
        },
        {
            title: "Volcano Visit",
            image: Volcano,
            description: "Experience Taniti's active volcano with guided viewing areas and educational displays.",
            price: "$25 per person"
        },
        {
            title: "Local History Museum",
            image: History,
            description: "Learn about Taniti's rich cultural heritage and history through interactive exhibits.",
            price: "$10 per person"
        },
        {
            title: "Chartered Fishing Tours",
            image: FishingTour,
            description: "Experience deep-sea fishing with experienced local guides in the Pacific waters.",
            price: "$150 per person"
        },
        {
            title: "Snorkeling Adventures",
            image: Snorkel,
            description: "Explore vibrant coral reefs and tropical fish in crystal-clear waters.",
            price: "$45 per person"
        },
        {
            title: "Rainforest Zip-lining",
            image: ZipLine,
            description: "Soar through the canopy on exciting zip-line courses with spectacular views.",
            price: "$75 per person"
        },
        {
            title: "Microbrewery Tour",
            image: Micro,
            description: "Sample local craft beers and learn about the brewing process at our island microbrewery.",
            price: "$20 per person"
        },
        {
            title: "Dance Club",
            image: DanceClub,
            description: "Experience nightlife at our newest dance venue with local and international music.",
            price: "$15 cover charge"
        },
        {
            title: "Movie Theater",
            image: Movies,
            description: "Watch the latest releases in air-conditioned comfort.",
            price: "$12 per person"
        },
        {
            title: "Helicopter Tours",
            image: Helo,
            description: "See Taniti's stunning landscape from above with breathtaking aerial views.",
            price: "$200 per person"
        },
        {
            title: "Arcade Gaming",
            image: Arcade,
            description: "Family fun with classic and modern arcade games in Merriton Landing.",
            price: "Pay per game"
        },
        {
            title: "Art Gallery Tours",
            image: Art,
            description: "Explore local and international art exhibits in various galleries.",
            price: "FREE"
        },
        {
            title: "Bowling",
            image: Bowling,
            description: "Modern bowling facility perfect for family entertainment.",
            price: "$8 per game"
        },
        {
            title: "Island Boat Tours",
            image: BoatTour,
            description: "Scenic boat tours around the island with stops at key viewing points.",
            price: "$65 per person"
        },
        {
            title: "Native Architecture Walking Tour",
            image: Archi,
            description: "Self-guided tours of Taniti City's unique traditional architecture.",
            price: "FREE"
        },
        {
            title: "Coming Soon: Golf",
            image: Golf,
            description: "Nine-hole golf course with ocean views, opening next year.",
            price: "TBD"
        }
    ];

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1 className="text-center mb-4">ACTIVITIES</h1>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={3} className="g-4">
                {activities.map((activity, idx) => (
                    <Col key={idx}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={activity.image} />
                            <Card.Body>
                                <Card.Title>{activity.title}</Card.Title>
                                <Card.Text>{activity.description}</Card.Text>
                                <Card.Text className="fw-bold">{activity.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
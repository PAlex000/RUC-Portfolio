import Container from "react-bootstrap/Container";
import Navigation from "../layout/Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import user_picture from "../../assets/user_icon.png";
import online from "../../assets/online.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {ArrowRight} from "react-bootstrap-icons";
import { MdOutlineCake } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFemale } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import CardComp from "../common/CardComp";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";

const movieData = [
  {
    id: 1,
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 2,
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 3,
    title: "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
  {
    id: 4,
    title: "Hunger Games",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: hunger_games,
  },
  {
    id: 5,
    title: "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
]

const backgroundContainer = {
  backgroundColor: "#000",
};

const imgPicture = {
  width: 171,
  height: 181,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  margin: "2rem 0",
}


const cardHeader = {
  backgroundColor: "#676767",
  color: "#FFFFFF"
}

const cardBody = {
  backgroundColor: "#303030"
}

const cardText = {
  color: "#FFFFFF",
  fontSize: "20px"
}

const buttonFont = {
  fontSize: "20px"
}

const secondContainer = {
  backgroundColor: "#D9D9D9"
}


const ProfileSettings = () => {

  return <>
      <Container className="px-1" fluid style={backgroundContainer}>
        <Navigation />
        <Row className="justify-content-md-center">
          <Col className="p-5 text-center">

          <img src={user_picture} style={imgPicture}/>
          
          <h1 style={{
            color: "#FFFFFF",
            fontSize: "50px",
            marginBottom: "2rem"
          }}>FILOFTEA-BIANCA GRECU</h1>

          <p style={{
            fontSize:"25px",
            color:"#FFFFFF",
          }}>
            <img src={online} width={23} height={23} style={{
            margin: "0 0.5rem"
          }}/> Online</p>
          </Col>
        </Row>
        
        <Row className="justify-content-evenly mt-5">
          <Col md={4} className="g-2">
            <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">About You</Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mt-4"><MdOutlineCake className="mx-3"/>Born October 11th</Card.Text>
                <Card.Text style={cardText}><IoLocationOutline className="mx-3" />Denmark</Card.Text>
                <Card.Text style={cardText}><FaFemale className="mx-3" />Female</Card.Text>
                <Card.Text style={cardText}><MdCardMembership className="mx-3" />Member since December 2023</Card.Text>
                <Button className="mt-4 mb-2 mx-3" style={buttonFont}>Edit your profile <ArrowRight/></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span: 4, offset: 1 }} className="g-2">
          <Card border="dark">
          <Card.Header as="h2" style={cardHeader} className="p-3">Your ratings</Card.Header>
          <Card.Body style={cardBody}>
            <Card.Text style={cardText} className="mx-3 mt-4">Movie worth of 5 stars? Or maybe 8 stars? Visit the movies you have seen and rate them accordingly...to your feelings!</Card.Text>
            <Button className="mt-4 mb-2 mx-3" style={buttonFont}>Get Started! <ArrowRight/></Button>

          </Card.Body>
        </Card>
          </Col>

            <Col md={{span: 4, offset: 6 }} className="g-2 mb-5" >
              <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">Your bookmarks</Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mx-3 mt-4">There are no any bookmarks...yet! Visit any movie you have watched and feel free to bookmark it, easy peasy!</Card.Text>
                <Button className="mt-4 mb-2 mx-3" style={buttonFont}>Get Started! <ArrowRight/></Button>

              </Card.Body>
            </Card>
            </Col>
            

            <Col md={{span: 4, offset: 6 }} className="g-2 mb-5" >
            <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">Your reviews</Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mx-3 mt-4">Something you want to share about a movie you have just watched? Visit your seen movies and rate them, and they will make their grand entrance here!</Card.Text>
                <Button className="mt-4 mb-2 mx-3" style={buttonFont}>Get Started! <ArrowRight/></Button>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>

      <Container fluid style={secondContainer}>
        <Row className="p-2 justify-content-center">
          <h1 className="mt-4">Recently viewed</h1>
        {movieData.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={2} className="mb-4 mx-2">
            <CardComp
              title={movie.title}
              text={movie.text}
              btnText={movie.btnText}
              image={movie.imageUrl}
            />
          </Col>
        ))}
        </Row>
      </Container>
  </>
};

export default ProfileSettings;

import Container from "react-bootstrap/Container";
import Navigation from "../layout/Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import user_picture from "../../assets/user_icon.png";
import online from "../../assets/online.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {ArrowRight} from "react-bootstrap-icons";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import RecentlySearched from "../common/RecentlySearched";



const backgroundContainer = {
  backgroundColor: "#000",
};

const imgPicture = {
  position: "relative",
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
  backgroundColor: "#303030",
}

const cardText = {
  color: "#FFFFFF",
  fontSize: "23px"
}

const buttonFont = {
  fontSize: "20px",
  color: "#000000",
  fontWeight: "bold",
}


const icon = {
  fontSize: "30px"
}

const link = {
  color: "#FFFFFF"
}

const addImg = {
  position: "absolute",
  backgroundColor: "#F9B93C",
  width: 60,
  height: 60,
  borderRadius: "50%",
  color: "#000000",
  fontWeight: "bold",
  fontSize: "36px",
  top: 270,
  left: 870

}


const ProfileSettings = () => {

  return <>
      <Container className="px-1" fluid style={backgroundContainer}>
        <Navigation />
        <Row className="justify-content-md-center">
          <Col className="p-5 text-center">

          <img src={user_picture} style={imgPicture}/>

          <div style={addImg}>+</div>
          
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
                <Card.Text style={cardText} className="mt-4"><MdOutlineEmail className="mx-3" style={icon}/>biancagrecu121@gmail.com</Card.Text>
                <Card.Text style={cardText}><MdOutlinePermPhoneMsg className="mx-3" style={icon}/>(+45) 53 33 73 77</Card.Text>
                <Card.Text style={cardText}><MdOutlineVerified className="mx-3" style={icon}/>Not verified yet, <a href="" style={link}>validate your email here.</a></Card.Text> 
                <Button className="mt-4 mb-2 mx-3" variant="warning" style={buttonFont}>Edit your profile <ArrowRight/></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span: 4, offset: 1 }} className="g-2">
          <Card border="dark">
          <Card.Header as="h2" style={cardHeader} className="p-3">Your ratings</Card.Header>
          <Card.Body style={cardBody}>
            <Card.Text style={cardText} className="mx-3 mt-4">Movie worth of 5 stars? Or maybe 8 stars? Visit the movies you have seen and rate them accordingly...to your feelings!</Card.Text>
            <Button className="mt-4 mb-2 mx-3" variant="warning" style={buttonFont}>Get Started! <ArrowRight/></Button>

          </Card.Body>
        </Card>
          </Col>

            <Col md={{span: 4, offset: 6 }} className="g-2 mb-5" >
              <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">Your bookmarks</Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mx-3 mt-4">There are no any bookmarks...yet! Visit any movie you have watched and feel free to bookmark it, easy peasy!</Card.Text>
                <Button className="mt-4 mb-2 mx-3" variant="warning" style={buttonFont}>Get Started! <ArrowRight/></Button>

              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>

      <RecentlySearched />
  </>
};

export default ProfileSettings;

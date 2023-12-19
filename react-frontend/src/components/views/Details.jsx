import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../redux/actions/MovieActions";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { TiStarFullOutline } from "react-icons/ti";
import { GoPlay } from "react-icons/go";
import Carousel from "react-bootstrap/Carousel";
import departed from "../../assets/departed.jpg";
import { createRating } from "../../redux/actions/RatingActions";
import { addBookmark } from "../privateViews/Bookmark";

const backgroundStyle = {
  backgroundColor: "#000",
  backgroundImage: `linear-gradient(0deg, 
    rgba(0,0,0,1) 10%, rgba(0,0,0,0) 95%), url(${departed}`,
  backgroundSize: "cover",
  width: "100%",
  height: "900px",
  backgroundPosition: "top",
  position: "relative",
};

const titleBackground2 = {
  position: "absolute",
  fontSize: "55px",
  color: "#FFF",
  fontWeight: "bold",
  left: 30,
  top: 120,
  width: "60%",
  padding: "2rem",
  textShadow: "1px 4px 5px black",
};

const buttons = {
  position: "absolute",
  left: 45,
  top: 490,
  margin: "2rem 0",
};

const buttonsCol = {
  display: "inline",
  margin: "18px",
  fontSize: "22px",
  color: "#FFF",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "10px",
  textShadow: "1px 2px 5px black",
};

const stars = {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#FFF",
  marginLeft: "0.5rem",
  textShadow: "1px 3px 5px black",
};

const positionate = {
  position: "absolute",
  left: 65,
  top: 225,
};

const playButton = {
  color: "#EF5454",
  position: "absolute",
  filter: "drop-shadow(1px 3px 5px black)",
  right: 300,
  top: 325,
};

const watch = {
  color: "#FFF",
  fontWeight: "bold",
  fontSize: "35px",
  position: "absolute",
  top: 490,
  right: 265,
  textShadow: "1px 3px 5px black",
};

const backgroundStyle_1 = {
  backgroundColor: "#000",
};

const titleStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "35px",
  textAlign: "center",
  paddingBottom: "2.5rem",
  borderBottom: "2px solid #FFF",
  width: "75%",
};

const synopsis = {
  fontSize: "23px",
  textAlign: "start",
  width: "72%",
  color: "#FFF",
  marginTop: "1rem",
  lineHeight: "2.85rem",
};
const Details = () => {
  const dispatch = useDispatch();
  const { movie, loading, error } = useSelector((state) => state.moviesReducer);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(fetchMovieById(localStorage.getItem("titleId")));
  }, [dispatch]);
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie available</div>;
  const titleId = movie.url.split("/")[5];
  return (
    <div>
      <Container fluid style={backgroundStyle}>
        <h3 style={titleBackground2}>
          {movie.akas ? movie.akas.$values[0].title : "Unknown title"}
        </h3>
        <div className="d-flex flex-row" style={positionate}>
          <TiStarFullOutline
            size={30}
            className="mt-2"
            style={{ color: "#DEB522" }}
          />{" "}
          <p style={stars}> {movie.rating ? movie.rating : 0} </p>
        </div>
        <Col style={buttons}>
          <Button
            style={buttonsCol}
            variant="warning"
            onClick={() => addBookmark(titleId, dispatch)}
          >
            Add to Watchlist
          </Button>
          <Button
            style={buttonsCol}
            variant="warning"
            onClick={handleModalShow}
          >
            Rate
          </Button>
        </Col>
        <GoPlay size={150} style={playButton} />
        <p style={watch}> Watch Trailer</p>
      </Container>

      <Container fluid style={backgroundStyle_1}>
        <Row className="justify-content-center p-5 mx-2">
          <h2 style={titleStyle}>Synopsis</h2>
          <p style={synopsis}>{movie.description}</p>
        </Row>
        <Row className="justify-content-center p-5 mx-2 mt-5">
          <h2 style={titleStyle}>Cast</h2>
          <Carousel>
            <Carousel.Item></Carousel.Item>
          </Carousel>
        </Row>
        <form>
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>{"TesztTitle"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label htmlFor="reviewText">
                Please write a reviewText for the movie:
              </label>
              <input type="text" name="reviewText" id="reviewText" />
            </Modal.Body>
            <Modal.Body>
              <label htmlFor="rating">Rate </label>
              <select name="rating" id="rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => {
                  addRating(
                    titleId,
                    document.getElementById("reviewText").value,
                    document.getElementById("rating").value,
                    dispatch,
                    setShowModal
                  );
                }}
              >
                Rate
              </Button>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </form>
      </Container>
    </div>
  );
};
export default Details;

export const addRating = (
  titleId,
  reviewText,
  grade,
  dispatchRating,
  setShowModal
) => {
  console.log("Successfully added rating");
  setShowModal(false);
  dispatchRating(
    createRating({
      titleId: titleId,
      userId: localStorage.getItem("userId"),
      grade: grade,
      reviewText: reviewText,
    })
  );
};

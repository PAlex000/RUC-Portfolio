import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBookmark,
  deleteBookmark,
  fetchBookmarks,
} from "../../redux/actions/BookmarkActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardCompBookmark from "../common/CardCompBookmark";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";
import home_alone from "../../assets/home_alone.jpg";
import CardSearch from "../common/CardSearch";



const backgroundContainer = {
  backgroundColor: "#000",
};

const backgroundStyle_1 = {
  backgroundColor: "#000"
}

const secondContainer = {
  backgroundColor: "grey",
}


const titleStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "40px",
  textAlign: "center",
  paddingBottom: "1.5rem",
  width: "75%"
}

const border = {
  borderBottom: "2px solid #FFF",
}

const movieData = [
  {
    id: 1,
    title:
      "Shawshank Redemption",
    text: "A different set of text for the second card, explaining something else.",
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
    title: "Home Alone",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: home_alone,
  },
]

const Bookmark = () => {

  const dispatch = useDispatch();
  const { bookmarks, bookmarkedMovies, loading, error } = useSelector(
    (state) => {
      return state.bookmarksReducer;
    }
  );

  useEffect(() => {
    dispatch(fetchBookmarks(localStorage.getItem("userId")));
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!bookmarks) return <div>        
  <Container fluid style={backgroundStyle_1}>
  <Row className="justify-content-center p-5 mx-2">
    <h2 style={titleStyle}>Bookmarks</h2>
    <h3 style={{color: "#FFF", textAlign: "center", margin: "4rem 0"}}>Whoops, there are no any bookmarks. Worry not, your bookmarked movies will appear here!</h3>
    </Row>
        <div style={border}></div>
        </Container>
        
        <Container fluid style={secondContainer}>
        <Row className="p-2 justify-content-center">
          <h1 className="my-5 px-4 text-center" style={{color: "#000"}}>Recently searched</h1>
        {movieData.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={2} className="mb-5 mx-2">
            <CardSearch
              title={movie.title}
              text={movie.text}
              btnText={movie.btnText}
              image={movie.imageUrl}
            />
          </Col>
        ))}
        </Row >
      </Container></div>;

  return (
    <Container className="px-5" fluid style={backgroundContainer}>
      <Row className="d-flex justify-content-center">
        <Row className="mr-4"></Row>
        {bookmarkedMovies.map((data) => (
          <Col key={data.id} sm={6} md={4} lg={2} className="mb-4 mx-2">
            <CardCompBookmark
              titleId={data.titleId}
              title={
                data.akas.$values[0]
                  ? data.akas.$values[0].title
                  : "Unknown title"
              }
              text={data.description}
              image={data.poster}
              rating={data.rating}
              dispatchBookmark={dispatch}
              description={data.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const addBookmark = (titleId, dispatchMovie) => {
  console.log("Successfully added Bookmark");
  dispatchMovie(
    createBookmark({
      userId: localStorage.getItem("userId"),
      titleId: titleId,
      status: true,
    })
  );
};
export const removeBookmark = (titleId, dispatchBookmark) => {
  console.log("Successfully removed Bookmark");
  dispatchBookmark(deleteBookmark(titleId, localStorage.getItem("userId")));
  window.location.reload(true);
};
export default Bookmark;

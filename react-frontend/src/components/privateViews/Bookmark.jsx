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




const backgroundContainer = {
  backgroundColor: "#000",
};

const backgroundStyle_1 = {
  backgroundColor: "#000"
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
        </div>;

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

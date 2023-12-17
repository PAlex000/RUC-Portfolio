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
  if (!bookmarks) return <div>No bookmarks available</div>;
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

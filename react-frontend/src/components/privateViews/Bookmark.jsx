import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBookmark,
  fetchBookmarks,
} from "../../redux/actions/BookmarkActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
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
            <CardComp
              titleId={data.titleId}
              title={
                data.akas.$values[0]
                  ? data.akas.$values[0].title
                  : "Unknown title"
              }
              text={data.description}
              image={data.poster}
              rating={data.rating}
              dispatch={dispatch}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const addBookmark = (titleId, dispatch) => {
  console.log("Successfully added Bookmark");
  dispatch(
    createBookmark({
      userId: localStorage.getItem("userId"),
      titleId: titleId,
      status: true,
    })
  );
};

export default Bookmark;

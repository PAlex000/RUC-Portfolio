import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/actions/MovieActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Header from "../layout/Header";
import header from "../../assets/movieHeader.jpg";
import CustomContainer from "../common/CustomContainer";
import Container from "react-bootstrap/Container";
import CardCompBookmark from "../common/CardCompBookmark";

const title = {
  margin: "2.4rem 0",
  fontSize: "30px",
  fontWeight: "bold",
  borderLeft: "3px solid #DEB522",
  color: "#FFF"
}

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => {
    return state.moviesReducer;
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies) return <div>No movies available</div>;
  return (
    <CustomContainer fluid>
      <Header header={header}/>
      <Container style={{ maxWidth: "75%", margin: "0 auto", backgroundColor: "#000" }}>
        <Row className="justify-content-between align-items-center"><h2 style={title}>Top 5 this week</h2>
          {movies.map((movie) => (
            <Col
              key={movie.id}
              xs={6}
              sm={6}
              md={5}
              lg={2}
              className="d-flex justify-content-center mb-4"
            >
              <CardComp
                titleId={movie.titleId}
                title={
                  movie.akas && movie.akas.length > 0
                    ? movie.akas[0].title
                    : "Default Title"
                }
                description={movie.description}
                btnText="Learn More"
                image={movie.poster}
                rating={movie.rating}
                dispatchMovie={dispatch}
              />
            </Col>
          ))}</Row>
        <Row className="justify-content-between align-items-center">
          <h2 style={title}>Fan Favourites</h2>
          {movies.map((movie) => (
            <Col
              key={movie.id}
              xs={6}
              sm={6}
              md={5}
              lg={2}
              className="d-flex justify-content-center mb-4"
            >
              <CardComp
                titleId={movie.titleId}
                title={
                  movie.akas && movie.akas.length > 0
                    ? movie.akas[0].title
                    : "Default Title"
                }
                description={movie.description}
                btnText="Learn More"
                image={movie.poster}
                rating={movie.rating}
                dispatchMovie={dispatch}
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-between align-items-center">
          <h2 style={title}>Your bookmarked movies</h2>
          {movies.map((movie) => (
            <Col
              key={movie.id}
              xs={6}
              sm={6}
              md={5}
              lg={2}
              className="d-flex justify-content-center mb-4"
            >
              <CardCompBookmark
                titleId={movie.titleId}
                title={
                  movie.akas && movie.akas.length > 0
                    ? movie.akas[0].title
                    : "Default Title"
                }
                description={movie.description}
                btnText="Learn More"
                image={movie.poster}
                rating={movie.rating}
                dispatchMovie={dispatch}
              />
            </Col>
          ))}
          </Row>
      </Container>
    </CustomContainer>
    
  );
};

export default Home;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/actions/MovieActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";
import Header from "../layout/Header";
import header from "../../assets/movieHeader.jpg";
import CustomContainer from "../common/CustomContainer";

const headerData = [
  {
    imageUrl: header,
    overlayText: {
      title: "First Image Title",
      description: "Description for the first image",
    },
  },
  {
    imageUrl: header,
    overlayText: {
      title: "Second Image Title",
      description: "Description for the second image",
    },
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => {
    console.log(state);
    return state.moviesReducer;
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log("Movies:", movies);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies) return <div>No movies available</div>;

  return (
    <CustomContainer fluid>
      <Header headers={headerData} />
      <div style={{ maxWidth: "75%", margin: "0 auto" }}>
        <Row className="justify-content-between align-items-center">
          <Row xs={12} md={3} lg={2} className="mb-4 d-none d-md-block">
            <Dropdowns />
          </Row>
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
                title={
                  movie.akas && movie.akas.length > 0
                    ? movie.akas[0].title
                    : "Default Title"
                }
                description={movie.description}
                btnText="Learn More"
                image={movie.poster}
                rating={movie.rating}
              />
            </Col>
          ))}
        </Row>
      </div>
    </CustomContainer>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/actions/MovieActions";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
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

const marginStyle = {
  marginTop: "14.9px",
};

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => {
    return state.moviesReducer;
  });

  const handleRefresh = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  useEffect(() => {
    dispatch(fetchMovies(currentPage, pageSize));
  }, [dispatch, pageSize, currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies) return <div>No movies available</div>;
  return (
    <CustomContainer fluid>
      <Header headers={headerData} />
      <div style={{ maxWidth: "75%", margin: "0 auto" }}>
        <Row className="justify-content-between align-items-center">
          <Row xs={12} md={3} lg={2} className="mb-4 d-none d-md-block">
            <div className="d-flex align-items-center">
              <div style={marginStyle}>
                <Button onClick={handleRefresh} className="blackBtn mt-2">
                  Refresh
                </Button>
              </div>
            </div>
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
                titleId={movie.titleId}
                title={
                  movie.akas.$values[0]
                    ? movie.akas.$values[0].title
                    : "Unknown title"
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
      </div>
    </CustomContainer>
  );
};

export default Home;

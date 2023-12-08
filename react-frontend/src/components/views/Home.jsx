import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";
import Header from "../layout/Header";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import header from "../../assets/movieHeader.jpg";
import CustomContainer from "../common/CustomContainer";
import { useState } from "react";

//Hard coded data as we create the skellet. useEffect with GET calls when we establish connection. Async/Await, fetch.
export const movieData = [
  {
    id: 1,
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn More",
    genre: "drama",
    imageUrl: shawshank,
    rating: 9.2,
  },
  {
    id: 2,
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "action",
    imageUrl: departed,
    rating: 8.2,
  },
  {
    id: 3,
    title: "The Avengers",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "action",
    imageUrl: shawshank,
    rating: 9.0,
  },
  {
    id: 4,
    title: "Spiderman Homecoming",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "action",
    imageUrl: departed,
    rating: 8.4,
  },
  {
    id: 5,
    title: "Remember the Titans",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "drama",
    imageUrl: shawshank,
    rating: 8.4,
  },
  {
    id: 6,
    title: "Dangerous Minds",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "crime",
    imageUrl: departed,
    rating: 7.4,
  },
  {
    id: 7,
    title: "Get Rich Or Die Tryin'",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "crime",
    imageUrl: shawshank,
    rating: 9.2,
  },
  {
    id: 8,
    title: "American Gangster",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "crime",
    imageUrl: departed,
    rating: 9.2,
  },
  {
    id: 9,
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn More",
    genre: "drama",
    imageUrl: shawshank,
    rating: 9.2,
  },
  {
    id: 10,
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "drama",
    imageUrl: departed,
    rating: 9.2,
  },
  {
    id: 11,
    title: "The Avengers",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    genre: "drama",
    imageUrl: shawshank,
    rating: 9.2,
  },
  {
    id: 12,
    title: "Spiderman Homecoming",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
    rating: 9.2,
  },
  {
    id: 13,
    title: "Remember the Titans",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
    rating: 9.2,
  },
  {
    id: 14,
    title: "Dangerous Minds",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 15,
    title: "Get Rich Or Die Tryin'",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 16,
    title: "American Gangster",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 17,
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 18,
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 19,
    title: "The Avengers",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 20,
    title: "Spiderman Homecoming",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 21,
    title: "Remember the Titans",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 22,
    title: "Dangerous Minds",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 23,
    title: "Get Rich Or Die Tryin'",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 24,
    title: "American Gangster",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
];

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
  const [selectedGenre, setSelectedGenre] = useState("all"); // 'all' indicates no filter

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredMovies =
    selectedGenre === "all"
      ? movieData
      : movieData.filter((movie) => movie.genre === selectedGenre);

  return (
    <CustomContainer fluid>
      <Header headers={headerData} />
      <div style={{ maxWidth: "75%", margin: "0 auto" }}>
        <Row className="justify-content-between align-items-center">
          <Row xs={12} md={3} lg={2} className="mb-4 d-none d-md-block">
            <Dropdowns onGenreSelect={handleGenreChange} />
          </Row>
          {filteredMovies.map((movie) => (
            <Col
              key={movie.id}
              xs={6}
              sm={6}
              md={5}
              lg={2}
              className="d-flex justify-content-center mb-4"
            >
              <CardComp
                title={movie.title}
                text={movie.text}
                btnText={movie.btnText}
                image={movie.imageUrl}
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

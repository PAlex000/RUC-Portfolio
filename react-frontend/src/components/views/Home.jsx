import CardComp from "../common/CardComp";
import shawshank from "../../assets/shawshank.jpg";

const Home = () => {
  return (
    <div>
      <CardComp
        title={"Test Title"}
        text={"Alot of Test Text to test the CardComp"}
        btnText={"Primary Button"}
        image={shawshank}
      />
    </div>
  );
};

export default Home;

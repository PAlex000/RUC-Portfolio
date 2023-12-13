import CustomContainer from "../common/CustomContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";

const Details = () => {
  return (
    <CustomContainer fluid>
      <div style={{ maxWidth: "85%", margin: "0 auto" }}>
        <Row className="justify-content-between align-items-start">
          <Row
            style={{ marginLeft: "60px" }}
            xs={12}
            md={3}
            lg={3}
            className="mb-4 d-none d-md-block"
          >
            <Dropdowns className="ml-4" />
          </Row>
          {}
        </Row>
      </div>
    </CustomContainer>
  );
};
export default Details;


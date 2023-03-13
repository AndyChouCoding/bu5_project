import { CardGroup, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/IGHeader";
import IGStory from "./components/IGStory";
import IGuser from "../../components/IGuser";

const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ minWidth: "auto" }}>
        <Row  style={{  display: "", width:"",overflowX: "scroll", }}>
          <Col
            className="shadow p-3 mb-5 bg-body rounded"
            sm={8}
            style={{
              width: "",
              overflowX: "scroll",
              display: "inline-block",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <IGStory />
          </Col>
          <Col className="d-none d-sm-block" sm={4}>
            right
          </Col>
        </Row>
        <IGuser/>
      </Container>
    </>
  );
};
export default Home;

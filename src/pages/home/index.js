import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../../components/IGHeader";
import IGStory from "./components/IGStory";

const Home = () => {
  return (
    <>
      <Header/>
      <Container>
      <Row>
        <Col className="" sm={8}><IGStory/></Col>
        <Col className="d-none d-sm-block" sm={4}>right</Col>
      </Row>
      </Container>
      
    </>
  );
};
export default Home;

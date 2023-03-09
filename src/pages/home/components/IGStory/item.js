
import Card from "react-bootstrap/Card";


const IGStoryItem = ({ name, avatar }) => {
  return (
    <>
      <Card>
        <Card.Img width="50"
              height="50" style={{background:`url(${avatar})`}}>
        </Card.Img>
        <Card.Title>{name}</Card.Title>
      </Card>
    </>
  );
};
export default IGStoryItem;

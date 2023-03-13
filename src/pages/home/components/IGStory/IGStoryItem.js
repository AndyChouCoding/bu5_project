import Card from "react-bootstrap/Card";

const IGStoryItem = ({ name, avatar }) => {
  return (
    <>
      <Card
        className="d-inline-flex justify-content-center align-items-center"
        style={{
          width: "100px",
          height: "100px",
          display: "inline-block",
          border: "0px",
        }}
      >
        <div
        className="d-flex justify-content-center align-items-center"
          style={{
            border: "1px",
            borderStyle:"solid",
            borderColor:"red",
            borderRadius: 100,
            width:"75px",
            height:"75px",
          }}
        >
          <Card.Img
          
            variant="top"
            src={avatar}
            style={{
              padding: "1px",
              borderRadius: 100,
              width: "70px",
              height: "70px",
              display:""
              
            }}
          ></Card.Img>
        </div>

        <Card.Title className="fs-6 text-center" style={{}}>
          {name}
        </Card.Title>
      </Card>
    </>
  );
};
export default IGStoryItem;

import { CardGroup } from "react-bootstrap";
import IGStoryItem from "./IGStoryItem";

const IGStory = () => {
  //muckdata
  const data = [
    { id: 1, name: "Andy", avatar: "/images/avaters/a1.png" },
    { id: 2, name: "Andy2", avatar: "/images/avaters/a2.png" },
    { id: 3, name: "Andy3", avatar: "/images/avaters/a3.png" },
    { id: 4, name: "Andy4", avatar: "/images/avaters/a4.png" },
    { id: 5, name: "Andy5", avatar: "/images/avaters/a5.png" },
    { id: 6, name: "Andy6", avatar: "/images/avaters/a6.png" },
    { id: 7, name: "Andy7", avatar: "/images/avaters/a7.png" },
    { id: 8, name: "Andy8", avatar: "/images/avaters/a8.png" },
    { id: 9, name: "Andy9", avatar: "/images/avaters/a9.png" },
    { id: 10, name: "Andy10", avatar: "/images/avaters/a10.png" },
  ];

  return (
    <>
      {/* <IGStoryItem name="person_a1" avatar="../images/avaters/a1.png" /> */}
      <div
        style={{
          width: "100%",
          height: "100px",
          display:"",
          whiteSpace:"nowrap",
        }}
      >
        {data?.map((Item) => {
          const { id, name, avatar } = Item;
          return <IGStoryItem key={id} name={name} avatar={avatar} />;
        })}
      </div>
    </>
  );
};
export default IGStory;

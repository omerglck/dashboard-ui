import Title from "../Title";
import ListItem from "./ListItem";

const List = ({ title, courses }) => {
  return (
    <div>
      <Title>{title}</Title>

      <div className="flex max-lg:flex-col gap-10">
        {courses.map((course, key) => (
          <ListItem course={course} key={key} />
        ))}
      </div>
    </div>
  );
};

export default List;

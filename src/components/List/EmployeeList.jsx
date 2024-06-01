import Title from "../Title";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employees }) => {
  return (
    <div className="">
      <Title>Top Employees</Title>

      <div className="flex flex-col justify-between gap-10">
        {employees.map((i, key) => (
          <EmployeeItem i={i} key={key} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

import { RiProgress3Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

const ListItem = ({ course }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 p-6 rounded-md bg-zinc-700">
      <h3 className="font-semibold text-lg">{course.title}</h3>

      <p className="flex-1 text-gray-300">{course.description}</p>

      <div className="flex justify-between gap-2 lg:flex-col xl:flex-row">
        <div>
          <p>
            <span>Due Date: </span>
            <span className="text-gray-300">{course.due_date}</span>
          </p>

          <p>
            <span>Assigned To: </span>
            <span className="text-gray-300">{course.assigned_to}</span>
          </p>
        </div>

        {course.status === "In Progress" ? (
          <p className="flex flex-col xs:flex-row gap-2 items-center bg-yellow-500 p-2 rounded-md w-fit text-center">
            <RiProgress3Line /> {course.status}
          </p>
        ) : (
          <p className="flex flex-col xs:flex-row gap-2 items-center bg-blue-500 p-2 rounded-md w-fit">
            <FaRegCalendarAlt /> {course.status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ListItem;

/*
{
"assigned_to": "John Doe",
"description": "Learn how to actively listen to customers and colleagues to better understand their needs and concerns.",
"due_date": "2022-12-31",
"status": "In Progress",
"title": "Active Listening"
}
*/

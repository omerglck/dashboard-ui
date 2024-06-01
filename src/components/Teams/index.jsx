import EmployeeItem from "../List/EmployeeItem";
import Title from "../Title";
import { CiCirclePlus } from "react-icons/ci";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Teams = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Title>Teams</Title>
        <button className="bg-blue-500 py-1 px-2 rounded-md hover:bg-green-600 font-semibold">
          Create New Team
        </button>
      </div>

      <Splide
        options={{
          pagination: false,
        }}
      >
        {data.map((team) => (
          <SplideSlide>
            <div className="px-5 sm:px-14 lg:px-28">
              <div className="border rounded p-3">
                <h3 className="flex gap-3">
                  <span className="font-bold text-xl">{team.title}</span>
                  <span className="bg-orange-500 w-8 h-8 rounded-full grid place-items-center">
                    {team.overall_score}
                  </span>
                </h3>

                <p className="text-gray-300">{team.description}</p>

                <div className="flex max-lg:flex-col gap-4 mt-5">
                  {team.employees.map((employee) => (
                    <EmployeeItem i={employee} />
                  ))}

                  <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-600 font-semibold grid place-items-center">
                    <CiCirclePlus className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Teams;

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Container from "./components/Container/index";
import Chart from "./components/Chart";
import axios from "axios";
import EmployeeList from "./components/List/EmployeeList";
import Error from "./components/Error";
import Card from "./components/Card";
import List from "./components/List";
import ActivityChart from "./components/Chart/ActivityChart";
import Teams from "./components/Teams";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://demotrainiq.com/case/dashboard")
      .then((res) => {
        setData(res.data.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const cards = [
    {
      label: "Average Employee Score",
      value: data?.average_employee_score,
    },
    {
      label: "Total Completed Courses",
      value: data?.total_completed_courses,
    },
    {
      label: "Total Employees",
      value: data?.total_employees,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-white bg-gray-900">
      <Header />

      <main className="flex-1">
        <Container>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : (
            data && (
              <div className="flex flex-col gap-12 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cards.map((card, index) => (
                    <Card item={card} key={index} />
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <ActivityChart data={data.activity_hours} />
                  </div>
                  <div className="lg:col-span-1">
                    <EmployeeList employees={data.top_employees} />
                  </div>
                </div>

                <Teams data={data.teams} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Chart
                    title="Skills In Development"
                    data={data.skills_in_development}
                  />
                  <Chart title="Top Skills" data={data.top_skills} />
                </div>

                <List
                  title="Upcoming Courses"
                  courses={data.upcoming_courses}
                />
                <List
                  title="In Progress Courses"
                  courses={data.in_progress_courses}
                />
              </div>
            )
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;

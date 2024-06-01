import CountUp from "react-countup";

const Card = ({ item }) => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-zinc-500 p-2  xs:p-4 rounded">
      <h3 className="font-bold text-blue-200 text-sm xs:text-base">
        {item.label}
      </h3>
      <h1 className="font-bold text-4xl">
        <CountUp end={+item.value} />
      </h1>
    </div>
  );
};

export default Card;

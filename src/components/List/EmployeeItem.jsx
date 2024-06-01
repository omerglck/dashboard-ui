import { FaPerson } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiRename } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { motion } from "framer-motion";

const EmployeeItem = ({ i }) => {
  return (
    <motion.div
      initial={{
        top: "-100px",
        opacity: 0,
      }}
      whileInView={{
        top: "0px",
        opacity: 1,
      }}
      className="relative p-3 rounded-md bg-black grid grid-cols-2 justify-between lg:grid-cols-1"
    >
      <h1 className="flex items-center gap-2 text-nowrap font-semibold">
        <FaPerson className="text-blue-500" />
        <span>{i.name}</span>
      </h1>

      <h1 className="flex items-center gap-2 text-nowrap font-semibold">
        <IoMdMail className="text-red-500" />

        <span className="line-clamp-1">{i.email}</span>
      </h1>

      <h1 className="flex items-center gap-2 text-nowrap font-semibold">
        <BiRename className="text-yellow-500" />

        <span>{i.current_score}</span>
      </h1>

      <h1 className="flex items-center gap-2 text-nowrap font-semibold ">
        <BsBriefcaseFill className="text-green-500" />

        <span className="line-clamp-1">{i.title}</span>
      </h1>
    </motion.div>
  );
};

export default EmployeeItem;

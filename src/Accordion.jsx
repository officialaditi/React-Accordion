import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ role, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[850px] mt-6 bg-blue-200">
      <div
        className="bg-blue-400 p-3  flex justify-between items-center"
        onClick={() => setShow(!show)}
      >
        <h2 className="font-bold text-2xl">{role}</h2>
        {show ? (
          <IoIosArrowUp  />
        ) : (
          <IoIosArrowDown />
        )}
      </div>
      {show && <p className="p-3 text-2xl font-thin ">{description}</p>}
    </div>
  );
};
export default Accordion;

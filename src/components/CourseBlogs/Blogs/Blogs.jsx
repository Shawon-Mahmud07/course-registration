import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Blogs = ({ blogs, handleClickBtn }) => {
  const { cover, title, details, price, credit } = blogs;
  return (
    <div className="bg-[#fff]  rounded-lg p-2 space-y-3 h-auto ">
      <img
        className="w-full"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="space-y-2 ml-1">
        <h2 className="text-[#1C1B1B] text-lg font-semibold">{title}</h2>
        <p className="text-[#1C1B1B99] font-medium text-sm">{details}</p>
      </div>
      <div className="flex items-center justify-around text-base font-medium text-[#1C1B1B99]">
        <p>
          <FaDollarSign></FaDollarSign>
        </p>
        <p>price : {price}</p>
        <p>
          <FaBookOpen></FaBookOpen>
        </p>
        <p>Credit : {credit}hr</p>
      </div>

      <button
        className="text-center bg-[#2F80ED]  w-full rounded-md py-2 text-[#FFF] font-semibold text-lg"
        onClick={() => handleClickBtn(blogs)}
      >
        {" "}
        Select
      </button>
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};
export default Blogs;

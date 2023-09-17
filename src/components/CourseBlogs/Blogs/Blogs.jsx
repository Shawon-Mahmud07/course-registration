import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
const Blogs = ({ blogs }) => {
  const { cover, title, details, price, credit } = blogs;
  return (
    <div className="bg-[#fff]  rounded-lg p-3 space-y-3 basis-1 h-auto ">
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

      <div className="text-center mt-3 bg-[#2F80ED] rounded-md py-2 text-[#FFF] font-semibold text-lg cursor-pointer">
        <button>Select</button>
      </div>
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
};
export default Blogs;

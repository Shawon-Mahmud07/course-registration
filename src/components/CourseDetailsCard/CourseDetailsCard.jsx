import CourseDetails from "../CourseDetails/CourseDetails";
import PropTypes from "prop-types";
const CourseDetailsCard = ({ courseTitle }) => {
  return (
    <div className="w-3/12 mt-8 bg-[#fff] rounded-md h-fit">
      <CourseDetails courseTitle={courseTitle}></CourseDetails>
    </div>
  );
};

CourseDetailsCard.propTypes = {
  courseTitle: PropTypes.array.isRequired,
};

export default CourseDetailsCard;

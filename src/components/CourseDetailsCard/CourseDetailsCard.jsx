import CourseDetails from "../CourseDetails/CourseDetails";
import PropTypes from "prop-types";
const CourseDetailsCard = ({ courseTitle, totalCredit, remaining }) => {
  return (
    <div className="w-3/12 mt-8 bg-[#fff] rounded-md h-fit">
      <CourseDetails
        remaining={remaining}
        totalCredit={totalCredit}
        courseTitle={courseTitle}
      ></CourseDetails>
    </div>
  );
};

CourseDetailsCard.propTypes = {
  courseTitle: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default CourseDetailsCard;

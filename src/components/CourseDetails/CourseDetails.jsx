import PropTypes from "prop-types";
const CourseDetails = ({
  courseTitle,
  totalCredit,
  remaining = { remaining },
}) => {
  return (
    <div className="px-5 pt-5 ">
      <h2 className="text-[#2F80ED] text-lg font-bold">
        Credit Hour Remaining {remaining} hr
      </h2>
      <div className="my-5">
        <hr />
      </div>

      <div>
        <h2 className="text-[#1C1B1B] text-xl font-bold">Course Name</h2>
      </div>

      {courseTitle.map((title, index) => (
        <h1 className="text-[#1C1B1B99] font-normal text-base" key={index}>
          {index + 1}
          {". "}
          {title.title}{" "}
        </h1>
      ))}
      <div className="my-5">
        <hr />
      </div>
      <p className="mb-5 text-base font-medium text-[#1C1B1B99]">
        Total Credit Hour: {totalCredit}
      </p>
      <hr />
    </div>
  );
};
CourseDetails.propTypes = {
  courseTitle: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};
export default CourseDetails;

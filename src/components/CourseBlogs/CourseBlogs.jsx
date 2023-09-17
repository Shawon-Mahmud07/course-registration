import { useEffect, useState } from "react";
import Blogs from "./Blogs/Blogs";
import PropTypes from "prop-types";

const CourseBlogs = ({ handleClickBtn }) => {
  const [courseBlogs, setCourseBlogs] = useState([]);

  useEffect(() => {
    const fetchCourseBlogsData = async () => {
      try {
        const url = "courseData.json";
        const res = await fetch(url);
        const data = await res.json();
        setCourseBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourseBlogsData();
  }, []);

  return (
    <div className="w-3/4 mt-8 grid grid-cols-3 gap-5 ">
      {courseBlogs.map((blogs, index) => (
        <Blogs handleClickBtn={handleClickBtn} blogs={blogs} key={index}>
          {" "}
        </Blogs>
      ))}
    </div>
  );
};

CourseBlogs.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};
export default CourseBlogs;

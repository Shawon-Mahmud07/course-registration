import { useEffect, useState } from "react";
import Blogs from "./Blogs/Blogs";

const CourseBlogs = () => {
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
    <div className="w-4/5 mt-8 grid grid-cols-3 gap-5 ">
      {courseBlogs.map((blogs, index) => (
        <Blogs blogs={blogs} key={index}>
          {" "}
        </Blogs>
      ))}
    </div>
  );
};

export default CourseBlogs;

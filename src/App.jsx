import { useState } from "react";
import CourseBlogs from "./components/CourseBlogs/CourseBlogs";
import CourseDetailsCard from "./components/CourseDetailsCard/CourseDetailsCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courseTitle, setCourseTitle] = useState([]);

  const handleClickBtn = (blogs) => {
    const isExist = courseTitle.find((item) => item.id == blogs.id);
    if (isExist) {
      return toast.error("Already added");
    } else {
      const newCourseTitle = [...courseTitle, blogs];
      setCourseTitle(newCourseTitle);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto pt-10">
        <ToastContainer></ToastContainer>
        {/*Course Title */}
        <h1 className="text-center font-extrabold text-[#1C1B1B] text-3xl">
          Course Registration
        </h1>

        <div className=" md:flex gap-5 p-3 max-w-7xl mx-auto ">
          {/* Course Blogs Section*/}
          <CourseBlogs handleClickBtn={handleClickBtn}></CourseBlogs>

          {/* Course Card Section */}
          <CourseDetailsCard courseTitle={courseTitle}></CourseDetailsCard>
        </div>
      </div>
    </>
  );
}

export default App;

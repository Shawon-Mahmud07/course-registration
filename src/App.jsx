import { useState } from "react";
import CourseBlogs from "./components/CourseBlogs/CourseBlogs";
import CourseDetailsCard from "./components/CourseDetailsCard/CourseDetailsCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courseTitle, setCourseTitle] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleClickBtn = (blogs) => {
    const isExist = courseTitle.find((item) => item.id == blogs.id);
    let credit = blogs.credit;

    if (isExist) {
      return toast.error("Already added");
    } else {
      courseTitle.forEach((item) => {
        credit = credit + item.credit;
      });
    }
    const newRemaining = 20 - credit;
    if (credit > 20) {
      return toast.error("credit limit 20hr");
    } else {
      setRemaining(newRemaining);
      setTotalCredit(credit);
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
          <CourseDetailsCard
            remaining={remaining}
            totalCredit={totalCredit}
            courseTitle={courseTitle}
          ></CourseDetailsCard>
        </div>
      </div>
    </>
  );
}

export default App;

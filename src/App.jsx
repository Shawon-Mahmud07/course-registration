import CourseBlogs from "./components/CourseBlogs/CourseBlogs";
import CourseDetailsCard from "./components/CourseDetailsCard/CourseDetailsCard";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-10">
        {/*Course Title */}
        <h1 className="text-center font-extrabold text-[#1C1B1B] text-3xl">
          Course Registration
        </h1>

        <div className=" md:flex gap-5 p-4 max-w-7xl mx-auto ">
          {/* Course Blogs Section*/}
          <CourseBlogs></CourseBlogs>

          {/* Course Card Section */}
          <CourseDetailsCard></CourseDetailsCard>
        </div>
      </div>
    </>
  );
}

export default App;

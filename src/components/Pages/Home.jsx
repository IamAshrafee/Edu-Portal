import React from "react";
import Navbar_Sidebar from "../Common/Navbar_Sidebar";
import CourseInfoCard from "../Cards/CourseInfoCard";
import HSC27PioneerBatch from "../../assets/images/HSC27PioneerBatch.png";

const Home = () => {
  return (
    <div>
      <Navbar_Sidebar>
        <div className="flex-1">
          <div>
            <p className="text-3xl text-center font-poppins mt-5 font-[500]">
              Your Courses
            </p>
          </div>
          <div className="flex align-center justify-center gap-4 flex-wrap mt-10 mx-auto">
            <CourseInfoCard
              cardImg={HSC27PioneerBatch}
              cardTitle={"HSC 1st Year (Pioneer Batch) (HSC'27 ব্যাচের জন্য)"}
              cardButton={"Continue Learning"}
            />
          </div>
        </div>
      </Navbar_Sidebar>
    </div>
  );
};

export default Home;

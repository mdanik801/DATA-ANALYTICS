import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analyticss() {
   return (
      <div className="w-full bg-white py-16 px-4">
         <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
            <div className="flex flex-col justify-center">
               <p className="text-[#00fd9a] font-bold ">DATA ANALYTICS DASHBORD</p>
               <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
                  Manage Data Analytics centrally
               </h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores accusantium
                  exercitationem nobis, rerum magnam labore aperiam molestiae dolorem id quis cum
                  odio, consectetur eius error officia natus, nemo deserunt ipsa.
               </p>
               <button className="bg-black text-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto md-mx-0 py-3">
                  Get Start
               </button>
            </div>
         </div>
      </div>
   );
}

export default Analyticss;

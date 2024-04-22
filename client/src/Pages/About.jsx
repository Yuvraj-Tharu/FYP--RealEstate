import React from "react";
import { motion } from "framer-motion";
import "../assets/Style/About.css";
import "../assets/Style/Home.css";

export default function About() {
  return (
    <>
      <div className="main w-full bg-[#F6F9FC] h-[330px] ">
        <div className="About container bg-[#F6F9FC] h-[330px] w-[68%]">
          <div className="flex gap-10 ">
            <div className="flex flex-col my-20 gap-3  ">
              <h1 className="text-6xl font-semibold text-slate-600">
                About Us
              </h1>
              <p className="text-center items-center">
                <span className="font-semibold text-slate-600 text-xl">
                  Hamro Sampati
                </span>{" "}
                <span>Real-Estate</span> company and culture are a lot like our
                product. They’re crafted, not cobbled, for a delightful
                experience.
              </p>
            </div>
            <div className="my-3">
              <img
                className="h-[15vw]  rounded-3xl "
                src="https://www.hubspot.com/hs-fs/hubfs/Hubspotters.jpg?width=701&height=468&name=Hubspotters.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex mt-20">
            <div className="flex gap-5">
              <div>
                <img
                  className="h-[20vw] w-[90vh] rounded-3xl "
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-4 mt-20">
                <h1 className="text-2xl font-semibold text-slate-600">
                  Our mission: In real estate is to turn dreams into tangible
                  realities.
                </h1>
                <p className="w-[50%] text-justify ">
                  We believe not just in growing bigger, but in growing better.
                  And growing better means aligning the success of your own
                  business with the success of your customers. Win-win!
                </p>
                {/* <div className="shape  opacity-75 mr-[180px]  ">
                
                  <div className="shape-2  bg-slate-700  w-[35vh] h-[35vh]   "></div>
                  <div className="shape-3  bg-slate-700  w-[35vh] h-[35vh]  "></div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex mt-20 gap-5">
            <div className="flex flex-col gap-3  w-[50%]">
              <h1 className="text-2xl font-semibold text-slate-600">
                Our Story of Building Dreams and Transforming Communities
              </h1>
              <p className="text-justify">
                Our story in real estate begins with a passion for creating
                spaces that inspire, nurture, and thrive. It's a tale woven with
                threads of dedication, innovation, and a deep understanding of
                the profound impact that properties have on people's lives. ike
                many great stories, ours started with a vision—a vision to
                redefine what real estate means to individuals and communities
                alike. From the outset, we set out on a mission to not just sell
                properties, but to craft experiences, fulfill dreams, and shape
                the very fabric of neighborhoods.
              </p>
              {/* <div className="shape absolute left-0 mt-20 z-0 opacity-75">
                <div className="shape-3 absolute w-[20vw] h-[20vw] bg-slate-700 opacity-95 "></div>
                <div className="Box2 absolute rounded-full w-[20vw] h-[20vw]  bg-slate-700 opacity-90 blur-[20px]"></div>
                <div className="Box2 absolute rounded-full w-[20vw] h-[20vw]  bg-slate-700 opacity-90 blur-[20px]"></div>
              </div> */}
            </div>
            <div>
              <img
                className="h-[20vw] w-[90vh] rounded-3xl"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

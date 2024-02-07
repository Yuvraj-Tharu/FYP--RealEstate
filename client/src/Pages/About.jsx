import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-10 px-4 max-w-6xl mx-auto flex flex-col-reverse items-center sm:flex-row"
      >
        <div className="sm:w-1/2 sm:pr-8 mb-8 sm:mb-0 ml-[-6cm]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-4 text-slate-800"
          >
            About HamroSampati Estate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4 text-slate-700 text-justify"
          >
            HamroSampati Estate is a leading real estate agency that specializes
            in helping clients buy, sell, and rent properties in the most
            desirable neighborhoods. Our team of experienced agents is dedicated
            to providing exceptional service and making the buying and selling
            process as smooth as possible. Our mission is to help our clients
            achieve their real estate goals by providing expert advice,
            personalized service, and a deep understanding of the local market.
            Whether you are looking to buy, sell, or rent a property, we are
            here to help you every step of the way.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 text-slate-700 text-justify"
          >
            Our team of agents has a wealth of experience and knowledge in the
            real estate industry, and we are committed to providing the highest
            level of service to our clients. We believe that buying or selling a
            property should be an exciting and rewarding experience, and we are
            dedicated to making that a reality for each and every one of our
            clients.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="my-3 flex flex-col "
        >
          <img
            className="max-w-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            alt="Wild Landscape"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

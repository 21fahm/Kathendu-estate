"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const SlideInAuth: React.FC = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Logo />
      <Form />
      <SupplementalContent />
    </section>
  );
};

const Form: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-semibold"
        >
          Log In
        </motion.h1>
        <motion.p variants={primaryVariants} className="mb-8 text-center">
          Members only!
        </motion.p>

        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              id="password-input"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div
            variants={primaryVariants}
            className="mb-4 flex w-full items-start gap-1.5"
          >
            <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4 w-4 accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              By signing up, I agree to the terms and conditions, privacy
              policy, and cookie policy
            </label>
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Sign up
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

const SupplementalContent: React.FC = () => {
  return (
    <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
      <img
        alt="An example image"
        src="/ceo2.0.jpg"
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
          variants={primaryVariants}
        >
          Fero
          <br />
          Genesis
        </motion.h2>
        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300"
        >
          On a mission to achieve excellence everyday in all we do leveraging on
          technology and partnerships.
        </motion.p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <motion.img
              variants={avatarVariants}
              className="h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/mr.smith.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/betty.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/CEO.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/mukiri.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/stan.jpg"
            />
          </div>
          <div>
            <motion.div variants={primaryVariants} className="flex gap-0.5">
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <span className="ml-2 text-sm text-white">5.0</span>
            </motion.div>
            <motion.p
              variants={primaryVariants}
              className="text-xs text-slate-300"
            >
              from over 10,000 reviews
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Logo: React.FC = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <img
      src="/imgs/genesis.png" // Replace "/path/to/photo.jpg" with the actual path to your photo in the public folder
      alt="Description of the photo" // Provide a descriptive alt text for accessibility
      width="170"
      className="absolute left-[50%] top-4 -translate-x-[50%] fill-slate-950 md:left-4 md:-translate-x-0"
    />
  );
};

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const avatarVariants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export default SlideInAuth;

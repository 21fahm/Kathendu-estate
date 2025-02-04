"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useCallback, useState } from "react";

interface FormProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ShiftingContactForm: React.FC = () => {
  const [selected, setSelected] = useState<string>("individual");

  return (
    <section className="p-4 bg-slate-100">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form: React.FC<FormProps> = ({ selected, setSelected }) => {
  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const name = formData.get("name");
      const message = formData.get("message");
      const company = formData.get("company");

      const email = `Hi!\n\nMy name is ${name}${
        selected === "company"
          ? ` and I represent a company by the name ${company}`
          : ""
      }. I would love to inquire the following:\n\n${message}\n\nThank you!`;

      const a = document.createElement("a");
      a.href = `mailto:shakespay@shakesco.com?subject=${encodeURIComponent(
        `General Inquiry from ${name}`
      )}&body=${encodeURIComponent(email)}`;
      a.click();
    },
    [selected]
  );

  return (
    <form
      onSubmit={submit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "company" ? "bg-indigo-600" : "bg-yellow-300"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>
      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Hi 😊 ! My name is...</p>
        <input
          name="name"
          type="text"
          placeholder="Your name..."
          className={`${
            selected === "company" ? "bg-indigo-700" : "bg-yellow-200"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>
      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>
      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">by the name of...</p>
            <input
              name="company"
              type="text"
              placeholder="Your company name..."
              className={`${
                selected === "company" ? "bg-indigo-700" : "bg-yellow-300"
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">I&apos;d love to ask about...</p>
        <textarea
          name="message"
          placeholder="Whatever your heart desires :)"
          className={`${
            selected === "company" ? "bg-indigo-700" : "bg-yellow-200"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>
      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "company"
            ? "bg-white text-indigo-600"
            : "bg-white text-yellow-300"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font- semibold`}
      >
        Submit
      </motion.button>
    </form>
  );
};

interface FormSelectProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const FormSelect: React.FC<FormSelectProps> = ({ selected, setSelected }) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        type="button"
        className={`${
          selected === "individual" ? "bg-yellow-300" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        type="button"
        className={`${
          selected === "company" ? "text-indigo-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

interface ImagesProps {
  selected: string;
}

const Images: React.FC<ImagesProps> = ({ selected }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };

export default ShiftingContactForm;

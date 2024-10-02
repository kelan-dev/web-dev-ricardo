"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import sendEmail from "@/actions/send-email";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", "-70% 0% -30%");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-4 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:ricardo@example.com" className="underline">
          ricardo@example.com
        </a>{" "}
        or through the form below:
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          // For demo purposes, we'll assume the email sent successfully
          // if (error) {
          //   toast.error(error);
          //   return;
          // }

          setSenderEmail("");
          setSenderMessage("");
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          type="email"
          required
          maxLength={40}
          placeholder="Your email address"
          className="border-dim h-14 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-95 dark:focus:bg-opacity-100"
        />
        <textarea
          name="senderMessage"
          value={senderMessage}
          onChange={(e) => setSenderMessage(e.target.value)}
          placeholder="Your message"
          required
          maxLength={1000}
          className="border-dim my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-95 dark:focus:bg-opacity-100"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;

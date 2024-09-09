import React, { useEffect, useState } from "react";
import axios from "axios";
import BookButton from "../BookButton";
import { motion } from "framer-motion";

const SignatureMessages = () => {
  const [signatureMessages, setSignatureMessages] = useState([]);
  useEffect(() => {
    const fetchSignatureMessages = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/signature-message-topics"
      );
      const signaturemsg = [];
      response.data.forEach((msg) => {
        signaturemsg.push(msg.name);
      });

      setSignatureMessages(signaturemsg);
    };

    fetchSignatureMessages();
  }, []);

  const overlayVariants = {
    hidden: { x: 0 },
    visible: {
      x: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-8 mb-5">
      <p className="about-h3 text-[#F6C228] text-center">
        SIGNATURE MESSAGE TOPICS:
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap relative">
        <motion.div
          className="absolute inset-0 bg-black z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={overlayVariants}
        ></motion.div>
        {signatureMessages.map((message) => (
          <div
            key={message}
            className="flex  items-center justify-center gap-2 px-2 w-40 h-16 border border-[#636363] rounded-lg"
          >
            <p className="text-center">{message}</p>
          </div>
        ))}
      </div>
      <BookButton text="Book Now" path="book" />
    </div>
  );
};

export default SignatureMessages;

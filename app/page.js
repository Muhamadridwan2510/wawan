"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input)); // Evaluasi ekspresi matematika
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-500 to-cyan-700">
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-2xl w-80"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Kalkulator
        </h1>
        <div className="bg-gray-100 p-3 rounded-lg text-right text-xl font-semibold mb-3 h-14">
          {input || "0"}
        </div>
        <div className="bg-gray-200 p-2 rounded-lg text-right text-lg font-semibold text-gray-700 h-10">
          {result !== "" ? `= ${result}` : ""}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "C",
            "0",
            "=",
            "+",
          ].map((item) => (
            <motion.button
              key={item}
              onClick={() => handleClick(item)}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-lg font-semibold text-white text-lg shadow-md transition ${
                item === "="
                  ? "bg-green-500"
                  : item === "C"
                  ? "bg-red-500"
                  : ["+", "-", "*", "/"].includes(item)
                  ? "bg-blue-500"
                  : "bg-gray-800"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

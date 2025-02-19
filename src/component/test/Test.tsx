"use client";

import { useState } from "react";
import { BackGroundStyle, container } from "@/component/test/Test.css";

const Test = () => {
  const [type, setType] = useState<"A" | "B" | "C">("A");

  return (
    <div
      className={`${container} ${BackGroundStyle[type]}`}
      onClick={(e) => e.stopPropagation()}
    >
      <select
        onChange={(e) => {
          setType(e.target.value as "A" | "B" | "C");
        }}
      >
        {["A", "B", "C"].map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Test;

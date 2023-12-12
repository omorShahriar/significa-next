import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const Slogan = ({ className, animate }) => {
  let source: string[] = [
    "Think.",
    "Design.",
    "Develop.",
    "Launch.",
    "Repeat.",
  ];
  let target: string[] = typeof animate === "undefined" ? source : [];

  return (
    <div>
      <p className={twMerge("text-3xl font-medium", className)}>
        {source.map((word, i) => (
          <React.Fragment key={i}>
            <span
              className={clsx(
                "mr-1 inline-block transition-all duration-500 ease-motion",
                i === source.length - 1 && "text-foreground-secondary"
              )}
            >
              {word}
            </span>
            {i % 2 === 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Slogan;

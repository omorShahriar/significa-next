import React from "react";

const Recognitions = ({ recognitions }) => {
  return (
    <>
      {recognitions.map((recognition) => (
        <div className="col-span-1 flex items-center" key={recognition.id}>
          {recognition.image && (
            <>
              <img
                className="mr-2 h-auto w-14 rounded-md bg-background-offset"
                src={recognition.image}
                width={56}
                height={44}
              />
            </>
          )}
          <div>
            <span className="text-xs uppercase tracking-wider text-foreground-secondary">
              {recognition.label}
            </span>
            <p className="text-sm font-medium">{recognition.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Recognitions;

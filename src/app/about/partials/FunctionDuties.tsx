import React from "react";

interface Props {
  functionDuties: {
    title: string;
    description: string;
  };
}

const FunctionDuties: React.FC<Props> = ({ functionDuties }) => {
  return (
    <div className="padding-x bg-background-400 py-10">
      <p className="typography-h3-bold text-text-500">
        {functionDuties?.title}
      </p>

      {/* Function */}
      <div className="mt-5">
        <p className="typography-p-regular-medium text-text-600">
          {functionDuties?.description}
        </p>
      </div>
    </div>
  );
};

export default FunctionDuties;

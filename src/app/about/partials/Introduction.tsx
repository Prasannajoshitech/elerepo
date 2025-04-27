import React from "react";

interface Props {
  introData: {
    title: string;
    description: string;
  };
}

const Introduction: React.FC<Props> = ({ introData }) => {
  return (
    <div className="padding-x">
      <p className="typography-h3-bold">{introData?.title}</p>

      <div className="mt-3">
        <p
          className="typography-p-regular text-text-400"
          dangerouslySetInnerHTML={{
            __html: introData?.description || "",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;

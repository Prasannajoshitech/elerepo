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
        <p className="typography-p-regular text-text-400">
          {introData?.description}
        </p>

        {/* List items */}
        <br />
        <div>
          <p className="typography-p-regular text-text-400">
            The Electricity Regulatory Commission (ERC) is an independent and
            autonomous body established under the Electricity Regulatory
            Commission Act, 2074 (2017). Its formation aims to:
          </p>

          <ul>
            <li className="typography-p-regular text-text-400 list-disc list-inside">
              Regulate and supervise the generation, transmission, distribution,
              and trade
            </li>
            <li className="typography-p-regular text-text-400 list-disc list-inside">
              Regulate and supervise the generation, transmission, distribution,
              and trade
            </li>
            <li className="typography-p-regular text-text-400 list-disc list-inside">
              Regulate and supervise the generation, transmission, distribution,
              and trade
            </li>
            <li className="typography-p-regular text-text-400 list-disc list-inside">
              Regulate and supervise the generation, transmission, distribution,
              and trade
            </li>
          </ul>

          <p className="typography-p-regular text-text-400">
            The Electricity Regulatory Commission (ERC) is an independent and
            autonomous body established under the Electricity Regulatory
            Commission Act, 2074 (2017). Its formation aims to
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

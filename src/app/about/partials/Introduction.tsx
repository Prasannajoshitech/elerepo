import React from "react";

const Introduction = () => {
  return (
    <div>
      <p className="typography-h3-bold">Introduction</p>

      <div className="mt-3">
        <p className="typography-p-regular text-text-400">
          The &nbsp;
          <span className="typography-p-regular-bold text-text-400">
            Electricity Regulatory Commission(ERC)&nbsp;
          </span>
          is an independent regulatory body established by the Government of
          Nepal under the Electricity Regulatory Commission Act, 2074 (2017) and
          the Electricity Regulatory Commission Rules, 2075 (2018). The
          Commission was formed to simplify, regularize, systematize, and bring
          transparency to the generation, transmission, distribution, and trade
          of electricity. Its primary objectives include maintaining a balance
          between the demand and supply of electricity, regulating electricity
          tariffs, protecting the rights and interests of electricity consumers,
          promoting competition in the electricity market, and ensuring that
          electricity services are reliable, accessible, high-quality, and safe.
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

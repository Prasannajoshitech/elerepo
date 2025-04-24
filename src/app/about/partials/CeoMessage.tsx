import Image from "next/image";
import React from "react";
import ceo from "@/assets/home/team/ceo.png";

const CeoMessage = () => {
  return (
    <div className="padding-x my-10">
      <h3 className="typography-h3-bold pb-[0.75rem] text-text-500">
        Message from Chairperson
      </h3>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-[2.5rem]">
        {/* message from ceo  */}
        <div className="text-text-400 typography-p1-regular text-justify">
          I welcome you to the website of Electricity Regulatory Commission
          (ERC) of Nepal. As the regulatory body entrusted with overseeing the s
          electricity sector, ERC plays a critical role in shaping the future of
          energy in our country—a role that carries profound implications for
          our economic growth, social development, and national progress.
          Electricity is not merely a commodity; it is the lifeblood of modern
          civilization. It powers our homes, drives our industries, fuels
          innovation, and enables the seamless functioning of every aspect of
          our economy. In a nation like ours, where the promise of development
          hinges on reliable and sustainable energy, the importance of a
          well-regulated electricity sector cannot be overstated. The
          availability, accessibility, and affordability of electricity are
          fundamental to our aspirations for economic prosperity and improved
          quality of life for all citizens. ERC’s mandate is both ambitious and
          vital. We are tasked with the essential responsibility of maintaining
          a delicate balance between the interests of consumers with those of
          investors—a balance that is crucial to fostering a dynamic and
          resilient electricity sector. On one hand, we must ensure that
          electricity services remain accessible, high-quality, and affordable
          for all Nepalese citizens. On the other hand, we must create a
          regulatory environment that encourages investment, innovation, and
          sustainable growth in the energy sector. Achieving this balance is not
          just a regulatory challenge; it is a national imperative. Our
          commitment to advancing much-needed reforms in the electricity sector
          is unwavering. The dynamic nature of the energy landscape demands that
          we remain vigilant, adaptable, and forward-thinking in our approach.
          ERC is dedicated to upholding the highest standards of transparency,
          accountability, and impartiality in all our regulatory actions. We
          recognize that the path to establishment of a fully functional,
          competent, independent and impartial regulatory regime requires a
          proactive stance—one that anticipates challenges, embraces innovation,
          and responds to the evolving needs of our country. As we continue to
          build on the foundations we have laid, ERC will strive to be a pillar
          of stability and trust in the electricity sector. We are committed to
          ensuring that the benefits of electricity—economic growth, social
          progress, and improved quality of life—are realized by all. By
          fostering a fair yet competitive marketplace for electricity, we aim
          to attract the investments necessary for the sectors expansion while
          safeguarding the long-term interests of consumers. In the years ahead,
          ERC will remain steadfast in its mission to guide the electricity
          sector toward a future that is not only sustainable but also equitable
          and inclusive. Our role is more than just regulatory; it is integral
          to the realization of Nepals broader development goals. We are honored
          to serve in this capacity and will continue to work tirelessly to
          ensure that the electricity sector serves as a powerful engine of
          progress for our nation.
        </div>
        {/* image of ceo  */}
        <div>
          {/* Image with hover effect */}
          <div className="w-full lg:w-[24.48931rem] lg:aspect-[391.83/459.00] ">
            <Image
              src={ceo}
              alt="ceo"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text box */}
          <div className=" text-center pt-[1.25rem]">
            <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
              Dr. Ram Prasad Dhital
            </h2>
            <h3 className="typography-p-regular text-text-500 font-bold ">
              Chairperson, Electricity Regulatory Commission of Nepal
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;

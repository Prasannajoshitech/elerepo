import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";

const Introduction = () => {
  const { data } = useGetDataQuery({
    url: endpoints.about,
  });

  console.log(data, "datafadsfgasjfkld");

  return (
    <div>hello</div>
    // <div className="padding-x">
    //   <p className="typography-h3-bold">{aboutData?.data[0].title}</p>

    //   <div className="mt-3">
    //     <p
    //       className="typography-p-regular text-text-400"
    //       dangerouslySetInnerHTML={{
    //         __html: aboutData?.data[0].description || "",
    //       }}
    //     />
    //   </div>
    // </div>
  );
};

export default Introduction;

import React from "react";

const tabItems = [
  {
    title: "अवैतनिक सल्लाहकारको रुपमा चयन गरेको सम्बन्धमा",
    date: "Shrawan 14, 2071",
  },
  {
    title: "इलेक्ट्रिसिटी बिल सम्बन्धी सूचना",
    date: "Bhadra 2, 2071",
  },
  {
    title: "अवैतनिक सल्लाहकारको रुपमा चयन गरेको सम्बन्धमा",
    date: "Shrawan 14, 2071",
  },
  {
    title: "इलेक्ट्रिसिटी बिल सम्बन्धी सूचना",
    date: "Bhadra 2, 2071",
  },
  {
    title: "इलेक्ट्रिसिटी बिल सम्बन्धी सूचना",
    date: "Bhadra 2, 2071",
  },
];

const TabContent = () => {
  return (
    <div className="space-y-[0.88rem]">
      {tabItems.map((item, index) => (
        <div
          key={index}
          className="py-[1rem] px-[1.25rem] rounded-[0.5rem] border-l-2 border-blue-300 bg-background-100 shadow-[0px_2px_18px_4px rgba(51,96,169,0.06)]"
        >
          <p className="typography-p-large text-text-500 font-medium pb-[0.62rem]">
            {item.title}
          </p>
          <p className="typography-p-small text-text-300 font-medium">
            Published Date : {item.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TabContent;

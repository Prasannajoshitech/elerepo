import Link from "next/link";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { formatToNepaliDate } from "@/utils/formatToNepaliDate";

type DocumentCardProps = {
  title: string;
  date: string;
};

export default function DocumentCard({ title, date }: DocumentCardProps) {
  return (
    <div
      className="flex justify-between items-center 
  py-[1rem] px-[1.25rem] rounded-[0.5rem] border-l-2 border-blue-300 bg-white shadow-[0px_2px_18px_4px rgba(51,96,169,0.06)] group cursor-pointer"
    >
      <div>
        <h3 className="typography-p-large text-text-500 font-medium pb-[0.62rem] group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="typography-p-small text-text-300 font-medium">
          Published Date : {formatToNepaliDate(date)}
        </p>
      </div>
      <div className="flex items-center gap-[0.75rem]">
        <Link
          href="#"
          className="flex items-center justify-center w-[1.25rem] h-[1.25rem] lg:w-[2.125rem] lg:h-[2.125rem]"
          title="Download PDF"
        >
          <Image
            src="/pdf2.svg"
            alt="pdf"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center "
          title="View Document"
        >
          <IoEyeSharp className="text-blue-400  lg:w-[2.125rem] lg:h-[2.125rem]" />
        </Link>
      </div>
    </div>
  );
}

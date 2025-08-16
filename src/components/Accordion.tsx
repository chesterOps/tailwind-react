import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Accordion({
  data,
}: {
  data: { title: React.ReactNode; text: React.ReactNode }[];
}) {
  const [active, setActive] = useState<number | undefined>(undefined);
  return (
    <div className="mb-10 border-gray-300 border overflow-hidden rounded-lg rounded-b-none border-b-0">
      {data.map((dat, index) => (
        <div key={index}>
          <button
            type="button"
            className={`flex w-full p-5 hover:bg-gray-100 font-medium items-center justify-between gap-4 ${
              index < data.length ? "border-b border-b-gray-300" : ""
            } ${active === index ? "bg-gray-100" : "text-gray-700"}`}
            onClick={() =>
              setActive(() => (active === index ? undefined : index))
            }
          >
            <span>{dat.title}</span>
            {active !== index ? <BsChevronDown /> : <BsChevronUp />}
          </button>
          {active === index && (
            <p
              className={`p-5 text-gray-700 ${
                index < data.length ? "border-b border-b-gray-300" : ""
              }`}
            >
              {dat.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

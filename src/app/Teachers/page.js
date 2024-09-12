"use client"
import teacher1 from "../../../public/teacher1.jpg";
import teacher2 from "../../../public/teacher2.jpg";
import teacher3 from "../../../public/teacher3.jpg";
import teacher4 from "../../../public/teacher4.jpg";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";
import { Roboto } from "next/font/google";
import { useState } from "react";
import ItemDescription from "./ItemDescription";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function page() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const InstructorData = [
    {
      name: "jhdju jhbdau",
      description: "fshhioj",
      img: teacher1,
      aboutTeacher:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "jhdju jhbdau",
      description: "fshhioj",
      img: teacher2,
      aboutTeacher:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ",
    },
    {
      name: "jhdju jhbdau",
      description: "fshhioj",
      img: teacher3,
      aboutTeacher:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "jhdju jhbdau",
      description: "fshhioj",
      img: teacher4,
      aboutTeacher:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "jhdju jhbdau",
      description: "fshhioj",
      img: teacher1,
      aboutTeacher:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <div>
      <section className="bg-[#EEF9DE] py-10  ">
        <div className="commonContainer">
          <h1
            className={`${playfair.className} md:text-7xl text-2xl px-2 text-left md:py-10 py-4  `}
          >
            Meet Our Team
          </h1>
          <div className=" ">
            {InstructorData.map((item, index) => (
              <div
                key={index}
                className="  zoomBox  flex items-center md:flex-row flex-col my-4 rounded-xl bg-white shadow-lg shadow-indigo-500/40 justify-between p-4 gap-3 md:gap-0"
              >
                <div className="md:w-[30%] w-[100%] flex justify-center">
                  <Image
                    src={item.img}
                    alt="teacher"
                    width={300}
                    className=" rounded"
                  />
                </div>

                <div className="md:w-[65%] w-[100%] flex  flex-col gap-4">
                  <p className={`${roboto.className} font-bold text-2xl`}>
                    {item.name}
                  </p>
                  <p>{item.description}</p>
                  <ItemDescription text={item.aboutTeacher} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;

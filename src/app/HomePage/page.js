import { Playfair_Display } from "@next/font/google";
import { Roboto } from "next/font/google";
import { FaPlay } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import dance1 from "../../../public/danceType1.png";
import dance2 from "../../../public/danceType2.png";
import dance3 from "../../../public/danceType3.png";
import Image from "next/image";
import DanceSlider from "./DanceSlider";
import teacher1 from "../../../public/teacher1.jpg";
import teacher2 from "../../../public/teacher2.jpg";
import teacher3 from "../../../public/teacher3.jpg";
import teacher4 from "../../../public/teacher4.jpg";
import eventImg1 from "../../../public/eventImg1.jpg";
import eventImg2 from "../../../public/eventImg2.jpg";
import eventImg3 from "../../../public/eventImg3.jpg";
import scrollImg1 from "../../../public/scrollImg2.jpg";
import scrollImg2 from "../../../public/ScrollImg-3.jpg";
import scrollImg3 from "../../../public/scrollImg4.jpg";
import scrollImg4 from "../../../public/scrollimg-5.jpg";
import Logo from "../../../public/Logo.png"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const danceTypeData = [
  { type: "Contemporary Dance", img: dance1 },
  { type: "Break Dance", img: dance2 },
  { type: "Hip Hop Dance", img: dance3 },
];

const InstructorData = [
  {
    name: "jhdju jhbdau",
    description: "fshhioj",
    img: teacher1,
  },
  {
    name: "jhdju jhbdau",
    description: "fshhioj",
    img: teacher2,
  },
  {
    name: "jhdju jhbdau",
    description: "fshhioj",
    img: teacher3,
  },
  {
    name: "jhdju jhbdau",
    description: "fshhioj",
    img: teacher4,
  },
  {
    name: "jhdju jhbdau",
    description: "fshhioj",
    img: teacher1,
  },
];

const SpecializeDanceForm = [
  {
    img: scrollImg3,
    text: "gshyuh sdjlfj",
  },
  {
    img: scrollImg4,
    text: "gshyuh sdjlfj",
  },
  {
    img: scrollImg3,

    text: "gshyuh sdjlfj",
  },
  {
    img: scrollImg4,
    text: "gshyuh sdjlfj",
  },
];

function HomePage() {
  return (
    <>
      {" "}
      <div className="homeSctBg">
        <div className="commonContainer">
          <div className="pb-20 pt-20">
            {/* <div className="flex items-start justify-between pb-20 pt-6">
              <div>
                <div className="md:w-[10%] w-[30%] py-2">
                  <Image src={Logo} />
                </div>
              </div>
              <div>
                <IoReorderThreeOutline className="text-3xl" />
              </div>
            </div> */}
            <div className="w-[60%] flex flex-col items-start pb-28 gap-10">
              <h1 className={`${playfair.className} md:text-9xl text-3xl px-2`}>
                Dance To The Beats
              </h1>
              <p
                className={` text-[#aeadad] md:text-2xl text-lg  w-[80%] leading-4 py-4 ${roboto.className}`}
              >
                Learn To Groove To The Rhythm of Music With Us, Sign Up For
                Lessons Today.
              </p>

              <div className="pt-4 ">
                <button className="bg-[#D143B5] rounded-full  text-white py-3 px-3">
                  <div className="flex items-center justify-between gap-2 ">
                    {" "}
                    <span>
                      <FaPlay className="text-white " fill="white" />
                    </span>
                    <p> WATCH TUTORIALS</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#fcc814] ">
        <div className="bg-[#fcc814] flex py-10 commonContainer  items-center justify-between">
          <div className="w-[30%]">
            <p
              className={`${playfair.className} md:text-7xl text-2xl leading-8`}
            >
              Express Yourself Through Dance
            </p>
          </div>
          <div className="w-[70%] flex justify-between ">
            {danceTypeData.map((item, index) => (
              <div
                className="md:w-[30%] w-[100%] bg-[rgb(234,234,234,0.84)] py-8 flex  flex-col gap-4"
                key={index}
              >
                <Image src={item.img} alt="danceType" width={300} />
                <p className=" text-center">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="commonContainer">
        <h1
          className={`${playfair.className} md:text-7xl text-2xl text-center py-20`}
        >
          Specialize In Any Dance Form
        </h1>

        <div className="flex justify-between pb-10 ">
          {SpecializeDanceForm.map((item, index) => (
            <div key={index}>
              <div>
                <Image src={item.img} alt="imageDummy" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#EEF9DE] py-10">
        <h1
          className={`${playfair.className} md:text-7xl text-2xl text-center py-10`}
        >
          Meet Our Instructors
        </h1>
        <div className="flex flex-wrap items-center commonContainer justify-center">
          {InstructorData.map((item, index) => (
            <div
              key={index}
              className=" px-20 pt-10 flex items-center flex-col gap-2"
            >
              <Image src={item.img} alt="teacher" width={200} />

              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#fcc814] py-20">
        <div className="commonContainer flex items-center justify-center  md:flex-row flex-col">
          <h1
            className={`${playfair.className} md:text-5xl text-2xl text-center py-10 w-[70%] leading-6`}
          >
            Sign Up For Dance Lessons & Learn From Professional Dances
          </h1>
          <div className="pt-4 ">
            <button className="bg-[#D143B5] rounded-full  text-white py-3 px-8">
              <div className="flex items-center justify-between gap-2 ">
                <p>Sign Up</p>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="commonContainer py-10">
        <h1
          className={`${playfair.className} md:text-6xl text-2xl md:w-[50%] w-[100%] md:text-left text-center py-10`}
        >
          Upcoming Dance Events
        </h1>
        <div className=" md:flex-row flex-col flex md:justify-between justify-center gap-8 md:gap-0 items-center">
          <div className="flex items-start gap-2 flex-col md:pt-[150px]  ">
            <div className=" relative">
              {" "}
              <Image
                src={eventImg1}
                width={300}
                height={400}
                // layout="responsive"
                alt="Event Image"
              />
              <div className="bg-white absolute bottom-0 right-0 px-2 py-1 text-red-400">
                <p>21</p>
                <p>dec</p>
              </div>
            </div>
            <p className={`${playfair.className} md:text-xl text-gl `}>
              classic Dance
            </p>
            <p className={`${playfair.className}  md:text-gl text-sm`}>
              hgsdoi hzhfk{" "}
            </p>
          </div>
          <div className="flex items-start gap-2 flex-col">
            <div className=" relative ">
              {" "}
              <Image
                src={eventImg1}
                width={300}
                height={400}
                // layout="responsive"
                alt="Event Image"
              />
              <div className="bg-white absolute bottom-0 right-0 px-2 py-1 text-red-400">
                <p>21</p>
                <p>dec</p>
              </div>
            </div>
            <p className={`${playfair.className} md:text-xl text-gl `}>
              classic Dance
            </p>
            <p className={`${playfair.className}  md:text-gl text-sm`}>
              hgsdoi hzhfk{" "}
            </p>
          </div>
          <div className="flex items-start gap-2 flex-col md:mt-[-150px]">
            <div className=" relative">
              {" "}
              <Image
                src={eventImg1}
                width={300}
                height={400}
                // layout="responsive"
                alt="Event Image"
              />
              <div className="bg-white absolute bottom-0 right-0 px-2 py-1 text-red-400">
                <p>21</p>
                <p>dec</p>
              </div>
            </div>
            <p className={`${playfair.className} md:text-xl text-gl `}>
              classic Dance
            </p>
            <p className={`${playfair.className}  md:text-gl text-sm`}>
              hgsdoi hzhfk{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

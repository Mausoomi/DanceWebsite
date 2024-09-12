import Image from "next/image";
import Banner from "../../../public/aboutusbanner.jpg";
import AvtarOne from "../../../public/Avtar-1.jpeg"
import AvtarTwo from "../../../public/Avtar-2.jpg"
import { Playfair_Display } from "@next/font/google";
import OurVisionImg from "../../../public/eventImg2.jpg"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});


function AboutUs() {
    const testimonialData = [
      {
        text: "Meet Virgile, the founder of License2Kizz, an extraordinary Urban Kiz dance studio started in Almere. Virgile's dance story began in 2015, captivated by the rhythmic beats of kizomba. However, it was the transformative year of 2016 that witnessed the revelation of his true passion - Urban Kiz, leading to an exciting evolution in his teaching style.  Since that crucial moment, Urban Kiz has become apart of his life—a thrilling journey of intensive training and unwavering passion, where he immerses himself in the enchantment of Urban Kiz, sharing it weekly. - Bruce  Style",
        img: AvtarOne,
        name: "Virgile",
        comment:
          "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        tag: ["Teaching", "Personal", "Lee"],
        feedback:
          "Virgile's teaching style is downright enchanting, seamlessly blending technical precision with a playful, magnetic flair.",
      },
      {
        text: "Meet Virgile, the founder of License2Kizz, an extraordinary Urban Kiz dance studio started in Almere. Virgile's dance story began in 2015, captivated by the rhythmic beats of kizomba. However, it was the transformative year of 2016 that witnessed the revelation of his true passion - Urban Kiz, leading to an exciting evolution in his teaching style.  Since that crucial moment, Urban Kiz has become apart of his life—a thrilling journey of intensive training and unwavering passion, where he immerses himself in the enchantment of Urban Kiz, sharing it weekly. - Bruce  Style",
        img: AvtarOne,
        name: "Virgile",
        comment:
          "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        tag: ["Teaching", "Personal", "Lee"],
        feedback:
          "Virgile's teaching style is downright enchanting, seamlessly blending technical precision with a playful, magnetic flair.",
      },
    ];


  return (
    <div>
      <div className="w-[100%] ">
        <Image src={Banner} alt="Banner" objectFit="cover" />
      </div>
      <div className="commonContainer py-10">
        <h1 className={`${playfair.className} md:text-7xl text-2xl px-2`}>
          Our Story
        </h1>

        <p className={`${playfair.className} py-4 leading-8`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="commonContainer">
        <div className="w-[100%] flex md:flex-row flex-col gap-4  items-center py-6 border-b-2">
          <div className="md:w-[50%] w-[100%] flex ">
            <Image src={OurVisionImg} alt="imageDummy" />
          </div>
          <div className="md:w-[50%] w-[100%] flex flex-col gap-4 ">
            <h1 className={`${playfair.className} md:text-5xl text-2xl px-2`}>
              Our Mission
            </h1>
            <p className={`md:text-2xl text-lg font-bold`}>
              {" "}
              <p className={`${playfair.className} text-xl`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </p>

            <p className="italic text-xl"></p>
          </div>
        </div>
      </div>

      <div className="commonContainer">
        <div className="w-[100%] flex md:flex-row flex-col gap-4  justify-between items-center py-6 border-b-2">
          <div className="md:w-[50%] w-[100%] flex flex-col gap-4 ">
            <h1 className={`${playfair.className} md:text-5xl text-2xl px-2`}>
              Our Vision
            </h1>
            <p className={`md:text-2xl text-lg font-bold`}>
              {" "}
              <p className={`${playfair.className} text-xl`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </p>

            <p className="italic text-xl"></p>
          </div>
          <div className="md:w-[50%] w-[100%] flex items-end justify-end ">
            <Image src={OurVisionImg} alt="imageDummy" />
          </div>
        </div>
      </div>
      {/* <div className="commonContainer">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="w-[100%] flex md:flex-row flex-col gap-4  items-center py-6 border-b-2"
          >
            <div className="md:w-[50%] w-[70%] flex ">
              <Image src={item.img} className="md:w-[60%] w-[100%] mx-auto " />
            </div>
            <div className="md:w-[50%] w-[100%] flex flex-col gap-4">
              <p className={`md:text-2xl text-lg font-bold`}>{item.name}</p>
              <p>{item.text}</p>
              <p>{item.comment}</p>
              {item?.tag.map((tag, index) => (
                <p key={index}>#{tag}</p>
              ))}
              <p className="italic text-xl">{item.feedback}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default AboutUs;
import React from 'react'
import Logo from "../../public/Logo.png";
import Image from 'next/image';
import footer1 from "../../public/Footer1.jpg"
import footer2 from "../../public/Footer2.jpg"
import footer3 from "../../public/Footer3.jpg"
import footer4 from "../../public/Footer4.jpg"
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function Footer() {
  return (
    <section className="bg-[#EEF9DE]   ">
      <div className="commonContainer md:py-20 py-10 ">
        <div className="flex md:flex-row flex-col items-start md:justify-between justify-center  gap-10 md:gap-0">
          <div className=" w-[100%] md:w-[30%] flex items-center md:items-start gap-6 flex-col">
            <div>
              <div className="  py-2 flex ">
                <Image src={Logo} width={100} alt="imageDummy" />
              </div>
            </div>
            <p className=" text-[#202B46]">
              Train under the best choreographers & learn to express yourself in
              every form of dance. et dolore magna aliqua. Ut enim ad minim
              veniam
            </p>
          </div>
          <div className=" w-[100%] md:w-[15%] flex  gap-6 flex-col items-center md:items-start ">
            <p
              className={`${playfair.className} md:text-[24px] text-[18px] text-[#202B46] font-bold`}
            >
              Social
            </p>
            <ul className=" text-[#202B46] flex items-center md:items-start flex-col gap-4">
              <li>Insta</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className=" w-[100%] md:w-[15%] flex items-center md:items-start gap-6 flex-col">
            <p
              className={`${playfair.className} md:text-[24px] text-[18px]  text-[#202B46]`}
            >
              Links
            </p>
            <ul className=" text-[#202B46]  flex items-center md:items-start flex-col gap-4">
              <li>Insta</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className=" w-[100%] md:w-[30%] flex items-center md:items-start  gap-6 flex-col">
            <p
              className={`${playfair.className}  md:text-[24px] text-[18px] justify-center md:justify-start text-center md:text-start w-[100%] items-center md:items-start  text-[#202B46] `}
            >
              Galley
            </p>
            <div className="flex flex-wrap gap-4 items-center md:items-start justify-center md:justify-start">
              <div>
                <Image src={footer1} alt="imageDummy" />
              </div>
              <div>
                <Image src={footer2} alt="imageDummy" />
              </div>
              <div>
                <Image src={footer3} alt="imageDummy" />
              </div>
              <div>
                <Image src={footer4} alt="imageDummy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
import Image from "next/image";
import React from "react";
import dancingBanner from "../../../public/bannerImg.jpg";
import ContactUs from "../../../public/ContactUsImg.png"

function Contact() {
  return (
    <div>
      <div className="w-[100%]">
        <Image src={dancingBanner} className="w-[100%]" alt="imageDummy" />
      </div>

      <div className="commonContainer py-6">
        <h1 className="md:text-6xl text-2xl font-bold">Contact</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          felis vel ipsum vehicula, a hendrerit lacus tristique. Nullam eu leo
          nec justo varius malesuada ac vel justo. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae;
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed cursus suscipit urna, vel luctus arcu
          cursus in. Phasellus eleifend mauris vitae justo dapibus, sit amet
          hendrerit turpis tincidunt.
        </p>

        <div className="flex items-center justify-center pt-8">
          <Image src={ContactUs} alt="imageDummy" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

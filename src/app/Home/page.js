
import DanceImg from "../../../public/img-dance.jpg";
import Image from "next/image";
import banner1 from "../../../public/foot.jpg"
import banner2 from "../../../public/HomePAgeBAnner.jpg"

function HomePage() {
    const BookingData = [
      {
        address: "6.June.23",
        date: "Amsterdam, Nederland 1105 BJ Amsterdam, Nederland",
      },
      {
        address: "6.June.23",
        date: "Amsterdam, Nederland 1105 BJ Amsterdam, Nederland",
      },
      {
        address: "6.June.23",
        date: "Amsterdam, Nederland 1105 BJ Amsterdam, Nederland",
      },
      {
        address: "6.June.23",
        date: "Amsterdam, Nederland 1105 BJ Amsterdam, Nederland",
      },
      {
        address: "6.June.23",
        date: "Amsterdam, Nederland 1105 BJ Amsterdam, Nederland",
      },
    ];

    return (
      <>
        <div>
          <div className="topHeader md:h-20 h-10 bg-[#F5DE1E]"></div>

          <section>
            <div className="flex w-[100%] ">
              <div className="md:w-[25%] hidden md:block">
                <Image src={DanceImg} alt="Picture of the author" />
              </div>
              <div className="md:w-[25%] hidden md:block">
                <Image src={DanceImg} alt="Picture of the author" />
              </div>
              <div className="md:w-[25%] w-[50%] flex items-center justify-center ">
                <h1 className=" text-center font-bold text-lg md:text-3xl pt-12 ">
                  License 2 Kizz
                </h1>
              </div>
              <div className="md:w-[25%] w-[50%]">
                <Image src={DanceImg} alt="Picture of the author" />
              </div>
            </div>
          </section>
          <section className="lg:bg-[#FBAF03] lg:text-white">
            <div className="commonContainer">
              <div className="md:w-[70%] w-[100%] py-10">
                <h1 className="md:text-balance md:text-7xl font-bold py-3 text-2xl">
                  License 2 Kizz
                </h1>
                <p>
                  License 2 Kiz, where dancing goes beyond mere movement, and
                  every step tells a unique story of connection, expression, and
                  self-discovery. <br />
                  <br />
                  We're not just about learning a dance; it's a journey into the
                  realms of emotion, technique, softness, and playfulness.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div>
                <Image src={banner1} width={100} alt="imageDummy" />
              </div>
              <div>
                <Image src={banner2} width={100} alt="imageDummy" />
              </div>
            </div>
          </section>
          <section>
            <div className="commonContainer">
              <h1 className="md:text-balance md:text-7xl font-bold py-3 text-2xl">
                Our Classes
              </h1>
              <div>
                {BookingData.map((item, index) => (
                  <div
                    key={index}
                    className="flex md:flex-row flex-col justify-between  py-4 items-start gap-1 md:items-center md:w-[70%] "
                  >
                    <div>
                      <p>{item.address}</p>
                      <p>{item.date}</p>
                    </div>
                    <div>
                      <button className="border-solid border-2 px-2">
                        Book Class
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="commonContainer">
            <div className="flex justify-between items-start py-12">
              <h1 className="text-5xl font-bold">Our Playlist</h1>
           
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 md:gap-0 ">
              <p className="md:w-[20%] w-[100%] md:text-left text-center md:text-3xl font-bold text-xl">
                Listen on
              </p>
              <div className=" md:w-[25%] w-[100%]">
                <button className="border-solid border-2  w-[100%]">
                  Spotify
                </button>
              </div>
              <div className=" md:w-[25%] w-[100%]">
                <button className="border-solid border-2   w-[100%]">
                  Youtube
                </button>
              </div>
              <div className=" md:w-[25%] w-[100%]">
                <button className="border-solid border-2   w-[100%]">
                  Soundcloud
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="commonContainer">
              <div className="md:w-[20%] w-[100%]">
                <p className="text-5xl font-bold">Upcoming Bookings</p>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </>
    );
}

export default HomePage;